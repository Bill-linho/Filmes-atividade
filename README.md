# Filmes-atividade

exemplo de API que o frontend espera receber:

```
{ 
    "id": "1975", 
    "ceremony": 1, 
    "year": 1975, 
    "category": "BEST PICTURE", 
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
```