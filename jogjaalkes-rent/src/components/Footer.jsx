import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary-400">JogjaAlkes</span> Rent
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Platform persewaan alat kesehatan dan rumah sakit terpercaya. Memudahkan pasien dan instansi medis menyewa alat kesehatan berkualitas tinggi secara transparan dan cepat.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-200">Layanan</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-primary-400 transition-colors">Sewa Alat Bantu Napas</a></li>
            <li><a href="#" className="hover:text-primary-400 transition-colors">Sewa Tempat Tidur Medis</a></li>
            <li><a href="#" className="hover:text-primary-400 transition-colors">Sewa Alat Mobilitas</a></li>
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
