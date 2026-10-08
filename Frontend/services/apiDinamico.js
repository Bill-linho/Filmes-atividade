const API_URL="https://6ac3f1ceae53bf25b80f26cf.mockapi.io/years/category"

// const API_URL = import.meta.env.VITE_API_URL || "/api";

async function request(endpoint) {
  const response = await fetch(`${API_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}

export async function getCategories() {
  try {
    return await request("/categories");
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    throw error;
  }
}

export async function getYears() {
  try {
    return await request("/years");
  } catch (error) {
    console.error("Failed to fetch years:", error);
    throw error;
  }
}

export async function getOscars(year, category) {
  try {
    if (!year || !category) {
      throw new Error("Year and category are required.");
    }

    return await request(
      `/years/${encodeURIComponent(year)}/category/${encodeURIComponent(
        category
      )}`
    );
  } catch (error) {
    console.error(
      `Failed to fetch Oscar data for year "${year}" and category "${category}":`,
      error
    );

    throw error;
  }
}