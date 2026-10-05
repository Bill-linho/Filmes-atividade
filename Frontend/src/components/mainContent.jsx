// useEffect(() => {
//   async function fetchCategoryDetails() {
//     try {
//       // Exemplo de chamada enviando o ID selecionado para o backend
//       const response = await fetch(`https://6ac3f1ceae53bf25b80f26cf.mockapi.io/years?category=${selectedCategory}`);
//       const data = await response.json();
//       // Atualiza o estado dos filmes/indicados na tela...
//     } catch (err) {
//       console.error("Erro ao buscar dados da categoria:", err);
//     }
//   }

//   if (selectedCategory) {
//     fetchCategoryDetails();
//   }
// }, [selectedCategory]); // <--- Dispara sempre que o usuário muda a categoria no Aside

import "../style/mainContent.css";
import { dados } from "../temp/dados.js";

function MainContent({ categoria }) {

  const categoriaAtual = dados[categoria];


  if (!categoriaAtual) {
    return (
      <main className="main-content">

        <div className="inicio">

          <h1>Academy Awards</h1>

          <p>
            Selecione uma categoria ao lado para visualizar
            o vencedor e os indicados.
          </p>

        </div>

      </main>
    );
  }


  return (
    <main className="main-content">

      <div className="categoria-header">

        <span>CATEGORIA</span>

        <h1>
          {categoria}
        </h1>

      </div>


      {/* VENCEDOR */}

      <section className="vencedor">

        <h2>
          🏆 VENCEDOR
        </h2>

        <div className="vencedor-nome">
          {categoriaAtual.vencedor}
        </div>

      </section>


      {/* INDICADOS */}

      <section className="indicados">

        <h2>
          INDICADOS
        </h2>

        <div className="indicados-lista">

          {categoriaAtual.indicados.map((filme, index) => (

            <div
              className={
                index === 0
                  ? "indicado vencedor-item"
                  : "indicado"
              }
              key={index}
            >

              <span className="numero">
                {index + 1}
              </span>

              <span>
                {filme}
              </span>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}

export default MainContent;

