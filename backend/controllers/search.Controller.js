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
    const nominees = matchingNominations.flatMap((nomination) => {
      const films = nomination.filmes.length > 0 ? nomination.filmes : [null];

      return nomination.indicados.flatMap((nominee) =>
        films.map((film) => ({
          nominee_id: nominee.id,
          name: nominee.nome,
          photo: `http://www.omdbapi.com/?i=${film.id}&apikey=${process.env.OMDB_KEY}`,
          winner: Boolean(nomination.winner),
          film: film?.nome ?? null,
          film_id: film?.id ?? null,
        })),
      );
    });

    return res.json({
      id: String(firstNomination.year),
      ceremony: firstNomination.ceremony,
      year: firstNomination.year,
      category: firstNomination.category,
      nominees,
    });
  } catch (error) {
    return next(error);
  }
};
