import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-teal-500 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="assets/images/bikinin-white.png" className="mb-3" />
            <p className="text-sm text-white/80">
              Id sed ut in libero integer vulputate elementum. Dolor vitae
              cursus vitae donec adipiscing urna facilisi iaculis. Tristique
              turpis ac eu suspendisse.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Produk
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Bantuan</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Ketentuan
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pengiriman
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-200">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                <FaTwitter />
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-10 pt-6 text-sm text-center text-white/70">
          &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
