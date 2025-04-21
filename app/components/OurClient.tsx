import React from "react";

const brands = [
  {
    name: "Biznet",
    logo: "assets/clients/biznet.png",
  },
  {
    name: "BRI",
    logo: "assets/clients/bri.png",
  },
  {
    name: "Dominos",
    logo: "assets/clients/dominos.png",
  },
  {
    name: "Honda",
    logo: "assets/clients/honda.png",
  },
  {
    name: "Indomaret",
    logo: "assets/clients/indomaret.png",
  },
  {
    name: "Jiwa Group",
    logo: "assets/clients/jiwa-group.png",
  },
  {
    name: "Planet Ban",
    logo: "assets/clients/planetban.png",
  },
  {
    name: "Ramayana",
    logo: "assets/clients/ramayana.png",
  },
];

function OurClient() {
  return (
    <div className="py-16 bg-white px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Our Clients</h2>
        <p className="text-gray-500 mt-2">
          Kami dipercaya oleh berbagai brand besar
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center items-center">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex items-center justify-center grayscale opacity-70 hover:opacity-100 transition"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-12 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurClient;
