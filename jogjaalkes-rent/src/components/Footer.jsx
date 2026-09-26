import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/images/logo.jpeg" alt="Logo" className="h-10 w-10 rounded-full object-cover" />
            <img src="/images/nama.jpeg" alt="PT Green Jaya Abadi" className="h-8 object-contain bg-white rounded-md px-2 py-1" />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Platform persewaan alat kesehatan dan rumah sakit terpercaya. Memudahkan pasien dan instansi medis menyewa alat kesehatan berkualitas tinggi secara transparan dan cepat.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-200">Layanan</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/katalog" className="hover:text-primary-400 transition-colors">Sewa Alat Medis</Link></li>
            <li><Link to="/layanan" className="hover:text-primary-400 transition-colors">Konsultasi Manajemen RS</Link></li>
            <li><Link to="/tentang-kami" className="hover:text-primary-400 transition-colors">Tentang Kami</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-200">Kontak Kami</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>WhatsApp: 0823-2620-1067</li>
            <li>Email: pt.greenjayaabadi@gmail.com</li>
            <li>Layanan 24 Jam Non-Stop</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} JogjaAlkes Rent. Hak Cipta Dilindungi.
      </div>
    </footer>
  );
};

export default Footer;
