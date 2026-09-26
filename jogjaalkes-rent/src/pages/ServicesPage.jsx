import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Activity, Award, Briefcase, GraduationCap } from 'lucide-react';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Hospital Setup & Feasibility Study (FS)",
      icon: <Briefcase className="w-8 h-8 text-teal-600" />,
      items: [
        "Studi kelayakan finansial dan operasional.",
        "Master plan dan pemetaan zonasi bangunan RS (sesuai regulasi Kemenkes).",
        "Pengurusan perizinan pendirian dan operasional."
      ]
    },
    {
      title: "Pendampingan Akreditasi & Sertifikasi",
      icon: <Award className="w-8 h-8 text-teal-600" />,
      items: [
        "Persiapan Akreditasi Kemenkes (STARKES) dan Akreditasi Internasional (JCI).",
        "Penyusunan Regulasi, SOP, dan Pedoman Kerja.",
        "Mock Survey (Simulasi Penilaian)."
      ]
    },
    {
      title: "Digitalisasi & Sistem Informasi Rumah Sakit (SIMRS)",
      icon: <Activity className="w-8 h-8 text-teal-600" />,
      items: [
        "Integrasi Rekam Medis Elektronik (RME) / SATUSEHAT.",
        "Pemilihan & Implementasi software SIMRS.",
        "Pelatihan staf medis & non-medis."
      ]
    },
    {
      title: "Manajemen Keuangan & BPJS Center",
      icon: <ShieldCheck className="w-8 h-8 text-teal-600" />,
      items: [
        "Audit alur klaim BPJS Kesehatan & Asuransi Swasta.",
        "Pencegahan fraud dan penanganan klaim pending/dispute.",
        "Perencanaan anggaran dan evaluasi tarif rumah sakit."
      ]
    },
    {
      title: "Pelatihan & Pengembangan SDM Medical",
      icon: <GraduationCap className="w-8 h-8 text-teal-600" />,
      items: [
        "Pelatihan Customer Service & Komunikasi Efektif Tenaga Medis.",
        "Pelatihan Keselamatan Pasien (Patient Safety) & PPI.",
        "Kepemimpinan Klinis (Clinical Leadership)."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900">Layanan Konsultasi Kami</h1>
          <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600">Detail Solusi Layanan Komprehensif untuk Faskes Anda</p>
        </div>

        <div className="space-y-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow"
            >
              <div className="bg-teal-50 p-4 rounded-2xl flex-shrink-0">
                {service.icon}
              </div>
              <div className="w-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <ul className="space-y-3 mb-6">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {service.title.includes("Pelatihan") && (
                  <div className="mt-8 border-t border-gray-100 pt-6">
                    <h4 className="text-lg font-bold text-gray-800 mb-4">Dokumentasi Pelatihan</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <div key={num} className="aspect-square rounded-xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-md transition-shadow">
                          <img 
                            src={`/images/pelatihan/img-${num}.jpeg`} 
                            alt={`Dokumentasi Pelatihan ${num}`}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
