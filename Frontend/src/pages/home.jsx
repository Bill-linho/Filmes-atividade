import { useState, useEffect } from "react";
import Header from "../components/header.jsx";
import Aside from "../components/aside.jsx";
import { useHomeData, useOscarData } from "../hooks/useHomeData.js";
import "../style/Home.css";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const {
    categories,
    years,
    loading: loadingInitial,
    error: initialError,
  } = useHomeData();

  // Define o ano e a categoria padrão
  useEffect(() => {
    if (years.length > 0 && categories.length > 0) {
      // Pega o maior ano disponível
      const lastYearObj = years.reduce(
        (max, item) =>
          Number(item.year) > Number(max.year)
            ? item
            : max,
        years[0]
      );

      // Procura Best Picture / Melhor Filme
      const defaultCategory =
        categories.find(
          (cat) =>
            cat.name
              ?.toLowerCase()
              .includes("melhor filme") ||
            cat.name
              ?.toLowerCase()
              .includes("best picture")
        ) || categories[0];

      setSelectedYear(String(lastYearObj.year));
      setSelectedCategory(String(defaultCategory.id));
    }
  }, [years, categories]);

  // Busca os dados do Oscar
  const {
    oscar,
    loading: loadingOscar,
    error: oscarError,
  } = useOscarData(
    selectedYear,
    selectedCategory
  );

  return (
    <div className="site">

      {/* HEADER */}
      <Header
        years={years}
        selectedYear={selectedYear}
        onSelectYear={setSelectedYear}
        loading={loadingInitial}
        oscar={oscar}
        loadingOscar={loadingOscar}
        error={initialError || oscarError}
      />

      <div className="layout">

        {/* MENU LATERAL */}
        <Aside
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          loading={loadingInitial}
        />

      </div>
    </div>
  );
}