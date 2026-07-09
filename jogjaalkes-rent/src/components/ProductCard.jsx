import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      onClick={() => navigate(`/produk/${product.id}`)}
      className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full cursor-pointer"
    >
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {product.available && (
          <div className="absolute top-3 right-3 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide">
            Tersedia
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-xs text-primary-600 font-semibold uppercase tracking-wider mb-2">
          {product.category}
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
          {product.summary}
        </p>
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
          <div>
            <span className="text-xl font-black text-primary-700">Rp {product.price.toLocaleString('id-ID')}</span>
            <span className="text-gray-400 text-xs ml-1">/{product.priceUnit}</span>
          </div>
          <span className="text-sm font-semibold text-primary-600 hover:text-primary-800 transition-colors">
            Detail &rarr;
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
