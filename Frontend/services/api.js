import axios from "axios";
import { oscars } from "../data/mockData.js";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api-render",
  timeout: 20000,
});

export async function getFilms(year, category, signal) {
  const usarMock = import.meta.env.VITE_USE_MOCK === "true";

  // MOCK LOCAL (Para dev/offline)
  if (usarMock) {
    const normalizedCategory = String(category).toLowerCase().replace(/-/g, " ");
    const mockEncontrado = oscars.find(
      (item) =>
        String(item.year.year) === String(year) &&
        item.category.id.toLowerCase().replace(/-/g, " ") === normalizedCategory
    );
    return mockEncontrado ? mockEncontrado.nominees : [];
  }

  // REQUISIÇÃO REAL
  // O contrato diz que a API recebe 'year' e 'category' e deve retornar o recurso filtrado
  const response = await api.get("/search", {
    params: { year, category },
    signal,
  });

  return response.data?.nominees || response.data || [];
}

export default api;