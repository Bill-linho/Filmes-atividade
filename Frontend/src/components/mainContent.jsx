import "../style/mainContent.css";
import Cardfilm from "../components/card.jsx";

import { useMemo, useState } from "react";

function MainContent({
  years = [],
  selectedYear = "",
  onSelectYear,
  loading = false,
  oscar = null,
  loadingOscar = false,
  error = "",
}) {
  const [selectedDecade, setSelectedDecade] = useState("");

  const decades = useMemo(() => {
    return [
      ...new Set(
        years.map(
          (item) =>
            Math.floor(Number(item.year) / 10) * 10
        )
      ),
    ].sort((a, b) => a - b);
  }, [years]);

  const filteredYears = useMemo(() => {
    if (!selectedDecade) {
      return [];
    }

    return years
      .filter(
        (item) =>
          Math.floor(Number(item.year) / 10) * 10 ===
          Number(selectedDecade)
      )
      .sort(
        (a, b) =>
          Number(a.year) - Number(b.year)
      );
  }, [years, selectedDecade]);

  function handleDecadeClick(decade) {
    setSelectedDecade(decade);
    onSelectYear("");
  }

  function handleYearClick(year) {
    onSelectYear(String(year));
  }

  return (
    <main className="main-content">
      <section className="year-navigation">
        <h3 className="year-navigation-title">
          Decades
        </h3>

        <div className="horizontal-scroll">
          {decades.map((decade) => (
            <button
              key={decade}
              type="button"
              className={`decade-button ${
                selectedDecade === decade
                  ? "selected"
                  : ""
              }`}
              onClick={() =>
                handleDecadeClick(decade)
              }
            >
              {decade}s
            </button>
          ))}
        </div>
      </section>

      <section className="year-navigation">
        <h3 className="year-navigation-title">
          Years
        </h3>

        <div className="horizontal-scroll">
          {loading ? (
            <p>Loading years...</p>
          ) : (
            filteredYears.map((item) => {
              const year = String(item.year);

              return (
                <button
                  key={item.id}
                  type="button"
                  className={`year-button ${
                    selectedYear === year
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleYearClick(year)
                  }
                >
                  {year}
                </button>
              );
            })
          )}
        </div>
      </section>

      {selectedYear && (
        <section className="oscar-results">
          {loadingOscar && (
            <p>Loading Oscar data...</p>
          )}

          {!loadingOscar && error && (
            <p>{error}</p>
          )}

          {!loadingOscar && !error && oscar && (
            <>
              <h2>
                {oscar.year.year} —{" "}
                {oscar.category.name}
              </h2>

              <section className="winner-section">
                <h1>Vencedor</h1>

                <Cardfilm
                  nominee={oscar.winner}
                />
              </section>

              <section>
                <h1>Indicados</h1>

                <div className="nominees">
                  {oscar.nominees
                    ?.filter(
                      (nominee) => !nominee.winner
                    )
                    .map((nominee, index) => (
                      <Cardfilm
                        key={`${nominee.nominee_id}-${index}`}
                        nominee={nominee}
                      />
                    ))}
                </div>
              </section>
            </>
          )}

          {!loadingOscar &&
            !error &&
            selectedYear &&
            !oscar && (
              <p>
                No Oscar data found for this selection.
              </p>
            )}
        </section>
      )}
    </main>
  );
}

export default MainContent;