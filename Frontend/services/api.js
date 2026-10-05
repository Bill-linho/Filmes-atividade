const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://mockapi.io/projects/6ac3f1ceae53bf25b80f26d0/years/category/1975";

export async function getCategories() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    const categoriesMap = new Map();

    data.forEach((item) => {
      if (item.categories?.id) {
        categoriesMap.set(item.categories.id, item.categories);
      }
    });

    return Array.from(categoriesMap.values());
  } catch (error) {
    console.warn("API indisponível, usando categorias locais:", error);
    return []; // Retorna array vazio em caso de falha na rede sem estourar o catch na Home
  }
}