export function groupCategories(categories = []) {
  return {
    mainCategories: categories.filter(
      (category) => category.group === "main"
    ),

    otherCategories: categories.filter(
      (category) => category.group === "other"
    ),
  };
}
 //abaixo seria dinamico? sem os dados do mock

// // 1. As 8 Categorias Principais (Main Categories)
// export const MAIN_CATEGORIES = [
//   { id: "best-picture", name: "Best Picture" },
//   { id: "best-director", name: "Best Director" },
//   { id: "best-actor", name: "Best Actor" },
//   { id: "best-actress", name: "Best Actress" },
//   { id: "best-supporting-actor", name: "Best Supporting Actor" },
//   { id: "best-supporting-actress", name: "Best Supporting Actress" },
//   { id: "best-original-screenplay", name: "Best Original Screenplay" },
//   { id: "best-adapted-screenplay", name: "Best Adapted Screenplay" },
// ];

// // 2. As outras 15 Categorias Oficiais do Oscar (Other Categories)
// export const OTHER_CATEGORIES = [
//   { id: "animated-feature-film", name: "Best Animated Feature Film" },
//   { id: "international-feature-film", name: "Best International Feature Film" },
//   { id: "documentary-feature", name: "Best Documentary Feature" },
//   { id: "documentary-short-subject", name: "Best Documentary Short Subject" },
//   { id: "live-action-short-film", name: "Best Live Action Short Film" },
//   { id: "animated-short-film", name: "Best Animated Short Film" },
//   { id: "original-score", name: "Best Original Score" },
//   { id: "original-song", name: "Best Original Song" },
//   { id: "sound", name: "Best Sound" },
//   { id: "production-design", name: "Best Production Design" },
//   { id: "cinematography", name: "Best Cinematography" },
//   { id: "makeup-and-hairstyling", name: "Best Makeup and Hairstyling" },
//   { id: "costume-design", name: "Best Costume Design" },
//   { id: "film-editing", name: "Best Film Editing" },
//   { id: "visual-effects", name: "Best Visual Effects" },
// ];

// export function groupCategories(categories = []) {
//   const mainIds = new Set(
//     MAIN_CATEGORIES.map((category) => category.id)
//   );

//   const otherCategories = new Map(
//     OTHER_CATEGORIES.map((category) => [
//       category.id,
//       category,
//     ])
//   );

//   categories.forEach((category) => {
//     if (!category?.id) {
//       return;
//     }

//     if (!mainIds.has(category.id)) {
//       otherCategories.set(category.id, category);
//     }
//   });

//   return {
//     mainCategories: MAIN_CATEGORIES,
//     otherCategories: Array.from(otherCategories.values()),
//   };
// }

