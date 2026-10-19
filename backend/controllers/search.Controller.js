import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const nominationsFile = fileURLToPath(
  new URL("../dumps/dump_nominations.json", import.meta.url),
);

const nominationsPromise = readFile(nominationsFile, "utf8").then((data) => {
  const nominations = JSON.parse(data);

  if (!Array.isArray(nominations)) {
    throw new TypeError("O arquivo de indicações precisa conter uma lista.");
  }

  return nominations;
});

const getQueryValue = (value) =>
  typeof value === "string" ? value.trim() : null;

const getFilmPoster = async (filmId) => {
  const apiKey = process.env.OMDB_KEY;

  if (!apiKey) {
    throw new Error("OMDB_KEY is not configured.");
  }

  const url = new URL("https://www.omdbapi.com/");
  url.searchParams.set("i", filmId);
  url.searchParams.set("apikey", apiKey);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`OMDb request failed with status ${response.status}.`);
  }

  const film = await response.json();
  if (film.Response === "False") {
    throw new Error(`OMDb request failed: ${film.Error}`);
  }

  return film.Poster && film.Poster !== "N/A" ? film.Poster : null;
};

export const searchNominations = async (req, res, next) => {
  const category = getQueryValue(req.query.category);
  const year = getQueryValue(req.query.year);

  if (!category || !year) {
    return res.status(400).json({
      error: "Informe os parâmetros category e year.",
    });
  }

  try {
    const nominations = await nominationsPromise;
    const matchingNominations = nominations.filter(
      (nomination) =>
        nomination.category.toLocaleUpperCase() ===
          category.toLocaleUpperCase() &&
        String(nomination.year) === year,
    );

    if (matchingNominations.length === 0) {
      return res.status(404).json({
        error: "Nenhuma indicação encontrada para os parâmetros informados.",
      });
    }

    const firstNomination = matchingNominations[0];
    const nomineeEntries = matchingNominations.flatMap((nomination) => {
      const films = nomination.filmes.length > 0 ? nomination.filmes : [null];

      return nomination.indicados.flatMap((nominee) =>
        films.map((film) => ({
          nominee_id: nominee.id,
          name: nominee.nome,
          film_id: film?.id ?? null,
          film: film?.nome ?? null,
          winner: Boolean(nomination.winner),
        })),
      );
    });

    const posterPromises = new Map();
    const getPoster = (filmId) => {
      if (!posterPromises.has(filmId)) {
        posterPromises.set(filmId, getFilmPoster(filmId));
      }

      return posterPromises.get(filmId);
    };

    const nominees = await Promise.all(
      nomineeEntries.map(async (nominee) => ({
        ...nominee,
        poster: nominee.film_id ? await getPoster(nominee.film_id) : null,
      })),
    );

    return res.json({
      id: String(firstNomination.year),
      ceremony: firstNomination.ceremony,
      year: firstNomination.year,
      category: firstNomination.category.toLowerCase(),
      nominees,
    });
  } catch (error) {
    return next(error);
  }
};
