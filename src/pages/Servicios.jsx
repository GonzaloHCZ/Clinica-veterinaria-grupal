export default function Servicios() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-8 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Nuestros Servicios</h2>
      <p className="text-gray-700 max-w-2xl">
        En nuestra clínica veterinaria ofrecemos atención integral para tu mascota:
      </p>
      <ul className="mt-6 space-y-2 text-lg text-gray-800">
        <li>✅ Consultas generales y especializadas</li>
        <li>✅ Vacunación y desparasitación</li>
        <li>✅ Cirugías menores y mayores</li>
        <li>✅ Servicios de estética y baño</li>
        <li>✅ Emergencias 24/7</li>
      </ul>
    </section>
  );
}