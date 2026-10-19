import { useParams } from "react-router-dom";
import "../style/card.css";
import "../style/Home.css";
import { useEffect, useState } from "react";

export default function Cardfilm({ nominee }) {

  const { categoryId } = useParams()

  if (!nominee) return null;

  const isWinner = nominee.winner === true;
  
  const [poster, setPoster] = useState("")

  useEffect(()=>{
    async function Imagem() {
      try {
        const response = await fetch(nominee.photo)
        const data = await response.json()

        setPoster(data.Poster)
      } catch (error) {
        console.error("Erro na imagem", error)
      }
    }
    Imagem()
  },[nominee.photo])

  return (
    <article
      className={`card-film ${isWinner ? "winner" : "nominee"}`}
    >
      <div className="card-image">
        {nominee.photo ? (
          <img
            src={poster}
            alt={nominee.name || nominee.film}
            loading="lazy"
          />
        ) : (
          <div className="card-image-placeholder">
            Sem imagem
          </div>
        )}
      </div>

      <div className="card-info">
        <h2>{nominee.name}</h2>
        {!categoryId == "best picture" && <p>{nominee.film}</p>}

        {isWinner}
      </div>
    </article>
  );
}
