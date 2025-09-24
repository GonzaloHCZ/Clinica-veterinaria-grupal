// src/layouts/AdminLayout.jsx
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">Panel de Administración</h1>
      </header>

      <main className="p-6">
        {/* Aquí se renderizarán las páginas hijas */}
        <Outlet />
      </main>
    </div>
  );
}
