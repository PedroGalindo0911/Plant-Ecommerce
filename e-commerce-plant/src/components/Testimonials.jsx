const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Juan Pérez',
      comment: '¡Las plantas que compré están hermosas y saludables! El servicio fue excelente.',
    },
    {
      id: 2,
      name: 'María López',
      comment: 'Recomiendo esta tienda, tienen una gran variedad de plantas y el envío fue rápido.',
    },
  ];

  return (
    <section className="bg-green-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-green-800 mb-8">
          Testimonios de Clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white shadow-md rounded-lg p-6">
              <p className="text-lg text-gray-800 font-semibold">{testimonial.name}</p>
              <p className="text-gray-600 mt-2">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
