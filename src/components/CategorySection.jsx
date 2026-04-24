import React, { lazy, Suspense, useState } from "react";
import ProductCardSkeleton from "../skeleton/ProductCardSkeleton";
const ProductCard = lazy(()=>import("./ProductCard"))

const CategorySection = ({ title, items, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const dropdownOptions = ["All", ...categories];

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <section className="mb-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 whitespace-nowrap">
          {title}
        </h2>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-3 border border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {dropdownOptions.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        <div className="flex-1 h-[2px] bg-gradient-to-r from-indigo-500 to-transparent rounded-full"></div>
      </div>

      {/* Product Grid design added with resposinve in testing  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {filteredItems.map((item, index) => (
            <Suspense fallback={<ProductCardSkeleton />}>
            <ProductCard key={index} item={item} />
            </Suspense>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;