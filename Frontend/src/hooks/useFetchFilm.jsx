import { useEffect, useState } from "react";
import axios from "axios";
  
function useFetchFilm(year, category) {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    if (!year || !category) return;

    const getFilms = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://filmes-atividade.onrender.com/search?category=${category}&year=${year}`
        );

        // Extract the array from response.data.nominees
        setFilms(response.data.nominees || []);
        setLoading(false);
      } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
        setErro(true);
        setLoading(false);
      }
    };

    getFilms();
  }, [year, category]);

  return { films, loading, erro };
}

export default useFetchFilm;