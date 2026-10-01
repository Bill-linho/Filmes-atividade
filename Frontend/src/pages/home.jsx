import Aside from "../components/aside.jsx"
import Header from "../components/header.jsx"
import MainContent from "../components/mainContent.jsx"
import { useState } from "react";
import "../style/Home.css"

function Home(){

  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState("Melhor Filme");


  return (
    <div className="site">

      <Header />

      <div className="layout">

        <Aside
          categoriaSelecionada={categoriaSelecionada}
          selecionarCategoria={setCategoriaSelecionada}
        />

        <MainContent
          categoria={categoriaSelecionada}
        />

      </div>

    </div>
  );   
}

export default Home