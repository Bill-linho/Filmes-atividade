function Aside({ categoriaSelecionada, selecionarCategoria }) {

  const categorias = {
    "Principais": [
      "Melhor Filme",
      "Melhor Diretor",
      "Melhor Ator",
      "Melhor Atriz"
    ],

    "Filmes": [
      "Melhor Animação",
      "Melhor Filme Internacional",
      "Melhor Documentário"
    ],

    "Técnicas": [
      "Melhor Fotografia",
      "Melhor Montagem",
      "Melhor Figurino"
    ]
  };

  return (
    <aside className="aside">

      <div className="aside-title">
        CATEGORIAS
      </div>

      <div className="aside-line"></div>


      {Object.entries(categorias).map(([grupo, itens]) => (

        <div className="categoria-grupo" key={grupo}>

          <h3>
            {grupo}
          </h3>

          <div className="categoria-itens">

            {itens.map((categoria) => (

              <button
                key={categoria}
                className={
                  categoriaSelecionada === categoria
                    ? "categoria-btn selecionada"
                    : "categoria-btn"
                }
                onClick={() => selecionarCategoria(categoria)}
              >
                {categoria}
              </button>

            ))}

          </div>

        </div>

      ))}

    </aside>
  );
}

export default Aside;