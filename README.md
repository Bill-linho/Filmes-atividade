# Filmes-atividade
## Retorno(trecho) do backend: 
https://filmes-atividade.onrender.com/search?category=best%20picture&year=2020
```json
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
```
#### Ao analisar o Retorno, para best picture temos várias pessoas como nominees, fazendo com que tenhamos dados repetidos renderizando conteúdo demais.
--- 
## Sugestão de correção: 
Criar RESULTS e dentro os nominees, agrupando por filme, obra...
```json
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
```
---
## Variáveis de Ambiente (Configuração Local)

Para rodar o projeto localmente, crie um arquivo `.env` na raiz do projeto baseando-se no exemplo abaixo:

```env
# Em desenvolvimento (redireciona para o Render via proxy do Vite)
VITE_API_BASE_URL=/api-render

# Alterne para "true" se quiser usar os dados locais (Mock) ou "false" para consumir o backend real
VITE_USE_MOCK=true

exemplo de API que o frontend espera receber: 

{
    "id": "1975",
    "ceremony": 1,
    "year": 1975,
    "categories": {
      "id": "best-picture",
      "name": "Best Picture"
    },
    "nominees": [
      {
        "nominee_id": "nm0001932",
        "name": "Richard Barthelmess",
        "photo": "https://image.tmdb.org/t/p/w500/Barthelmess.jpg",
        "winner": false,
        "film": "The Noose",
        "film_id": "tt0019217"
      },
      {
        "nominee_id": "nm0417837",
        "name": "Emil Jannings",
        "photo": "https://image.tmdb.org/t/p/w500/Jannings.jpg",
        "winner": true,
        "film": "The Last Command",
        "film_id": "tt0019071"
      }
    ]
  }


  URL da API mockada: https://6abe989ac4d5ac5483029d7b.mockapi.io/years
