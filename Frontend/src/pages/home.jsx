import { useState, useEffect } from "react";
import Header from "../components/header.jsx";
import Aside from "../components/aside.jsx";
import MainContent from "../components/mainContent.jsx";
import { useHomeData, useOscarData } from "../hooks/useHomeData.js";
import "../style/Home.css";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const { categories, years, loading: loadingInitial, error: initialError } = useHomeData();

  // EFETO PARA DEFINIR O VALOR PADRÃO INICIAL
  useEffect(() => {
    if (years.length > 0 && categories.length > 0) {
      // 1. Pega o último ano (assumindo que os anos estão ordenados ou buscando o maior)
      const lastYearObj = years.reduce((max, item) => 
        Number(item.year) > Number(max.year) ? item : max
      , years[0]);

      // 2. Busca a categoria "Melhor Filme" (ou pega a primeira caso não ache pelo nome)
      const defaultCategory = categories.find(
        (cat) => cat.name.toLowerCase().includes("melhor filme") || cat.name.toLowerCase().includes("best picture")
      ) || categories[0];

      // 3. Seta os estados iniciais padrão
      setSelectedYear(String(lastYearObj.year));
      setSelectedCategory(String(defaultCategory.id));
    }
  }, [years, categories]);

  // O hook useOscarData é disparado automaticamente assim que os dois estados acima são preenchidos
  const { oscar, loading: loadingOscar, error: oscarError } = useOscarData(
    selectedYear,
    selectedCategory
  );

  return (
    <div className="site">
      <Header />
      <div className="layout">
        <Aside
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          loading={loadingInitial}
        />
        <MainContent
          years={years}
          selectedYear={selectedYear}
          onSelectYear={setSelectedYear}
          loading={loadingInitial}
          oscar={oscar}
          loadingOscar={loadingOscar}
          error={initialError || oscarError}
        />
      </div>
    </div>
  );
}