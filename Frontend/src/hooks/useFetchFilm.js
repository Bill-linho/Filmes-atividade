import { useEffect, useState } from "react";
import { getFilms } from "../../services/api.js";

export default function useFetchFilm(year, category) {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!year || !category) {
      setFilms([]);
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    async function fetchFilms() {
      setLoading(true);
      setError("");

      try {
        const data = await getFilms(
          year,
          category,
          controller.signal
        );

        if (!Array.isArray(data)) {
          throw new Error("Resposta da API em formato inesperado.");
        }

        setFilms(data);
      } catch (err) {
        if (err.code === "ERR_CANCELED") return;

        console.error("Erro ao buscar filmes:", err);
        setFilms([]);
        setError("Não foi possível carregar os indicados.");
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchFilms();

    return () => controller.abort();
  }, [year, category]);

  return { films, loading, error };
}
