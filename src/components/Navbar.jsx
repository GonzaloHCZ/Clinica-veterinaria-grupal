import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Clínica Vet</h1>
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-gray-300">Inicio</Link></li>
        <li><Link to="/servicios" className="hover:text-gray-300">Servicios</Link></li>
        <li><Link to="/nosotros" className="hover:text-gray-300">Nosotros</Link></li>
        <li><Link to="/contacto" className="hover:text-gray-300">Contacto</Link></li>
      </ul>
    </nav>
  );
}
