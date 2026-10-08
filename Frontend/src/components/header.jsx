import { useMemo, useState, useEffect } from "react";
import Cardfilm from "../components/card.jsx";
import "../style/header.css";

export default function Header({
  years = [],
  selectedYear = "",
  onSelectYear,
  loading = false,
  oscar = null,
  loadingOscar = false,
  error = "",
}) {
  const [selectedDecade, setSelectedDecade] = useState("");

  // ==========================================
  // CALCULA AS DÉCADAS
  // ==========================================

  const decades = useMemo(() => {
    const uniqueDecades = new Set(
      years
        .map((item) => Number(item.year))
        .filter((year) => !isNaN(year))
        .map((year) => Math.floor(year / 10) * 10)
    );

    return Array.from(uniqueDecades).sort(
      (a, b) => a - b
    );
  }, [years]);

  // ==========================================
  // SINCRONIZA A DÉCADA COM O ANO SELECIONADO
  // ==========================================

  useEffect(() => {
    if (selectedYear) {
      const decade =
        Math.floor(Number(selectedYear) / 10) * 10;

      setSelectedDecade(decade);
    }
  }, [selectedYear]);

  // ==========================================
  // FILTRA OS ANOS DA DÉCADA
  // ==========================================

  const filteredYears = useMemo(() => {
    if (!selectedDecade) return [];

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

  // ==========================================
  // CLIQUE NA DÉCADA
  // ==========================================

  const handleDecadeClick = (decade) => {
    setSelectedDecade(decade);

    // Limpa o ano selecionado
    onSelectYear("");
  };

  return (
    <header className="header">

      <div className="container">

        {/* =========================
        TOPO DO HEADER
    ========================= */}

        <div className="header-top">

          <div className="header-logo">
            OSCAR
          </div>

          <div className="header-title">
            ACADEMY AWARDS
          </div>

          <div className="header-year">
            2026
          </div>

        </div>


        {/* =========================
        DÉCADAS
    ========================= */}

        <section className="year-navigation">

          <h3 className="year-navigation-title">
            Décadas
          </h3>

          <div className="horizontal-scroll">

            {decades.map((decade) => (
              <button
                key={decade}
                type="button"
                className={`decade-button ${selectedDecade === decade
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


        {/* =========================
        ANOS
    ========================= */}

        <section className="year-navigation">

          <h3 className="year-navigation-title">
            Anos
          </h3>

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
                    className={`year-button ${selectedYear === yearStr
                      ? "selected"
                      : ""
                      }`}
                    onClick={() =>
                      onSelectYear(yearStr)
                    }
                  >
                    {yearStr}
                  </button>
                );

              })
            )}

          </div>

        </section>

      </div>

    </header>
  );
}
