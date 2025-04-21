import React from "react";

const products = [
  {
    id: 1,
    name: "Custom Mug",
    image:
      "https://images.unsplash.com/photo-1591080824818-e4401eabc21b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "Rp35.000",
  },
  {
    id: 2,
    name: "Digital Artwork",
    image:
      "https://images.unsplash.com/photo-1658246944413-8265fc09c87c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "Rp150.000",
  },
  {
    id: 3,
    name: "Stiker Kustom",
    image:
      "https://images.unsplash.com/photo-1591176335253-d7dfa2a1e45f?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "Rp10.000",
  },
  {
    id: 4,
    name: "Print Foto",
    image:
      "https://images.unsplash.com/photo-1559980641-56f8365ccb84?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "Rp20.000",
  },
];

function PopularProduct() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold mb-2">
          Product Product by Categories
        </h2>
        <p className="text-gray-600">
          Temukan produk paling sering digunakan oleh pengguna kami
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="card bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <figure>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-teal-600 font-bold">{product.price}</p>
              <div className="card-actions mt-4">
                <button className="btn btn-sm bg-teal-500 text-white rounded-full hover:bg-teal-600">
                  Lihat Produk
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularProduct;
