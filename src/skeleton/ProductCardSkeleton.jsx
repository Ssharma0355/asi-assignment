import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm overflow-hidden animate-pulse">
      <div className="relative">
        <div className="w-full h-60 bg-gray-200"></div>
        <div className="absolute top-4 left-4 w-24 h-8 bg-gray-300 rounded-full"></div>
      </div>
      <div className="p-5">
        <div className="h-6 bg-gray-200 rounded-md w-3/4 mb-3"></div>
        <div className="h-4 bg-gray-200 rounded-md w-2/3 mb-5"></div>
        <div className="h-5 bg-gray-200 rounded-md w-28"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;