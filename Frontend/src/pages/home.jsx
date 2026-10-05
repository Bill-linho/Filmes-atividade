import Aside from "../components/aside.jsx";
import Header from "../components/header.jsx"
import MainContent from "../components/mainContent.jsx"
import { useState, useEffect } from "react";
import { getCategories } from "../../services/api.js";
import "../style/Home.css"

function Home(){

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);

  // Busca a lista de categorias ao carregar a página
  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Failed to load categories:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  
  return (
    <div className="site">
      <Header />
      <div className="layout">
        <Aside
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={(id) => setSelectedCategory(id)}
          loading={loading}
        />

        {/* O MainContent recebe o selectedCategory para buscar os filmes correspondentes no backend */}
        <MainContent selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}

export default Home