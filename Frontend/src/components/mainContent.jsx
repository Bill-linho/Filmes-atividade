import Cardfilm from "../components/card.jsx";
import useFetcherFilm from "../hooks/useFetchFilm.jsx";

export default function MainContent({ movie }) {
  const { films, loading, erro } = useFetcherFilm(movie.yearId, movie.categoryId);

  if (loading) {
    return <p className="p-5">Carregando filmes...</p>;
  }

  if (erro) {
    return <p>Erro ao carregar os filmes.</p>;
  }

  // Guaranteed to be an array now
  const vencedor = films.find((film) => film.winner);
  const indicados = films.filter((film) => !film.winner);

  return (
    <main className="main-content">
      <section className="winner-section">
        <h1 className="text-4xl pb-5 font-bold">Vencedor</h1>
        {vencedor && (
          <Cardfilm nominee={vencedor} />
        )}
      </section>

      <section>
        <h1 className='text-2xl py-5'>Indicados</h1>
        <div className="nominees">
          {indicados.map((nominee, index) => (
            <Cardfilm
              key={nominee.nominee_id || index}
              nominee={nominee}
            />
          ))}
        </div>
      </section>
    </main>
  );
}