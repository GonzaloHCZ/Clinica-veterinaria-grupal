import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await fetch("http://localhost/mi-clinica-vet/backend/api/login.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correo: usuario, contrasena: password }),
    });

    const result = await response.json();
    console.log(result);

    if (result.status === "success") {
      localStorage.setItem("user", JSON.stringify(result.usuario));

      if (result.usuario.rol === "admin") {
        navigate("/admin");
      } else {
        navigate("/reservar"); // 👈 manda al flujo de reservas
      }
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Iniciar Sesión</h2>
        <Input
          placeholder="Correo electrónico"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="w-full mt-4" onClick={handleLogin}>
          Ingresar
        </Button>
      </div>
    </div>
  );
}

