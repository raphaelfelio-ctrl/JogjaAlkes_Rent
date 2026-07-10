import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Stethoscope, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <Stethoscope className="h-7 w-7 md:h-8 md:w-8 text-primary-500 flex-shrink-0" />
            <span className="font-bold text-lg md:text-xl text-gray-900 tracking-tight">JogjaAlkes Rent</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`font-medium transition-colors ${isActive('/') ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}>Beranda</Link>
            <Link to="/katalog" className={`font-medium transition-colors ${isActive('/katalog') ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}`}>Katalog Produk</Link>
          </div>

          <div className="hidden md:block">
            <Link to="/katalog" className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg">
              Sewa Sekarang
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-primary-600 focus:outline-none p-2 -mr-2 bg-gray-50 rounded-lg">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg absolute w-full"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              <Link 
                to="/" 
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-xl font-medium transition-colors ${isActive('/') ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                Beranda
              </Link>
              <Link 
                to="/katalog" 
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-xl font-medium transition-colors ${isActive('/katalog') ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                Katalog Produk
              </Link>
              <div className="pt-4 mt-2 border-t border-gray-100">
                <Link 
                  to="/katalog" 
                  onClick={closeMenu}
                  className="block text-center bg-primary-600 hover:bg-primary-700 text-white px-5 py-3.5 rounded-xl font-bold shadow-md transition-colors"
                >
                  Sewa Sekarang
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
