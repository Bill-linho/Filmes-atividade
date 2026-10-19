import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DEFAULT_YEAR, DEFAULT_CATEGORY } from "../constants/defaultRoute.js";
import "../style/header.css";
import "../style/Home.css";

const FIRST_YEAR = 1927;
const LAST_YEAR = 2025;

const years = Array.from(
  { length: LAST_YEAR - FIRST_YEAR + 1 },
  (_, index) => LAST_YEAR - index
);

const decades = [
  { label: "Todas as décadas", start: null, end: null },
  ...Array.from({ length: 10 }, (_, index) => {
    const start = 1930 + index * 10;
    return {
      label: `${start}s`,
      start,
      end: start + 9,
    };
  }),
];

export default function Header() {
  const { yearId, categoryId } = useParams();
  const navigate = useNavigate();
  const [selectedDecade, setSelectedDecade] = useState(null);

  const activeYear = yearId || DEFAULT_YEAR;
  const activeCategory = categoryId || DEFAULT_CATEGORY;

  function changeYear(year) {
    if (!year) return;
    navigate(`/year/${year}/category/${encodeURIComponent(activeCategory)}`);
  }

  function changeDecade(decadeObj) {
    if (!decadeObj || decadeObj.start === null) {
      setSelectedDecade(null);
      return;
    }

    setSelectedDecade(decadeObj.start);

    const availableYear = years.find(
      (year) => year >= decadeObj.start && year <= decadeObj.end
    );

    if (availableYear) {
      changeYear(availableYear);
    }
  }

  const filteredYears = selectedDecade
    ? years.filter(
        (year) => year >= selectedDecade && year <= selectedDecade + 9
      )
    : years;

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-logo">OSCAR</div>
        <div className="header-title">ACADEMY AWARDS</div>
        <div className="header-year">{activeYear}</div>
      </div>

      <div className="header-navigation-container">
        <section className="year-navigation">
          <div className="horizontal-scroll">
            {decades.map((decade) => {
              const isSelected = selectedDecade === decade.start;
              return (
                <button
                  key={decade.label}
                  type="button"
                  className={`decade-button ${isSelected ? "selected" : ""}`}
                  onClick={() => changeDecade(decade)}
                >
                  {decade.label}
                </button>
              );
            })}
          </div>
        </section>

        <section className="year-navigation">
          <div className="horizontal-scroll">
            {filteredYears.map((year) => {
              const isSelected = String(activeYear) === String(year);
              return (
                <button
                  key={year}
                  type="button"
                  className={`year-button ${isSelected ? "selected" : ""}`}
                  onClick={() => changeYear(year)}
                >
                  {year}
                </button>
              );
            })}
          </div>
        </section>
      </div>
    </header>
  );
}