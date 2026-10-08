import Aside from "../components/aside.jsx"
import { categories } from "../../data/mockData.js"
import Header from "../components/header.jsx"
import MainContent from "../components/mainContent.jsx"
import "../style/Home.css"
import { useParams } from "react-router-dom";

let globalYear

export default function Home(){

  const movie = useParams()

  console.log(categories)

  return (
    <div className="site">
      <Header />
      <div className="layout">
        <Aside
          categories={categories}
          yearSelect={1975}
        />
        <MainContent
        movie={movie}
        />
      </div>
    </div>
  );
}

