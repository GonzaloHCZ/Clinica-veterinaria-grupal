export default function Contacto() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 p-8 text-center">
      <h2 className="text-3xl font-bold text-yellow-700 mb-4">Contáctanos</h2>
      <p className="text-gray-700 max-w-2xl">
        ¿Tienes dudas o deseas reservar una cita? Escríbenos o llámanos:
      </p>
      <div className="mt-6 text-lg text-gray-800">
        <p>📍 Dirección: Av. Siempre Viva 123, Lima</p>
        <p>📞 Teléfono: +51 999 888 777</p>
        <p>📧 Email: contacto@clinicavet.com</p>
      </div>
      <form className="mt-6 w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <input
          type="text"
          placeholder="Tu nombre"
          className="w-full border p-2 mb-3 rounded"
        />
        <input
          type="email"
          placeholder="Tu correo"
          className="w-full border p-2 mb-3 rounded"
        />
        <textarea
          placeholder="Tu mensaje"
          className="w-full border p-2 mb-3 rounded"
          rows="4"
        ></textarea>
        <button className="w-full bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
          Enviar
        </button>
      </form>
    </section>
  );
}
