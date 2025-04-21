import React from "react";

function Guide() {
  return (
    <div className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-12 text-center md:text-left">
        <h1 className="text-6xl font-bold text-gray-800 md:w-1/2">
          Cara melakukan Pemesanan
        </h1>
        <p className="text-gray-500 md:w-1/2 mt-4 md:mt-0">
          Faucibus at lorem ut eget. Bibendum posuere turpis sem donec
          in.Faucibus at lorem ut eget. Bibendum posuere turpis sem donec in.
        </p>
      </div>

      <div className="flex justify-center items-center gap-8 mb-16">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-teal-500 text-white flex items-center justify-center text-xl font-semibold shadow-lg">
              {step}
            </div>
            <p className="mt-2 text-sm text-gray-600">Step {step}</p>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <img
            src="assets/images/explore-product.png"
            alt="Panduan"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        <div className="lg:w-1/2">
          <h2 className="text-5xl text-light mb-4 text-gray-800">
            Pilih Product
          </h2>
          <p className="text-2xl text-gray-500">
            Lectus enim sit sit leo. In placerat integer pellentesque consequat
            nulla tristique lorem.
          </p>
          <button className="border border-teal-500 text-teal-500 py-3 px-24 hover:bg-teal-500 hover:text-white rounded-full btn-md px-6 py-3 mt-4">
            Daftar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Guide;
