import React from 'react';
const products = [
    {
      id: 1,
      name: 'Monstera Deliciosa',
      price: 120,
      image: 'https://via.placeholder.com/300x200.png?text=Monstera+Deliciosa'
    },
    {
      id: 2,
      name: 'Cactus Saguaro',
      price: 80,
      image: 'https://via.placeholder.com/300x200.png?text=Cactus+Saguaro'
    },
    {
      id: 3,
      name: 'Suculenta Jade',
      price: 50,
      image: 'https://via.placeholder.com/300x200.png?text=Suculenta+Jade'
    },
    {
      id: 4,
      name: 'Ficus Lyrata',
      price: 150,
      image: 'https://via.placeholder.com/300x200.png?text=Ficus+Lyrata'
    },
    {
      id: 5,
      name: 'Sansevieria',
      price: 60,
      image: 'https://via.placeholder.com/300x200.png?text=Sansevieria'
    },
    {
      id: 6,
      name: 'Aloe Vera',
      price: 30,
      image: 'https://via.placeholder.com/300x200.png?text=Aloe+Vera'
    },
    {
      id: 7,
      name: 'Pilea Peperomioides',
      price: 45,
      image: 'https://via.placeholder.com/300x200.png?text=Pilea+Peperomioides'
    },
    {
      id: 8,
      name: 'Helecho de Boston',
      price: 35,
      image: 'https://via.placeholder.com/300x200.png?text=Helecho+de+Boston'
    }
  ];

const FeaturedProducts = () => {
  

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-green-800 mb-8">
          Productos Destacados
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transform transition hover:scale-105 hover:shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600">Q{product.price}</p>
                <button className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
