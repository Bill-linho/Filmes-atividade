import axios from "axios";
import { oscars } from "../data/mockData.js";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api-render",
  timeout: 20000,
});

export async function getFilms(year, category, signal) {
  const usarMock = import.meta.env.VITE_USE_MOCK === "true";

  // Apenas decodifica a URL (ex: "best%20picture" -> "best picture") e padroniza caixa baixa
  const targetCategory = decodeURIComponent(category || "").toLowerCase().trim();

  // 1. MOCK LOCAL
  if (usarMock) {
    const mockEncontrado = oscars.find(
      (item) =>
        String(item.year?.year || item.year) === String(year) &&
        String(item.category?.id || item.category).toLowerCase().trim() === targetCategory
    );
    return mockEncontrado ? mockEncontrado.nominees : [];
  }

  // 2. REQUISIÇÃO REAL AO BACKEND (sem nenhuma manipulação dos dados retornados)
  const response = await api.get("/search", {
    params: { year, category: targetCategory },
    signal,
  });

  return response.data?.nominees || response.data || [];
}

export default api;