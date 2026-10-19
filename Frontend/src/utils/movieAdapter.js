export function adaptApiResponse(data) {
  if (!data) return [];

  // Se a API ou o Mock trouxer o novo formato { results: [...] }
  if (Array.isArray(data.results)) {
    const flatList = [];

    data.results.forEach((movie) => {
      const nomineesArray = movie.nominees || [];

      if (nomineesArray.length === 0) {
        flatList.push({
          film: movie.film,
          film_id: movie.film_id,
          winner: movie.winner,
        });
      } else {
        nomineesArray.forEach((nominee) => {
          flatList.push({
            ...nominee,
            film: movie.film,
            film_id: movie.film_id,
            winner: movie.winner,
          });
        });
      }
    });

    return flatList;
  }

  // Se for o formato antigo plano (array de nominees) ESTE IF PODEMOS deletar SEM MOCK
  if (Array.isArray(data.nominees)) {
    return data.nominees;
  }

  if (Array.isArray(data)) {
    return data;
  }

  return [];
}