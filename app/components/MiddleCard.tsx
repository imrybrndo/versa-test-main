import React from "react";

function MiddleCard() {
  return (
    <div className="relative z-30 -mb-11 flex justify-center">
      <div className="relative max-w-5xl w-full overflow-hidden rounded-[50px] shadow-xl border border-gray-200 bg-middle-card bg-cover bg-center">
        <div className="absolute inset-0 bg-teal-700/80" />
        <div className="relative z-10 flex flex-col md:flex-row items-center px-8 py-10 text-white gap-4">
          <div className="hidden md:flex w-full md:w-1/3 justify-center md:items-end md:pb-2">
            <img
              src="/assets/images/young-asian.png"
              alt="Join illustration"
              className="w-84 -mb-14 h-auto object-contain"
            />
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pilih Desain Sendiri Atau Konsultasikan Dengan Admin?
            </h2>
            <button className="bg-white hover:bg-gray-100 text-teal-600 px-6 py-2 rounded-full transition font-light">
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleCard;
