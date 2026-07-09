import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, Clock, CheckCircle2, ArrowRight, Stethoscope } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const LandingPage = () => {
  const navigate = useNavigate();
  const popularCategories = ["Tempat Tidur", "Alat Bantu Napas", "Alat Mobilitas"];
  const popularProducts = products.filter(p => p.price > 150000).slice(0, 3); // Just taking 3 for demo

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=2000&q=80" alt="Hospital" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/90 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Sewa Alat Kesehatan <br/><span className="text-teal-300">Mudah & Cepat</span>
            </h1>
            <p className="text-lg lg:text-xl text-teal-100 mb-10 leading-relaxed">
              Platform penyedia sewa alat kesehatan dan rumah sakit terlengkap di Yogyakarta. Memudahkan pemulihan di rumah dengan peralatan medis standar rumah sakit.
            </p>
            <Link 
              to="/katalog" 
              className="inline-flex items-center gap-2 bg-teal-400 hover:bg-teal-300 text-teal-950 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-teal-400/50 hover:-translate-y-1"
            >
              Lihat Katalog <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Catalog Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Katalog Pilihan</h2>
            <div className="w-24 h-1 bg-teal-500 mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {popularProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/katalog" className="inline-block bg-teal-50 hover:bg-teal-100 text-teal-700 font-semibold px-6 py-3 rounded-full transition-colors border border-teal-100">
              Lihat Semua Produk &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Kategori Populer</h2>
              <div className="w-24 h-1 bg-teal-500 mt-4 rounded-full"></div>
            </div>
            <Link to="/katalog" className="text-teal-600 font-semibold hover:text-teal-800 hidden sm:block">Lihat Semua &rarr;</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularCategories.map((category, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                onClick={() => navigate('/katalog', { state: { category } })}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all cursor-pointer flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-teal-500 transition-colors">
                  <Stethoscope className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-24 bg-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Mengapa Memilih JogjaAlkes Rent?</h2>
            <p className="text-teal-200">Berkomitmen memberikan layanan terbaik untuk kesehatan keluarga Anda.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-teal-800 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                <ShieldCheck className="w-10 h-10 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">100% Higienis & Steril</h3>
              <p className="text-teal-100">Setiap alat yang disewa selalu melewati proses sterilisasi ketat berstandar rumah sakit sebelum dikirim ke pelanggan.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-teal-800 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                <CheckCircle2 className="w-10 h-10 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Gratis Instalasi</h3>
              <p className="text-teal-100">Tim teknisi kami akan mengantarkan sekaligus merakit dan mengajarkan cara penggunaan alat secara gratis di lokasi Anda.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-teal-800 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                <Clock className="w-10 h-10 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Layanan 24 Jam</h3>
              <p className="text-teal-100">Kebutuhan darurat? Jangan khawatir, customer service dan tim pengiriman kami siap melayani Anda 24 jam non-stop.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
