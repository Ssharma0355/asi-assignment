import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data/data.json";

const Details = () => {
  const { name } = useParams();

  const item = data.find(
    (product) => product.itemname === decodeURIComponent(name)
  );

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold text-gray-700">
        Item not found
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:underline mb-8"
        >
          ← Back to Home
        </Link>

        {/* Details Card */}
        <div className="bg-white rounded-[32px] shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-10 p-6 md:p-10 lg:p-14">
            {/* Left Image */}
            <div>
              <img
                src={item.image}
                alt={item.itemname}
                className="w-full h-full max-h-[550px] object-cover rounded-[24px]"
              />
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center">
              <p className="text-sm uppercase tracking-[4px] text-indigo-600 font-semibold mb-2">
                {item.category}
              </p>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {item.itemname}
              </h1>

              <p className="text-gray-500 leading-relaxed mb-8">
                Explore complete specifications and detailed information of this
                premium product.
              </p>

              {/* Properties */}
              <div className="space-y-4">
                {item.itemprops.map((prop, index) => (
                  <div
                    key={index}
                    className="flex justify-between gap-6 border-b border-gray-100 pb-4"
                  >
                    <span className="font-semibold text-gray-700 min-w-[140px]">
                      {prop.label}
                    </span>

                    <span className="text-gray-600 text-right">
                      {prop.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="mt-10 bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-[1.02] transition duration-300 text-white font-semibold py-4 rounded-2xl shadow-lg">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;