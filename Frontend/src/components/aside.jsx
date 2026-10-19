import { useEffect, useState } from "react";
import { groupCategories } from "../utils/categoriesGroup.js";
import { Link, useParams } from "react-router-dom";

let globalCategory


export default function Aside({
  categories = [],
  yearSelect
}) {

  const {categoryId} = useParams()

  const [isOpen, setIsOpen] = useState(false);

  const {
    mainCategories,
    otherCategories,
  } = groupCategories(categories);

  return (
    <aside className="w-55 min-w-55 min-h-[calc(100vh - 70px)] px-4.5 py-6.25 bg-white border-r-2 border-solid border-[#222] max-[700px]:w-auto max-[700px]:min-w-0 max-[700px]:min-h-auto max-[700px]:border-r-0 max-[700px]:border-b-2">
      <div className="mb-6.25">
        <h2 className="m-3.75 font-bold text-2xl tracking-wide">
          CATEGORIES
        </h2>

        <div className="w-full h-0.5 bg-[#333]"/>
      </div>

      <nav className="flex flex-col gap-7.5">
        <section className="m-[0 0 8px] text-[13px] uppercase tracking-wide">
          <h3>Main</h3>

          <div className="flex flex-col">
            {mainCategories.map((category) => {
              const isSelected =
                globalCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  className={`w-full px-1.25 py-2.75 text-left text-[14px] text-[#222] bg-transparent border-0 border-b border-solid border-b-[#222] cursor-pointer transition-[background,color,padding] duration-200 ease-in-out hover:pl-2.5 hover:bg-[#f2f2f2] ${
                    isSelected ? "pl-2.5 text-white bg-[#222] font-bold" : ""
                  }`}
                >
                  <Link to={`/year/${yearSelect}/category/${categories.id}`}>{category.name}</Link>
                </button>
              );
            })}
          </div>
        </section>

        <section>
          <h3>Other</h3>

          <button
            type="button"
            className="flex items-center justify-between w-full px-3 py-2.25 text-[13px] text-[#555] bg-[#f9f9f9] border border-solid border-[#ccc] rounded-sm cursor-pointer transition-[background,color,border-color] duration-200 ease-in-out hover:text-[#222] hover:bg-[#f2f2f2] hover:border-[#222]"
            onClick={() =>
              setIsOpen((current) => !current)
            }
            // disabled={loading}
            aria-expanded={isOpen}
          >
            <span>
              {/* {selectedOtherCategory
                ? selectedOtherCategory.name
                : "Select category..."} */}
            </span>

            <span
              className={`text-[10px] transition-transform duration-200 ease-in-out ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          {isOpen && (
            <div className="max-h-50 mt-1.5 overflow-y-auto bg-white border border-solid border-[#222] rounded-sm">
              {otherCategories.map((category) => {
                const isSelected =
                  selectedCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    className={`flex items-center justify-between w-full px-3 py-2.25 text-left text-[13px] text-[#333] bg-transparent border-0 border-b border-solid border-b-[#eee] cursor-pointer last:border-b-0 hover:bg-[#f4f4f4] ${
                      isSelected ? "text-white bg-[#222] font-bold" : ""
                    }`}
                  >
                    <span>{category.name}</span>

                    {isSelected && (
                      <span className="text-[11px]">
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
