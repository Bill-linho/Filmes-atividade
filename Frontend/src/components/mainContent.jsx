import { useMemo, useState, useEffect } from "react";
import Cardfilm from "../components/card.jsx";
import useFetcherFilm  from "../hooks/useFetchFilm.jsx";


function MainContent({ movie }) {

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
    <div className="main-content">

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

      {/* Seção Anos */}
      <section className="year-navigation">
        <h3 className="year-navigation-title">Anos</h3>
        <div className="horizontal-scroll">
          {loading ? (
            <p>Carregando anos...</p>
          ) : (
            filteredYears.map((item) => {
              const yearStr = String(item.year);
              return (
                <button
                  key={item.id || item.year}
                  type="button"
                  className={`year-button ${selectedYear === yearStr ? "selected" : ""}`}
                  onClick={() => onSelectYear(yearStr)}
                >
                  {yearStr}
                </button>
              );
            })
          )}
        </div>
      </section>

      {/* Exibição dos Resultados */}
      {selectedYear && (
        <OscarResults
          oscar={oscar}
          loading={loadingOscar}
          error={error}
        />
      )}
    </main>
  );
}

function OscarResults({ oscar, loading, error }) {
  if (loading) return <p className="oscar-results">Carregando dados do Oscar...</p>;
  if (error) return <p className="oscar-results error">{error}</p>;
  if (!oscar) return <p className="oscar-results">Nenhum dado encontrado para esta seleção.</p>;

  const nonWinners = oscar.nominees?.filter((nominee) => !nominee.winner) || [];

  return (
    <section className="oscar-results">
      <h2>
        {oscar.year?.year} — {oscar.category?.name}
      </h2>

      {oscar.winner && (
        <section className="winner-section">
          <h1>Vencedor</h1>
          <Cardfilm nominee={oscar.winner} />
        </section>
      )}

      {nonWinners.length > 0 && (
        <section>
          <h1>Indicados</h1>
          <div className="nominees">
            {nonWinners.map((nominee, index) => (
              <Cardfilm
                key={nominee.nominee_id ? `${nominee.nominee_id}-${index}` : index}
                nominee={nominee}
              />
            ))}
          </div>
        </section>
      )}
    </section>
  );
}