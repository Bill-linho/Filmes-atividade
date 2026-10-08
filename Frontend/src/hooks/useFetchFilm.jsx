import { useEffect, useState, } from "react";
import loading from "../pages/loading";
import axios from "axios"
  
function useFetchFilm(year, category){

const [films, setFilms] = useState([])
const [loading, setLoading] = useState(true)
const [erro, setErro] = useState(false)

  useEffect(() => {

    const getFilms = async () => {

      try {

        const response = await axios.get(
          `https://6abe989ac4d5ac5483029d7b.mockapi.io/years/${year}/${category}`
        );

        setFilms(response.data)
        setLoading(false)

      } catch (erro) {
        console.error("Erro ao buscar dados:", erro);

        setErro(true)
        setLoading(false)
      }

    };

    getFilms();

  }, [year, category]);

  return { films, loading, erro}
}

export default useFetchFilm