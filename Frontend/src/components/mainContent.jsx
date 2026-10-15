import { useParams } from "react-router-dom";
import Cardfilm from "./card.jsx";
import useFetchFilm from "../hooks/useFetchFilm.js";
import { DEFAULT_YEAR, DEFAULT_CATEGORY } from "../constants/defaultRoute.js";
import "../style/mainContent.css";



export default function MainContent() {
  const { yearId, categoryId } = useParams();

  const year = yearId || DEFAULT_YEAR;
  const category = categoryId || DEFAULT_CATEGORY;

  const { films, loading, error } = useFetchFilm(year, category);
  if (loading) {
    return (
      <main className="main-content">
        <p>Carregando filmes...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="main-content">
        <p role="alert">{error}</p>
      </main>
    );
  }

  const winners = films.filter((film) => film.winner === true);
  const nominees = films.filter((film) => film.winner === false);

  if(categoryId == "best picture"){
    winners[0].name = winners[0].film
    nominees[0].name = nominees[0].film
  }

  console.log("categry: ", winners)
  return (
    <main className="main-content">
      <section className="winner-section">
        <h1>Vencedor</h1>

        {winners.length > 0
          ? categoryId == 'best picture'
            ? (<div className="nominees">

              <Cardfilm nominee={winners[0]} />

            </div>
            )
            : (
              <div className="winners">
                {winners.map((film) => (
                  <Cardfilm key={film.nominee_id} nominee={film} />
                ))}
              </div>
            ) : (
            <p>Nenhum vencedor encontrado.</p>
          )}
      </section>

      <section className="nominees-section">
        <h1>Indicados</h1>

        {nominees.length > 0
          ? nominees.category == 'best picture'
            ? (<div className="nominees">

              <Cardfilm nominee={nominees[0]} />

            </div>
            )
            :
            (<div className="nominees">
              {nominees.map((film) => (
                <Cardfilm key={film.nominee_id} nominee={film} />
              ))}
            </div>
            )
          : (
            <p>Nenhum outro indicado encontrado.</p>
          )}
      </section>
    </main>
  );
}
