// src/layouts/AdminLayout.jsx
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function AdminLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    // Eliminar datos de sesión (ejemplo: rol del usuario)
    localStorage.removeItem("userRole");

    // Cerrar menú
    setMenuOpen(false);

    // Redirigir al login
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white flex flex-col p-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col space-y-3">
          <Link to="/admin" className="hover:bg-blue-500 p-2 rounded">
            Dashboard
          </Link>
          <Link to="/admin/usuarios" className="hover:bg-blue-500 p-2 rounded">
            Usuarios
          </Link>
          <Link to="/admin/citas" className="hover:bg-blue-500 p-2 rounded">
            Citas
          </Link>
        </nav>
      </aside>

      {/* Contenedor principal */}
      <div className="flex-1 flex flex-col">
        {/* Header superior */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">Panel de Administración</h1>

          {/* Menú usuario */}
          <div className="relative">
            {/* Avatar */}
            <button onClick={toggleMenu}>
              <img
                src="https://i.pravatar.cc/40?img=3"
                alt="Usuario"
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-blue-600"
              />
            </button>

            {/* Dropdown */}
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
                <div className="px-4 py-2 text-gray-700 font-semibold border-b">
                  Admin José
                </div>
                <Link
                  to="/admin/perfil"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  Perfil
                </Link>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Contenido dinámico */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
