import { useParams } from "react-router-dom";
import Aside from "../components/aside.jsx";
import Header from "../components/header.jsx";
import MainContent from "../components/mainContent.jsx";
import { categories } from "../../data/categories.js";
import "../style/Home.css";


export default function Home() {
  const { yearId, categoryId } = useParams();

  return (
    <div className="site">
      <Header />

      <div className="layout">
        <Aside categories={categories} />

        <MainContent
          year={yearId}
          category={categoryId}
        />
      </div>
    </div>
  );
}
