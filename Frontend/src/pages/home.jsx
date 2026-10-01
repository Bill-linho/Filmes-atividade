import { useState } from "react";

import Header from "../components/header";
import Aside from "../components/aside";
import MainContent from "../components/MainContent";

import "../style/Home.css";

function Home() {

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

export default Home;