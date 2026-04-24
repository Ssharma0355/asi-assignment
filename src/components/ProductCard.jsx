// src/components/ProductCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() =>
            navigate(`/details/${encodeURIComponent(item.itemname)}`)
      }
      className="group bg-white rounded-[24px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden hover:-translate-y-2"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.itemname}
          className="w-full h-60 object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-sm font-semibold text-indigo-600 shadow-sm">
          {item.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800 leading-snug group-hover:text-indigo-600 transition">
          {item.itemname}
        </h3>

        <p className="text-gray-500 text-sm mt-2">
          Click to explore full specifications
        </p>

        <button className="mt-5 text-indigo-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
          View Details →
        </button>
      </div>
    </div>
  );
};

export default ProductCard;