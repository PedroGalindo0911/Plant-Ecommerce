import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ isLoggedIn, cartItems }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      {/* Nombre de la tienda */}
      <Link to="/" className="text-2xl font-bold text-green-600">Charly's Plants</Link>
      
      <div className="flex items-center space-x-4">
        {/* Links de navegación */}
        <Link to="/products" className="text-black hover:text-green-500">Productos</Link>
        <Link to="/blog" className="text-black hover:text-green-500">Blog</Link>

        {/* Carrito de compras */}
        <div className="relative">
          <Link to="/cart" className="text-black">
            <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
            {cartItems > 0 && (
              <span className="absolute top-0 right-0 bg-green-600 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                {cartItems}
              </span>
            )}
          </Link>
        </div>

        {/* Usuario logueado o no logueado */}
        {isLoggedIn ? (
          <div className="relative">
            <FontAwesomeIcon
              icon={faUser}
              className="text-green-600 text-xl cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded-md shadow-lg">
                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">Mi Perfil</Link>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex space-x-4">
            {/* Botón Iniciar Sesión */}
            <Link to="/login" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              Iniciar Sesión
            </Link>
            {/* Botón Registrarse */}
            <Link to="/register" className="border border-green-500 text-green-500 px-4 py-2 rounded-md hover:bg-green-500 hover:text-white">
              Registrarse
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
