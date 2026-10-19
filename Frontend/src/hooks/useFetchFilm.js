import { useEffect, useState } from "react";
import { getFilms } from "../../services/api.js";
import axios from "axios";

export default function useFetchFilm(year, category) {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // if (!year || !category) {
    //   setFilms([]);
    //   setLoading(false);
    //   return;
    // }

    let isMounted = true;
    const controller = new AbortController();

    async function fetchFilms() {
      setLoading(true);
      setError("");
      setFilms([]); // Limpa a tela imediatamente ao mudar de filtro ou alternar Mock/Back

      try {
        const response = await axios.get(`https://filmes-atividade.onrender.com/search?category=${category}&year=${year}`)
        const data = response.data.nominees
        console.log(response)
        console.log(response.nominees)
        console.log(data)
        
        // if (!Array.isArray(data)) {
        //   throw new Error("Resposta da API em formato inesperado.");
        // }

        if (isMounted) {
          setFilms(data);
        }
      } catch (err) {
        if (err.code === "ERR_CANCELED" || err.name === "CanceledError") return;

        console.error("Erro ao buscar filmes:", err);
        if (isMounted) {
          setFilms([]);
          setError("Não foi possível carregar os indicados.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchFilms();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [year, category]);

  console.log("Retorno do Rook", films ,loading)
  return { films, loading, error };
}