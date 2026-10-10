import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { groupCategories } from "../utils/categoriesGroup.js";
import "../style/aside.css";

const DEFAULT_YEAR = "2024";
const DEFAULT_CATEGORY = "BEST PICTURE";

export default function Aside({ categories = [] }) {
  const { yearId, categoryId } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const activeYear = yearId || DEFAULT_YEAR;
  const activeCategory = categoryId || DEFAULT_CATEGORY;

  const { mainCategories = [], otherCategories = [] } =
    groupCategories(categories) || {};

  function renderCategory(category) {
    if (!category || !category.id) return null;

    const isSelected = activeCategory === category.id;

    return (
      <Link
        key={category.id}
        to={`/year/${activeYear}/category/${encodeURIComponent(category.id)}`}
        className={`category-btn ${isSelected ? "selected" : ""}`}
        aria-current={isSelected ? "page" : undefined}
        onClick={() => setIsOpen(false)}
      >
        {category.name || category.id}
      </Link>
    );
  }

  return (
    <aside className="aside">
      <div className="aside-header">
        <h2 className="aside-title">CATEGORIES</h2>
        <div className="aside-line" />
      </div>

      <nav className="aside-nav">
        <section className="category-group">
          <h3>Main</h3>
          <div className="category-items">
            {mainCategories.map(renderCategory)}
          </div>
        </section>

        <section className="category-group">
          <h3>Other</h3>

          <button
            type="button"
            className="category-select-trigger"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
          >
            <span>Select category</span>
            <span className={`arrow ${isOpen ? "open" : ""}`}>
              ▼
            </span>
          </button>

          {isOpen && (
            <div className="category-dropdown-list">
              {otherCategories.map(renderCategory)}
            </div>
          )}
        </section>
      </nav>
    </aside>
  );
}