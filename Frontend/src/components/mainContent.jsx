import "../style/mainContent.css";
import Cardfilm from "../components/card.jsx";

import { useEffect, useState } from "react";
import axios from "axios";

function MainContent() {

  const [year, setYear] = useState(1977)
  const [category, setCategory] = useState("best-picture")

  const [nominee, setNominee] = useState([]);

  useEffect(() => {

    const getFilms = async () => {

      try {

        const response = await axios.get(
          `https://6abe989ac4d5ac5483029d7b.mockapi.io/years/${year}`
        );

        setNominee(response.data.nominees)

      } catch (erro) {
        console.error("Erro ao buscar dados:", erro);

        setNominee([])
      }

    };

    getFilms();

  }, [year, category]);


  const winner = nominee.find(
    (nominee) => nominee.winner === true
  );

  const otherNominees = nominee.filter(
    (nominee) => nominee.winner === false
  );

  const nomineesForTest = [
    ...otherNominees,
    ...otherNominees,
    ...otherNominees,
    ...otherNominees
];


  return (
    <div className="main-content">

      <section className="winner-section">

        <h1>Vencedor</h1>

        {winner && (
          <Cardfilm nominee={winner} />
        )}

      </section>


      <section>

        <h1>Indicados</h1>

        <div className="nominees">

          {nomineesForTest.map((nominee, index) => (

            <Cardfilm
              key={`${nominee.nominee_id}-${index}`}
              nominee={nominee}
            />

          ))}

        </div>

      </section>

    </div>
  );
}

export default MainContent;