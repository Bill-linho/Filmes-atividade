import { useState } from "react";

import { groupCategories } from "../utils/categoriesGroup.js";

import "../style/aside.css";

function Aside({
  categories = [],
  selectedCategory = "",
  onSelectCategory,
  loading = false,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const {
    mainCategories,
    otherCategories,
  } = groupCategories(categories);

  const selectedOtherCategory =
    otherCategories.find(
      (category) =>
        category.id === selectedCategory
    );

  function handleCategoryClick(categoryId) {
    if (selectedCategory === categoryId) {
      onSelectCategory("");
      return;
    }

    onSelectCategory(categoryId);
  }

  function handleOtherClick(categoryId) {
    handleCategoryClick(categoryId);
    setIsOpen(false);
  }

  return (
    <aside className="aside">
      <div className="aside-header">
        <h2 className="aside-title">
          CATEGORIES
        </h2>

        <div className="aside-line" />
      </div>

      <nav className="aside-nav">
        <section className="category-group">
          <h3>Main</h3>

          <div className="category-items">
            {mainCategories.map((category) => {
              const isSelected =
                selectedCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  className={`category-btn ${
                    isSelected ? "selected" : ""
                  }`}
                  onClick={() =>
                    handleCategoryClick(
                      category.id
                    )
                  }
                  disabled={loading}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </section>

        <section className="category-group">
          <h3>Other</h3>

          <button
            type="button"
            className={`category-select-trigger ${
              selectedOtherCategory
                ? "selected"
                : ""
            }`}
            onClick={() =>
              setIsOpen((current) => !current)
            }
            disabled={loading}
            aria-expanded={isOpen}
          >
            <span>
              {selectedOtherCategory
                ? selectedOtherCategory.name
                : "Select category..."}
            </span>

            <span
              className={`arrow ${
                isOpen ? "open" : ""
              }`}
            >
              ▼
            </span>
          </button>

          {isOpen && (
            <div className="category-dropdown-list">
              {otherCategories.map((category) => {
                const isSelected =
                  selectedCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    className={`category-dropdown-item ${
                      isSelected ? "selected" : ""
                    }`}
                    onClick={() =>
                      handleOtherClick(category.id)
                    }
                  >
                    <span>{category.name}</span>

                    {isSelected && (
                      <span className="check-icon">
                        ✓
                      </span>
                    )}
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

