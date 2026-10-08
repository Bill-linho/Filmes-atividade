import Aside from "../components/aside.jsx"
import Header from "../components/header.jsx"
import MainContent from "../components/mainContent.jsx"
import { useState } from "react";
import "../style/Home.css"
import { useParams } from "react-router-dom";

function Home(){

  const movie = useParams()

  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState("Melhor Filme");


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
        movie={movie}
        />
      </div>
    </div>
  );
}