import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const products = [
  { id: 1, name: 'Planta de Interior', price: '$10', image: '/src/images/plant1.png' },
  { id: 2, name: 'Cactus', price: '$5', image: '/src/images/plant1.png' },
  { id: 3, name: 'Planta de Exterior', price: '$12', image: '/src/images/plant1.png' },
  // Añade más productos según sea necesario
];

const FeaturedProducts = () => {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Productos Destacados</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-2 rounded-lg text-center hover:shadow-lg transition-shadow">
            <img src={product.image} alt={product.name} className="mb-2 w-32 h-auto mx-auto" /> {/* Ajustar ancho de imagen */}
            <h3 className="text-lg font-semibold">{product.name}</h3> {/* Ajustar tamaño de texto */}
            <p className="mt-1">{product.price}</p> {/* Ajustar espaciado */}
            <div className='flex flex-col py-2'>
              <button className='border border-green-500 text-green-500 px-3 py-1 rounded-md hover:bg-green-500 hover:text-white'> {/* Ajustar padding */}
                Ver Producto
              </button>
              <button className="mt-2 bg-green-500 text-white py-1 px-3 rounded-lg"> {/* Ajustar padding */}
                <FontAwesomeIcon icon={faShoppingCart} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
