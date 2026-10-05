import "../style/card.css"

function Cardfilm({ nominee }) {
    return (
        <div className="card-film">

            <img
                src={nominee.photo}
                alt={nominee.film}
            />

            <div className="card-info">
                <h2>{nominee.name}</h2>
                <p>{nominee.film}</p>
            </div>

        </div>
    );
}

export default Cardfilm