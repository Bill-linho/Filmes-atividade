import "../style/card.css";

export default function Cardfilm({ nominee }) {
  if (!nominee) {
    console.log("foto:", nominee.poster);
    
    return null;
  }

  return (
    <div className="card-film">
      <div className="card-image">
        {nominee.poster ? (
          <img
            src={nominee.poster}
            alt={nominee.name}
          />
        ) : (
          <div className="card-image-placeholder">
            Sem imagem
          </div>
        )}
      </div>

      <div className="card-info">
        <h2>{nominee.name}</h2>
        <p>{nominee.film}</p>
      </div>
    </div>
  );
}

