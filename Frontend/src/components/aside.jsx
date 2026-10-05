import { useState } from "react";
import { groupCategories } from "../utils/categoriesGroup.js";
import "../style/aside.css";

function Aside({ categories = [], selectedCategory, onSelectCategory, loading }) {
  const [isOpen, setIsOpen] = useState(false);

  const { "Main Categories": mainCategories, "Other Categories": otherCategories } =
    groupCategories(categories);

  const isOtherSelected = otherCategories.some((cat) => cat.id === selectedCategory);
  const activeOtherCategory = otherCategories.find((cat) => cat.id === selectedCategory);

  // Lógica unificada de Seleção / Desseleção (Toggle)
  const handleCategoryClick = (categoryId) => {
    if (selectedCategory === categoryId) {
      // Se a categoria clicada JÁ ESTÁ selecionada -> DESSELECIONA (limpa o ID)
      onSelectCategory("");
    } else {
      // Caso contrário -> SELECIONA o novo ID
      onSelectCategory(categoryId);
    }
  };

  return (
    <aside className="aside">
      <div className="aside-header">
        <h2 className="aside-title">CATEGORIES</h2>
        <div className="aside-line" />
      </div>

      <nav className="aside-nav">
        {/* Main Categories (Botões com Toggle) */}
        <section className="category-grupo">
          <h3>Main</h3>
          <div className="category-itens">
            {mainCategories.map((category) => {
              const isSelected = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  className={`category-btn ${isSelected ? "selecionada" : ""}`}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </section>

        {/* Other Categories (Dropdown com Toggle) */}
        <section className="category-grupo category-grupo-sub">
          <h4>Other</h4>

          <button
            type="button"
            className={`category-select-trigger ${isOtherSelected ? "selecionada" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>
              {activeOtherCategory
                ? activeOtherCategory.name
                : loading
                ? "Loading categories..."
                : "Select category..."}
            </span>
            <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
          </button>

          {isOpen && (
            <div className="category-dropdown-list">
              {otherCategories.map((category) => {
                const isSelected = selectedCategory === category.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    className={`category-dropdown-item ${isSelected ? "selected" : ""}`}
                    onClick={() => {
                      handleCategoryClick(category.id);
                      setIsOpen(false);
                    }}
                  >
                    <span>{category.name}</span>
                    {isSelected && <span className="check-icon">✓</span>}
                  </button>
                );
              })}
            </div>
          )}
        </section>
      </nav>
    </aside>
  );
}

export default Aside;