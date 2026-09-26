import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, CheckCircle2 } from 'lucide-react';

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-teal-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Tentang JogjaAlkes Rent
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-teal-100 max-w-2xl mx-auto"
          >
            Mitra tepercaya Anda dalam menyediakan alat kesehatan dan solusi manajemen rumah sakit yang profesional.
          </motion.p>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-3xl p-10 border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-teal-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Visi Kami</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                Menjadi konsultan manajemen kesehatan terdepan di Indonesia yang mendorong terwujudnya rumah sakit berstandar global.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-teal-50 rounded-3xl p-10 border border-teal-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Misi Kami</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">Memberikan solusi komprehensif bagi efisiensi operasional dan kualitas mutu RS.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">Membantu RS memenuhi regulasi dan standar keselamatan pasien.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">Mendorong digitalisasi layanan kesehatan.</span>
                </li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
