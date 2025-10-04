import { useEffect, useState } from "react";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [form, setForm] = useState({
    id_usuario: "",
    nombre: "",
    apellido_paterno: "",
    apellido_materno: "",
    dni: "",
    correo: "",
    contrasena: "",
    telefono: "",
    rol: "",
  });
  const [modoEdicion, setModoEdicion] = useState(false);

  // 🔹 Cargar usuarios
  const cargarUsuarios = () => {
    fetch("http://localhost/mi-clinica-vet/backend/api/listar_usuarios.php")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setUsuarios(data.data);
        }
      })
      .catch((err) => console.error("Error cargando usuarios:", err));
  };

  useEffect(() => {
    cargarUsuarios();
  }, []);

  // 🔹 Manejar cambios en formulario
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Guardar nuevo usuario
  const handleGuardar = () => {
    fetch("http://localhost/mi-clinica-vet/backend/api/agregar_usuario.php", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        setForm({
          id_usuario: "",
          nombre: "",
          apellido_paterno: "",
          apellido_materno: "",
          dni: "",
          correo: "",
          contrasena: "",
          telefono: "",
          rol: "",
        });
        cargarUsuarios();
      });
  };

  // 🔹 Editar usuario
  const handleEditar = (usuario) => {
    setForm(usuario);
    setModoEdicion(true);
  };

  // 🔹 Actualizar usuario
  const handleActualizar = () => {
    fetch("http://localhost/mi-clinica-vet/backend/api/editar_usuario.php", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        setModoEdicion(false);
        setForm({
          id_usuario: "",
          nombre: "",
          apellido_paterno: "",
          apellido_materno: "",
          dni: "",
          correo: "",
          contrasena: "",
          telefono: "",
          rol: "",
        });
        cargarUsuarios();
      });
  };

  // 🔹 Eliminar usuario
  const handleEliminar = (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este usuario?")) return;
    fetch("http://localhost/mi-clinica-vet/backend/api/eliminar_usuario.php", {
      method: "POST",
      body: JSON.stringify({ id_usuario: id }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        cargarUsuarios();
      });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gestión de Usuarios</h1>

      {/* 🔹 Formulario */}
      <div className="bg-white shadow-md rounded p-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">
          {modoEdicion ? "Editar Usuario" : "Agregar Usuario"}
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Nombre"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="apellido_paterno"
            value={form.apellido_paterno}
            onChange={handleChange}
            placeholder="Apellido Paterno"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="apellido_materno"
            value={form.apellido_materno}
            onChange={handleChange}
            placeholder="Apellido Materno"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="dni"
            value={form.dni}
            onChange={handleChange}
            placeholder="Dni"
            className="border p-2 rounded"
          />
          <input
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            placeholder="Correo"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="contraseña"
            value={form.contrasena}
            onChange={handleChange}
            placeholder="Contraseña"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            placeholder="Telefono"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="rol"
            value={form.rol}
            onChange={handleChange}
            placeholder="Rol"
            className="border p-2 rounded"
          />
        </div>

        <div className="mt-4">
          {modoEdicion ? (
            <button
              onClick={handleActualizar}
              className="bg-green-600 text-white px-4 py-2 rounded mr-2"
            >
              Actualizar
            </button>
          ) : (
            <button
              onClick={handleGuardar}
              className="bg-blue-600 text-white px-4 py-2 rounded mr-2"
            >
              Guardar
            </button>
          )}
          {modoEdicion && (
            <button
              onClick={() => {
                setModoEdicion(false);
                setForm({
                  id_usuario: "",
                  nombre: "",
                  apellido_paterno: "",
                  apellido_materno: "",
                  dni: "",
                  correo: "",
                  contrasena: "",
                  telefono: "",
                  rol: "",
                });
              }}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancelar
            </button>
          )}
        </div>
      </div>

      {/* 🔹 Tabla */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white text-sm">
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Nombre</th>
              <th className="px-4 py-2 border">Apellido Paterno</th>
              <th className="px-4 py-2 border">Apellido Materno</th>
              <th className="px-4 py-2 border">DNI</th>
              <th className="px-4 py-2 border">Correo</th>
              <th className="px-4 py-2 border">Contraseña</th>
              <th className="px-4 py-2 border">Teléfono</th>
              <th className="px-4 py-2 border">Rol</th>
              <th className="px-4 py-2 border">Fecha Registro</th>
              <th className="px-4 py-2 border">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.length > 0 ? (
              usuarios.map((usuario) => (
                <tr
                  key={usuario.id_usuario}
                  className="hover:bg-gray-100 transition-colors text-sm"
                >
                  <td className="px-4 py-2 border text-center">{usuario.id_usuario}</td>
                  <td className="px-4 py-2 border">{usuario.nombre}</td>
                  <td className="px-4 py-2 border">{usuario.apellido_paterno}</td>
                  <td className="px-4 py-2 border">{usuario.apellido_materno}</td>
                  <td className="px-4 py-2 border">{usuario.dni}</td>
                  <td className="px-4 py-2 border">{usuario.correo}</td>
                  <td className="px-4 py-2 border">{usuario.contrasena}</td>
                  <td className="px-4 py-2 border">{usuario.telefono}</td>
                  <td className="px-4 py-2 border">{usuario.rol}</td>
                  <td className="px-4 py-2 border">{usuario.fecha_registro}</td>
                  <td className="px-4 py-2 border text-center">
                    <button
                      onClick={() => handleEditar(usuario)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleEliminar(usuario.id_usuario)}
                      className="bg-red-600 text-white px-2 py-1 rounded"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="11"
                  className="text-center text-gray-500 py-4 border"
                >
                  No hay usuarios registrados
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


