export default function Formulario() {
  return (
    <div className="p-6 flex justify-center">
      <form className="flex flex-col gap-4 w-full max-w-lg bg-white p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-700">
          Reservar cita
        </h1>

        {/* Nombre */}
        <input
          type="text"
          placeholder="Nombre"
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Apellidos */}
        <input
          type="text"
          placeholder="Apellidos"
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Número de teléfono */}
        <input
          type="tel"
          placeholder="Número de teléfono"
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Correo electrónico */}
        <input
          type="email"
          placeholder="Correo electrónico"
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Tipo de mascota */}
        <input
          type="text"
          placeholder="Tipo de mascota (Perro, Gato, etc.)"
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Nombre de la mascota */}
        <input
          type="text"
          placeholder="Nombre de la mascota"
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Información para el doctor */}
        <textarea
          placeholder="Información adicional para el doctor (síntomas, comportamiento, etc.)"
          rows="4"
          className="border p-2 rounded resize-y focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
