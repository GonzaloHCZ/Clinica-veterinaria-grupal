export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="font-bold text-lg">🐾 Clínica Vet</h1>
      <ul className="flex space-x-4">
        <li><a href="#services" className="hover:underline">Servicios</a></li>
        <li><a href="#about" className="hover:underline">Nosotros</a></li>
        <li><a href="#contact" className="hover:underline">Contacto</a></li>
      </ul>
    </nav>
  );
}
