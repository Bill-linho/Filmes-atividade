import { useParams } from "react-router-dom";
import Cardfilm from "./card.jsx";
import useFetchFilm from "../hooks/useFetchFilm.js";
import "../style/mainContent.css";

const DEFAULT_YEAR = "1975";
const DEFAULT_CATEGORY = "best-actor";

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

  return (
    <main className="main-content">
      <section className="winner-section">
        <h1>Vencedor</h1>

        {winners.length > 0 ? (
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

        {nominees.length > 0 ? (
          <div className="nominees">
            {nominees.map((film) => (
              <Cardfilm key={film.nominee_id} nominee={film} />
            ))}
          </div>
        ) : (
          <p>Nenhum outro indicado encontrado.</p>
        )}
      </section>
    </main>
  );
}
