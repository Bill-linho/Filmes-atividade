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
  const [selectedDecade, setSelectedDecade] =
    useState("");

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

              <div className="nominees">
                {oscar.nominees?.map((nominee) => (
                  <article
                    key={`${nominee.nominee_id}-${nominee.film_id}`}
                    className={
                      nominee.winner
                        ? "nominee winner"
                        : "nominee"
                    }
                  >
                    <h3>{nominee.name}</h3>

                    <p>{nominee.film}</p>

                    {nominee.winner && (
                      <strong>WINNER</strong>
                    )}
                  </article>
                ))}
              </div>
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
