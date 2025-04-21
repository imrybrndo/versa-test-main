"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "@/dist/aos.css";
function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="bg-gradient-to-b from-teal-500 teal-300 to-white py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="text-white lg:w-1/2">
          <p className="text-2xl">Mau bikin apa hari ini?</p>
          <h1 className="text-7xl font-bold mb-4">
            Buat Kebutuhanmu dengan Mudah!
          </h1>
          <div className="relative w-full max-w-md mb-6">
            <input
              type="text"
              placeholder="Cari produk..."
              className="w-full py-5 pl-5 pr-36 bg-white rounded-full text-gray-700 focus:outline-none"
            />
            <button className="absolute right-1 top-1 bottom-1 bg-teal-500 text-white px-5 rounded-full font-medium hover:bg-teal-600 transition">
              Cari Produk
            </button>
          </div>
        </div>

        <div className="lg:w-1/2">
          <img
            src="assets/images/images.png"
            alt="Hero"
            className="w-full h-auto"
            data-aos="zoom-in"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
