import axios from "axios";
import { oscars } from "../data/mockData.js";
import { adaptApiResponse } from "../src/utils/movieAdapter.js";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api-render",
  timeout: 20000,
});

export async function getFilms(year, category, signal) {
  const usarMock = import.meta.env.VITE_USE_MOCK === "true";
  const targetCategory = decodeURIComponent(category || "").toLowerCase().trim();

  // 1. MOCK LOCAL
  if (usarMock) {
    const mockEncontrado = oscars.find(
      (item) =>
        String(item.year?.year || item.year) === String(year) &&
        String(item.category?.id || item.category).toLowerCase().trim() === targetCategory
    );

    if (!mockEncontrado) return [];

    // SE O MOCK POSSUI "results", PASSA PELO ADAPTADOR!
    if (mockEncontrado.results) {
      return adaptApiResponse(mockEncontrado);
    }

    return mockEncontrado.nominees || [];
  }

  // 2. REQUISIÇÃO REAL AO BACKEND
  const response = await api.get("/search", {
    params: { year, category: targetCategory },
    signal,
  });

  return adaptApiResponse(response.data);
}

export default api;

// SEM MOCK:
// import axios from "axios";
// import { adaptApiResponse } from "../utils/movieAdapter.js";

// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL || "/api-render",
//   timeout: 20000,
// });

// export async function getFilms(year, category, signal) {
//   const targetCategory = decodeURIComponent(category || "").toLowerCase().trim();

//   const response = await api.get("/search", {
//     params: { year, category: targetCategory },
//     signal,
//   });

//   return adaptApiResponse(response.data);
// }

// export default api;