import { useEffect, useState } from "react";

import Header from "../components/header.jsx";
import Aside from "../components/aside.jsx";
import MainContent from "../components/mainContent.jsx";

import {
  getCategories,
  getYears,
  getOscars,
} from "../../services/api.js";

import "../style/Home.css";

function Home() {
  const [categories, setCategories] = useState([]);
  const [years, setYears] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const [selectedYear, setSelectedYear] = useState("");

  const [oscar, setOscar] = useState(null);

  const [loading, setLoading] = useState(true);
  const [loadingOscar, setLoadingOscar] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    async function loadInitialData() {
      try {
        setLoading(true);
        setError("");

        const [categoriesData, yearsData] =
          await Promise.all([
            getCategories(),
            getYears(),
          ]);

        setCategories(categoriesData);
        setYears(yearsData);
      } catch (error) {
        console.error(error);
        setError("Failed to load page data.");
      } finally {
        setLoading(false);
      }
    }

    loadInitialData();
  }, []);

  useEffect(() => {
    if (!selectedYear || !selectedCategory) {
      setOscar(null);
      return;
    }

    async function loadOscar() {
      try {
        setLoadingOscar(true);

        const data = await getOscars(
          selectedYear,
          selectedCategory
        );

        setOscar(data);
      } catch (error) {
        console.error(error);
        setOscar(null);
      } finally {
        setLoadingOscar(false);
      }
    }

    loadOscar();
  }, [selectedYear, selectedCategory]);

  return (
    <div className="site">
      <Header />

      <div className="layout">
        <Aside
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          loading={loading}
        />

        <MainContent
          years={years}
          selectedYear={selectedYear}
          onSelectYear={setSelectedYear}
          loading={loading}
          oscar={oscar}
          loadingOscar={loadingOscar}
          error={error}
        />
      </div>
    </div>
  );
}

export default Home;

