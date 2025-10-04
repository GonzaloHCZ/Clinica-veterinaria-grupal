import { useEffect, useState } from "react";

export default function Dashboard() {
  const [stats, setStats] = useState({
    reservas: 0,
    usuarios: 0,
    servicios: 0,
  });

  useEffect(() => {
    fetch("http://localhost/mi-clinica-vet/backend/api/dashboard_stats.php")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setStats(data.data);
        }
      })
      .catch((err) => console.error("Error cargando estadísticas:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>
      <p className="mb-6">Bienvenido al dashboard del administrador 🚀</p>

      {/* Tarjetas de resumen */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold">Reservas</h2>
          <p className="text-3xl font-bold">{stats.reservas}</p>
        </div>

        <div className="bg-green-600 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold">Usuarios</h2>
          <p className="text-3xl font-bold">{stats.usuarios}</p>
        </div>
      </div>
    </div>
  );
}
