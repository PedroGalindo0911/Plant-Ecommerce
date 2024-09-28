import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data';

const ProductList = () => {
  return (
    <div className="py-16 bg-green-100">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-8">Catálogo de Productos</h1>

      {/* Grilla de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto px-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <Link to={`/product/${product.id}`}>
              <img 
                src={product.image} 
                alt={product.name} 
                className="h-40 w-full object-cover rounded-md mb-4" 
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-green-700 font-bold">{product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
