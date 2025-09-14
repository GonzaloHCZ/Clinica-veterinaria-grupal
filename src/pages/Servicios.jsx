import { HeartPulse, Syringe, Scissors, ShowerHead, Clock } from "lucide-react";

export default function Servicios() {
  const servicios = [
    { icon: <HeartPulse className="w-10 h-10 text-pink-500" />, titulo: "Consultas", desc: "Generales y especializadas para la salud de tu mascota." },
    { icon: <Syringe className="w-10 h-10 text-green-500" />, titulo: "Vacunación", desc: "Protección completa con vacunas y desparasitación." },
    { icon: <Scissors className="w-10 h-10 text-red-500" />, titulo: "Cirugías", desc: "Atención en procedimientos menores y mayores." },
    { icon: <ShowerHead className="w-10 h-10 text-blue-500" />, titulo: "Estética y Baño", desc: "Baños, corte de pelo y estética para consentirlos." },
    { icon: <Clock className="w-10 h-10 text-yellow-500" />, titulo: "Emergencias 24/7", desc: "Atención inmediata en cualquier momento." },
  ];

  return (
    <section className="flex flex-col items-center bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-12 pb-16 text-center">

      <h2 className="text-4xl font-extrabold text-blue-700 mb-6 drop-shadow-lg">
        🐾 Nuestros Servicios 🐾
      </h2>
      <p className="text-gray-600 max-w-2xl text-lg mb-10">
        En nuestra clínica veterinaria ofrecemos atención integral para el cuidado y bienestar de tu mascota:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 flex flex-col items-center transition-transform transform hover:-translate-y-2 hover:scale-105 duration-300"
          >
            <div className="mb-4">{servicio.icon}</div>
            <h3 className="text-xl font-semibold text-blue-800">{servicio.titulo}</h3>
            <p className="text-gray-600 mt-2">{servicio.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
