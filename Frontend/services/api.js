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