import React from "react";

const DetailsSkeleton = () => {
  return (
    <div className="min-h-screen animate-pulse">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10">
        <div className="h-6 w-40 bg-gray-200 rounded mb-8"></div>
        <div className="bg-white rounded-[32px] shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-10 p-6 md:p-10 lg:p-14">
            <div>
              <div className="w-full h-[500px] rounded-[24px] bg-gray-200"></div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="h-4 w-28 bg-gray-200 rounded mb-4"></div>
              <div className="h-10 w-3/4 bg-gray-200 rounded mb-4"></div>
              <div className="space-y-3 mb-8">
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
              </div>
              <div className="space-y-5">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b border-gray-100 pb-4"
                  >
                    <div className="h-5 w-32 bg-gray-200 rounded"></div>
                    <div className="h-5 w-40 bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
              <div className="mt-10 h-14 w-full bg-gray-200 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSkeleton;