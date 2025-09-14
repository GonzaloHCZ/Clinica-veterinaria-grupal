import { Heart, ShieldCheck, Users } from "lucide-react";
import Veterinaria from "../assets/fotos/clinica2.jpg"

export default function Nosotros() {
  return (
    <section className="flex flex-col items-center bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-12 pb-16 text-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src={Veterinaria}
            alt="Veterinaria"
            className="rounded-3xl shadow-lg w-full max-w-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Texto */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-green-700 mb-6 drop-shadow-lg">
            Sobre Nosotros
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Somos una clínica veterinaria dedicada al cuidado y bienestar de tus mascotas 🐶🐱. 
            Contamos con un equipo profesional comprometido en brindar atención médica de calidad, 
            con amor y respeto hacia los animales.
          </p>
          <p className="text-gray-600 mb-8">
            Nuestra misión es garantizar la salud de tu mascota en un ambiente de confianza y cariño.
          </p>

          {/* Valores */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition">
              <Heart className="w-8 h-8 text-red-500 mb-3" />
              <h3 className="font-semibold text-green-700">Amor</h3>
              <p className="text-gray-600 text-sm mt-2">Cuidamos con cariño a cada mascota.</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition">
              <ShieldCheck className="w-8 h-8 text-blue-500 mb-3" />
              <h3 className="font-semibold text-green-700">Confianza</h3>
              <p className="text-gray-600 text-sm mt-2">Atención transparente y profesional.</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition">
              <Users className="w-8 h-8 text-yellow-500 mb-3" />
              <h3 className="font-semibold text-green-700">Compromiso</h3>
              <p className="text-gray-600 text-sm mt-2">Equipo dedicado a la salud animal.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
