import { Link } from "react-router-dom";
import HeroBg from "../assets/fotos/clinica2.jpg";

export default function Hero() {
  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center text-center bg-blue-100"
      style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/50 to-blue-900/70"></div>

      <div className="relative z-10 max-w-3xl px-6">
        <h2 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
          Bienvenido a nuestra <span className="text-yellow-300">Clínica Veterinaria</span> 🐶🐱
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-100">
          Cuidamos la salud y bienestar de tus mascotas con{" "}
          <span className="font-semibold text-yellow-200">amor</span> y profesionalismo.
        </p>

        <Link
          to="/login"
          className="mt-8 inline-block bg-yellow-400 text-blue-900 px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-yellow-300 hover:scale-105 transition-transform duration-300"
        >
          Reserva tu cita
        </Link>
      </div>

      <div className="absolute bottom-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-20">
          <path
            d="M0.00,49.98 C150.00,150.00 349.90,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
