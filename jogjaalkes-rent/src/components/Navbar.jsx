import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <Stethoscope className="h-8 w-8 text-primary-500" />
            <span className="font-bold text-xl text-gray-900">JogjaAlkes Rent</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Beranda</Link>
            <Link to="/katalog" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">Katalog Produk</Link>
          </div>
          <div>
            <Link to="/katalog" className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg">
              Sewa Sekarang
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
