function MainContent({ categoria }) {

  const dados = {

    "Melhor Filme": {
      vencedor: "One Battle After Another",

      indicados: [
        "One Battle After Another",
        "Hamnet",
        "Sinners",
        "Frankenstein",
        "Bugonia"
      ]
    },

    "Melhor Diretor": {
      vencedor: "Diretor vencedor",

      indicados: [
        "Diretor 1",
        "Diretor 2",
        "Diretor 3",
        "Diretor 4",
        "Diretor 5"
      ]
    },

    "Melhor Ator": {
      vencedor: "Ator vencedor",

      indicados: [
        "Ator 1",
        "Ator 2",
        "Ator 3",
        "Ator 4",
        "Ator 5"
      ]
    },

    "Melhor Atriz": {
      vencedor: "Atriz vencedora",

      indicados: [
        "Atriz 1",
        "Atriz 2",
        "Atriz 3",
        "Atriz 4",
        "Atriz 5"
      ]
    },

    "Melhor Animação": {
      vencedor: "Filme de animação vencedor",

      indicados: [
        "Filme Animado 1",
        "Filme Animado 2",
        "Filme Animado 3",
        "Filme Animado 4",
        "Filme Animado 5"
      ]
    },

    "Melhor Filme Internacional": {
      vencedor: "Filme internacional vencedor",

      indicados: [
        "Filme Internacional 1",
        "Filme Internacional 2",
        "Filme Internacional 3",
        "Filme Internacional 4",
        "Filme Internacional 5"
      ]
    },

    "Melhor Documentário": {
      vencedor: "Documentário vencedor",

      indicados: [
        "Documentário 1",
        "Documentário 2",
        "Documentário 3",
        "Documentário 4",
        "Documentário 5"
      ]
    },

    "Melhor Fotografia": {
      vencedor: "Vencedor da fotografia",

      indicados: [
        "Filme 1",
        "Filme 2",
        "Filme 3",
        "Filme 4",
        "Filme 5"
      ]
    },

    "Melhor Montagem": {
      vencedor: "Vencedor da montagem",

      indicados: [
        "Filme 1",
        "Filme 2",
        "Filme 3",
        "Filme 4",
        "Filme 5"
      ]
    },

    "Melhor Figurino": {
      vencedor: "Vencedor do figurino",

      indicados: [
        "Filme 1",
        "Filme 2",
        "Filme 3",
        "Filme 4",
        "Filme 5"
      ]
    }

  };


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