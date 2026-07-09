import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { products } from '../data/products';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Produk tidak ditemukan</h2>
        <button onClick={() => navigate('/katalog')} className="text-teal-600 hover:underline">
          Kembali ke Katalog
        </button>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const text = `Halo JogjaAlkes Rent, saya tertarik untuk menyewa ${product.name}. Mohon info ketersediaannya.`;
    window.open(`https://wa.me/6281904170090?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/katalog" className="inline-flex items-center text-gray-500 hover:text-teal-600 transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Katalog
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Image Gallery */}
            <div className="bg-gray-100 p-8 flex items-center justify-center min-h-[400px]">
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-w-full h-auto rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Main Info */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-2">
                <span className="text-sm font-bold text-teal-600 tracking-wider uppercase bg-teal-50 px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-2 mb-6">
                {product.available ? (
                  <span className="flex items-center text-green-600 font-medium text-sm">
                    <CheckCircle2 className="w-4 h-4 mr-1" /> Tersedia
                  </span>
                ) : (
                  <span className="text-red-500 font-medium text-sm">Tidak Tersedia</span>
                )}
              </div>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {product.summary}
              </p>

              <div className="mb-8">
                <p className="text-gray-500 text-sm mb-1">Harga Sewa</p>
                <div className="flex items-end">
                  <span className="text-4xl font-black text-teal-700">Rp {product.price.toLocaleString('id-ID')}</span>
                  <span className="text-gray-500 ml-2 mb-1">/{product.priceUnit}</span>
                </div>
              </div>

              <button 
                onClick={handleWhatsApp}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-md hover:shadow-lg flex justify-center items-center gap-2"
              >
                Sewa Sekarang via WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Specifications Tab */}
        <div className="mt-12 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 lg:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">Spesifikasi Detail</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <tbody>
                {product.specifications.map((spec, idx) => (
                  <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                    <th className="py-4 px-4 font-semibold text-gray-900 w-1/3 bg-gray-50/50 align-top">
                      {spec.label}
                    </th>
                    <td className="py-4 px-4 text-gray-600 leading-relaxed">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetailPage;
