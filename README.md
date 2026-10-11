# Filmes-atividade
## Retorno(trecho) do: https://filmes-atividade.onrender.com/search?category=best%20picture&year=2020
{
  "id": "2020",
  "ceremony": 93,
  "year": 2020,
  "category": "BEST PICTURE",
  "nominees": [
    {
      "nominee_id": "nm0661406",
      "name": "David Parfitt",
      "photo": "http://www.omdbapi.com/?i=tt10272386&apikey=e7498063",
      "winner": false,
      "film": "The Father",
      "film_id": "tt10272386"
    },
    {
      "nominee_id": "nm0515201",
      "name": "Jean-Louis Livi",
      "photo": "http://www.omdbapi.com/?i=tt10272386&apikey=e7498063",
      "winner": false,
      "film": "The Father",
      "film_id": "tt10272386"
    },
    {
      "nominee_id": "nm0136260",
      "name": "Philippe Carcassonne",
      "photo": "http://www.omdbapi.com/?i=tt10272386&apikey=e7498063",
      "winner": false,
      "film": "The Father",
      "film_id": "tt10272386"
    }
  ]
}

Ao analisar o Retorno, para best picture temos várias pessoas como nominees, fazendo com que tenhamos dados repetidos renderizando conteúdo demais.
--- 
## Sugestão de correção: Criar RESULTS e dentro os nominees, agrupando por filme, obra...
{
  "year": "2020",
  "category": "BEST PICTURE", 
  "results": [
    {
      "film_id": "tt10272386",
      "film": "The Father",
      "winner": false,
      "nominees": [
        { "nominee_id": "nm0661406", "name": "David Parfitt", "photo": "..." },
        { "nominee_id": "nm0515201", "name": "Jean-Louis Livi", "photo": "..." }
      ]
    }
  ]
}
---
{
  "year": "2020",
  "category": "BEST ACTOR",
  "results": [
    {
      "film_id": "tt1234567",
      "film": "Mank",
      "winner": true,
      "nominees": [
        { "nominee_id": "nm9999999", "name": "Gary Oldman", "photo": "..." }
      ]
    }
  ]
}
---
## Variáveis de Ambiente (Configuração Local)

Para rodar o projeto localmente, crie um arquivo `.env` na raiz do projeto baseando-se no exemplo abaixo:

```env
# Em desenvolvimento (redireciona para o Render via proxy do Vite)
VITE_API_BASE_URL=/api-render

# Alterne para "true" se quiser usar os dados locais (Mock) ou "false" para consumir o backend real
VITE_USE_MOCK=true
