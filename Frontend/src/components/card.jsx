import "../style/card.css";

export default function Cardfilm({ nominee }) {
  if (!nominee) {
    console.log("foto:", nominee.photo);
    
    return null;
  }

  return (
    <div className="card-film">
      <div className="card-image">
        {nominee.photo ? (
          <img
            src={nominee.photo}
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

