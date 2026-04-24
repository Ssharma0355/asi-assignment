import React, { useEffect, useState } from "react";
import data from "../data/data.json";
import CategorySection from "../components/CategorySection";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      setProducts(data);
  }, []);

  const categories = [...new Set(data.map((item) => item.category))];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 py-16 md:py-14">
          <p className="uppercase tracking-[4px] text-sm font-semibold opacity-90 mb-3">
            Submited by: Sachin Sharma
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
            Product Catalog
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14">
          <CategorySection
            title="All Products"
            items={products}
            categories={categories}
          />
      </div>

    </div>
  );
};

export default Home;