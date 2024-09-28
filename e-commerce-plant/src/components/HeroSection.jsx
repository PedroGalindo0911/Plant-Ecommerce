import React from 'react';
import hangingPlant from '../images/plant1.png';

const HeroSection = () => {
  return (
    <section className="bg-green-50 py-1">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Texto del lado izquierdo */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Bienvenido a Charly's Plants</h1>
          <p className="text-lg text-gray-600 mb-6">
            Descubre una gran variedad de plantas y sus cuidados, perfectas para
            tu hogar u oficina. Encuentra las plantas que mejor se adaptan a tus
            espacios y necesidades.
          </p>
          <a href="/products" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
            Ver Productos
          </a>
        </div>

        {/* Imagen del lado derecho */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-between">
          <img src={hangingPlant} alt="Planta Colgante" className="w-full h-auto  max-w-xs md:max-w-md" />
          {/* Créditos de la imagen */}
          <p className="text-xs text-gray-500 mt-auto">
            <a href="https://www.vecteezy.com/free-png/plant" target="_blank" rel="noopener noreferrer" className="underline">
            Plant PNGs by Vecteezy
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
