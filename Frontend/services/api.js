import {
  categories,
  years,
  oscars,
} from "../data/mockData.js";

export async function getCategories() {
  return categories;
}

export async function getYears() {
  return years;
}

export async function getOscars(year, category) {
  return (
    oscars.find(
      (item) =>
        Number(item.year.year) === Number(year) &&
        item.category.id === category
    ) ?? null
  );
}

/*Consumindo back*:
import axios from "axios";

// Instância centralizada do Axios
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api", // URL do seu backend
  timeout: 10000, // Tempo limite de resposta (10s)
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getCategories() {
  const response = await api.get("/categories");
  return response.data;
}

export async function getYears() {
  const response = await api.get("/years");
  return response.data;
}

export async function getOscars(year, category) {
  const response = await api.get("/oscars", {
    params: {
      year,
      category,
    },
  });
  return response.data;
}

export default api;*/