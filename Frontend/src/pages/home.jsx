import Aside from "../components/aside.jsx";
import Header from "../components/header.jsx";
import MainContent from "../components/mainContent.jsx";
import { categories } from "../../data/categories.js";
import "../style/Home.css";

export default function Home() {
  return (
    <div className="site">
      <Header />

      <div className="layout">
        <Aside categories={categories} />
        <MainContent />
      </div>
    </div>
  );
}