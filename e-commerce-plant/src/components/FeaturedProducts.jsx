import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { products } from '../data'; 

const FeaturedProducts = () => {
  const navigate = useNavigate();

  const featuredProducts = products.slice(0, 10);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="py-16 bg-green-50">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-8">Productos Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 container mx-auto px-4">
        {featuredProducts.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-lg shadow-md p-4 cursor-pointer" 
            onClick={() => handleProductClick(product.id)} 
          >
            <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded-md" />
            <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
            <p className="text-green-700 font-bold">{product.price}</p>
          </div>
        ))}
      </div>

      {/* Botón de "Ver más" */}
      <div className="text-center mt-8">
        <button 
          onClick={() => navigate('/products')} 
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md"
        >
          Ver más
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
