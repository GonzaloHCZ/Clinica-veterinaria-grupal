export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-blue-100">
      <h2 className="text-4xl font-bold text-blue-700">
        Bienvenido a nuestra Clínica Veterinaria 🐶🐱
      </h2>
      <p className="mt-4 text-lg text-gray-700">
        Cuidamos la salud y bienestar de tus mascotas con amor y profesionalismo.
      </p>
      <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
        Reserva tu cita
      </button>
    </section>
  );
}
