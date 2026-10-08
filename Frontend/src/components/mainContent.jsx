import Cardfilm from "../components/card.jsx";
import useFetcherFilm  from "../hooks/useFetchFilm.jsx";

export default function MainContent({ movie }) {

const {films, loading, erro} = useFetcherFilm( movie.yearId , movie.categoryId)

if(loading){
  return <p>carregando filmes...</p>
}

if(erro){
  return <p>{erro}</p>
}

  const vencedor = films.find((film) => film.winner);

  const indicados = films.filter((film) => !film.winner);

  const nomineesForTest = [
    ...otherNominees,
    ...otherNominees,
    ...otherNominees,
    ...otherNominees
];


  return (
    <main className="main-content">

      <section className="winner-section">

        <h1>Vencedor</h1>

        {winner && (
          <Cardfilm nominee={vencedor} />
        )}

      </section>


      <section>

        <h1>Indicados</h1>

        <div className="nominees">

          {nomineesForTest.map((nominee, index) => (

            <Cardfilm
              key={`${indicados.nominee_id}-${index}`}
              nominee={nominee}
            />

          ))}
        </div>
      </section>
    </main>
  );
}