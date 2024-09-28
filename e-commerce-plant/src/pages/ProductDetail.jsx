import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="py-16 px-4 bg-green-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-green-700 font-bold mb-2">{product.price}</p>
          <p className="mb-4"><strong>Tipo:</strong> {product.type}</p>
          <p className="mb-4">{product.description}</p>
          <p className="mb-4"><strong>Cuidados:</strong> {product.care}</p>
          <div className="flex items-center mb-4">
            <label className="mr-4">Cantidad:</label>
            <input type="number" min="1" className="w-16 p-2 border rounded-md" />
          </div>
          <button className="bg-green-500 text-white py-2 px-4 rounded-md">Añadir al Carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
