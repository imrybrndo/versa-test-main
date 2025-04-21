"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Ayu Setiawan",
    image: "https://i.pravatar.cc/150?img=12",
    comment:
      "Pelayanannya cepat dan hasil produk sesuai ekspektasi. Sangat recommended!",
    role: "Pelanggan Setia",
  },
  {
    name: "Rizky Pratama",
    image: "https://i.pravatar.cc/150?img=5",
    comment:
      "Saya suka karena bisa custom sesuai keinginan. Prosesnya mudah dan menyenangkan.",
    role: "Illustrator",
  },
  {
    name: "Dinda Maharani",
    image: "https://i.pravatar.cc/150?img=32",
    comment:
      "Kualitas produk sangat bagus dan timnya responsif banget! Terima kasih!",
    role: "Pengusaha UMKM",
  },
  {
    name: "Budi Santoso",
    image: "https://i.pravatar.cc/150?img=18",
    comment: "Suka banget sama pelayanannya, ramah dan cepat!",
    role: "CEO StartUp",
  },
];

function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollSpeed = 1; // adjust the speed of scroll

    const scroll = () => {
      if (!isPaused && container) {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= container.scrollWidth / 2) {
          scrollAmount = 0;
        }
        container.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(scroll, 20);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="bg-teal-500 py-16 px-6 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold">What They Say About Us?</h1>
        <p className="text-white/80 mt-2">
          Kami telah dipercaya oleh banyak pelanggan dan UMKM di seluruh
          Indonesia.
        </p>
      </div>

      <div
        className="w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex gap-6 w-max" ref={containerRef}>
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-2xl p-6 shadow-lg w-80 flex-shrink-0 transition-transform duration-300"
            >
              <p className="text-sm text-gray-700 mb-6">{item.comment}</p>
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-base">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.role}</p>
                  <div className="flex mt-1">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
