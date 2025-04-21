"use client";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const trendingProducts = [
  {
    id: 1,
    name: "Tote Bag Custom",
    image: "https://images.unsplash.com/photo-1578237493287-8d4d2b03591a?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "Rp45.000",
  },
  {
    id: 2,
    name: "Portrait Sketch",
    image: "https://images.unsplash.com/photo-1605012555174-f01851e9410d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "Rp200.000",
  },
  {
    id: 3,
    name: "Phone Case Art",
    image:
      "https://images.unsplash.com/photo-1535157412991-2ef801c1748b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGhvbmUlMjBDYXNlfGVufDB8fDB8fHww",
    price: "Rp75.000",
  },
];

function TrendingProduct() {
  return (
    <div className="bg-teal-100 w-full">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold mb-2">
            Jelajahi Artwork Terbaru di Bikinin.in
          </h2>
          <p className="text-gray-600">
            Lihat produk yang sedang tren minggu ini!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {trendingProducts.map((product) => (
            <div
              key={product.id}
              className="relative group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              {/* Badge Trending */}
              <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-400 to-red-500 text-white text-xs px-3 py-1 rounded-full z-10 animate-pulse">
                Trending
              </div>

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.price}</p>

                <div className="mt-4 flex justify-between items-center">
                  <button className="btn btn-sm bg-teal-500 hover:bg-teal-600 text-white rounded-full flex items-center gap-2">
                    <FiShoppingCart size={16} />
                    Beli Sekarang
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingProduct;
