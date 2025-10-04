import { useEffect, useState } from "react";

export default function AdminReservas() {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    fetch("http://localhost/mi-clinica-vet/backend/api/listar_citas.php")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setReservas(data.data);
        }
      })
      .catch((err) => console.error("Error cargando reservas:", err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {reservas.map((reserva) => (
        <div
          key={reserva.id_reserva}
          className="bg-yellow-200 p-4 rounded-xl shadow-lg transform rotate-1 hover:rotate-0 transition-all"
        >
          <h3 className="text-lg font-bold text-gray-800">{reserva.servicio}</h3>
          <p className="text-gray-700">
            Mascota: {reserva.nombre_mascota} ({reserva.tipo_mascota})
          </p>
          <p className="text-sm text-gray-600">
            📅 {reserva.fecha} - ⏰ {reserva.hora}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Cliente: {reserva.nombre} {reserva.apellido_paterno}
          </p>
        </div>
      ))}
    </div>
  );
}
