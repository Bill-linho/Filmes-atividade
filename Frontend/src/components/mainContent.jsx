import { useMemo, useState, useEffect } from "react";
import Cardfilm from "../components/card.jsx";
import "../style/mainContent.css";

export default function MainContent({
  years = [],
  selectedYear = "",
  onSelectYear,
  loading = false,
  oscar = null,
  loadingOscar = false,
  error = "",
}) {
  const [selectedDecade, setSelectedDecade] = useState("");

  // Cálculo memoizado de décadas
  const decades = useMemo(() => {
    const uniqueDecades = new Set(
      years.map((item) => Math.floor(Number(item.year) / 10) * 10)
    );
    return Array.from(uniqueDecades).sort((a, b) => a - b);
  }, [years]);

  // Sincroniza a década selecionada automaticamente quando o selectedYear for alterado externamente
  useEffect(() => {
    if (selectedYear) {
      const decade = Math.floor(Number(selectedYear) / 10) * 10;
      setSelectedDecade(decade);
    }
  }, [selectedYear]);

  // Filtro de anos por década selecionada
  const filteredYears = useMemo(() => {
    if (!selectedDecade) return [];
    return years
      .filter((item) => Math.floor(Number(item.year) / 10) * 10 === Number(selectedDecade))
      .sort((a, b) => Number(a.year) - Number(b.year));
  }, [years, selectedDecade]);

  const handleDecadeClick = (decade) => {
    setSelectedDecade(decade);
    onSelectYear("");
  };

  return (
    <main className="main-content">
      {/* Seção Décadas */}
      <section className="year-navigation">
        <h3 className="year-navigation-title">Décadas</h3>
        <div className="horizontal-scroll">
          {decades.map((decade) => (
            <button
              key={decade}
              type="button"
              className={`decade-button ${selectedDecade === decade ? "selected" : ""}`}
              onClick={() => handleDecadeClick(decade)}
            >
              {decade}s
            </button>
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