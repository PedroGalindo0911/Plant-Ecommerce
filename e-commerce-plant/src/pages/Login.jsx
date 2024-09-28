import React, { useState } from 'react';
import { users } from '../data';
import bgPlant from '../images/bgplant.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    
    if (!validateEmail(email)) {
      setError('Por favor, introduce un correo electrónico válido.');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    
    const foundUser = users.find((user) => user.email === email && user.password === password);

    if (foundUser) {
      console.log('Usuario autenticado:', foundUser);
      // Implementar Redireccionar o guardar sesión aquí
    } else {
      setError('Correo electrónico o contraseña incorrectos.');
    }
  };

  return (
    <div 
      className="flex justify-center items-center min-h-screen" 
      style={{ backgroundImage: `url(${bgPlant})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Iniciar Sesión</h2>

        {/* Mensaje de error */}
        {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}

        <div className="mb-4">
          <label className="block text-gray-700">Correo Electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="tucorreo@ejemplo.com"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="••••••••"
            required
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
