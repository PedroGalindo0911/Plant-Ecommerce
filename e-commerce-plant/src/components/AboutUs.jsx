const AboutUs = () => {
    return (
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-green-800 mb-4">Sobre Nosotros</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              En nuestra tienda de plantas, nos apasiona acercarte a la naturaleza. Nos especializamos en la venta de plantas de interior y exterior, 
              brindando una selección cuidadosamente elegida para embellecer tu hogar o espacio de trabajo. Cada planta es cultivada y seleccionada con 
              amor para que recibas lo mejor. ¡Nos encanta compartir nuestro conocimiento y ayudarte a encontrar la planta perfecta!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="flex justify-center">
              <img
                src="https://via.placeholder.com/400x300.png?text=Equipo+de+trabajo"
                alt="Nuestro equipo"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Nuestra Misión</h3>
              <p className="text-gray-600 mb-4">
                Nuestra misión es ofrecer productos de alta calidad que mejoren el ambiente de tu hogar y promuevan el cuidado de la naturaleza. 
                Creemos en la importancia de las plantas para mejorar el bienestar y la calidad de vida de las personas, y estamos aquí para 
                ofrecerte una experiencia de compra única y personalizada.
              </p>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Nuestro Equipo</h3>
              <p className="text-gray-600">
                Contamos con un equipo de expertos en jardinería que están disponibles para asesorarte en cada paso del proceso. Ya sea que 
                busques algo específico o necesites ayuda para cuidar tus plantas, estamos aquí para ayudarte.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  