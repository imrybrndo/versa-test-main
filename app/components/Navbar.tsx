"use client";
import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 justify-between relative">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <div className="flex items-center gap-3">
          <img
            src="assets/logo/bikin.png"
            alt="Logo"
            className="h-10 w-auto sm:h-8"
          />
        </div>

        {/* Hamburger Menu (mobile only) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Desktop */}
      <div className="hidden lg:flex items-center gap-x-6">
        <ul className="menu menu-horizontal text-gray-500 font-medium text-sm">
          <li>
            <a>Explore Product</a>
          </li>
          <li>
            <a>Explore Artwork</a>
          </li>
          <li>
            <a>Other</a>
          </li>
        </ul>
      </div>

      <div className="hidden lg:flex gap-2">
        <Link href="/pages/auth/login">
          <div className="bg-gradient-to-r from-teal-300 to-teal-500 text-white rounded-full btn-md px-6 py-3 text-center cursor-pointer hover:opacity-90 transition">
            Masuk
          </div>
        </Link>
        <button className="border border-teal-500 text-teal-500 rounded-full btn-md px-6 py-3">
          Daftar
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-base-100 shadow-md z-10 p-4 lg:hidden">
          <ul className="menu menu-vertical text-gray-700 space-y-2 font-medium">
            <li>
              <a>Explore Product</a>
            </li>
            <li>
              <a>Explore Artwork</a>
            </li>
            <li>
              <a>Other</a>
            </li>
          </ul>
          <div className="mt-4 flex flex-col gap-2">
            <button className="bg-gradient-to-r from-teal-300 to-teal-500 text-white rounded-full px-4 py-2">
              Masuk
            </button>
            <button className="border border-teal-500 text-teal-500 rounded-full px-4 py-2">
              Daftar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
