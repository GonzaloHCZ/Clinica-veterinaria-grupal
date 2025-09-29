import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ReservaCita() {
  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem("user")); // 👈 ya logueado
  const [step, setStep] = useState(2); // arranca desde el paso 2
  const [form, setForm] = useState({
    nombreMascota: "",
    tipoMascota: "",
    servicio: "",
    fecha: null,
    hora: "",
  });

  const horasDisponibles = ["09:00", "10:00", "11:00", "15:00", "16:00"];

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleConfirmar = async () => {
    const response = await fetch("http://localhost/mi-clinica-vet/backend/api/reservas.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        usuario: usuario.id_usuario, // 👈 ya tienes el usuario
        nombreMascota: form.nombreMascota,
        tipoMascota: form.tipoMascota,
        servicio: form.servicio,
        fecha: form.fecha.toISOString().split("T")[0],
        hora: form.hora,
      }),
    });

    const result = await response.json();
    console.log(result);

    if (result.status === "success") {
      setStep(6);
    } else {
      alert("Error: " + result.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 to-blue-100">
      <Card className="w-full max-w-lg shadow-xl rounded-2xl p-6">
        <CardContent>
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* PASO 2 - Mascota y Servicio */}
            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Coloca el nombre de tu mascota</h2>
                <Input
                  placeholder="Escribe el nombre de tu mascota"
                  value={form.nombreMascota}
                  onChange={(e) =>
                    setForm({ ...form, nombreMascota: e.target.value })
                  }
                />
              {/* Tipo de mascota */}
              <h2 className="text-xl font-semibold">Selecciona tu mascota</h2>
              <Select
                value={form.tipoMascota}
                onValueChange={(value) => setForm({ ...form, tipoMascota: value })}
              >
                <SelectTrigger>{form.tipoMascota || "Tipo de mascota"}</SelectTrigger>
                <SelectContent>
                  <SelectItem value="Perro">Perro 🐶</SelectItem>
                  <SelectItem value="Gato">Gato 🐱</SelectItem>
                </SelectContent>
              </Select>

                <h2 className="text-xl font-semibold">Selecciona el servicio</h2>
                <Select
                  onValueChange={(value) => setForm({ ...form, servicio: value })}
                >
                  <SelectTrigger>{form.servicio || "Elige Servicio"}</SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Consulta">Consulta general</SelectItem>
                    <SelectItem value="Vacuna">Vacunación</SelectItem>
                    <SelectItem value="Baño">Baño</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => navigate("/login")}>
                    Atrás
                  </Button>
                  <Button onClick={nextStep}>Continuar</Button>
                </div>
              </div>
            )}

            {/* PASO 3 - Selección de Fecha */}
            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-center">
                  Selecciona una fecha 📅
                </h2>
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={form.fecha}
                    onSelect={(date) => setForm({ ...form, fecha: date })}
                    className="rounded-md border shadow-sm"
                  />
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={prevStep}>
                    Atrás
                  </Button>
                  <Button onClick={nextStep} disabled={!form.fecha}>
                    Continuar
                  </Button>
                </div>
              </div>
            )}

            {/* PASO 4 - Selección de Hora */}
            {step === 4 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-center">
                  Selecciona la hora ⏰
                </h2>
                <div className="grid grid-cols-3 gap-3">
                  {horasDisponibles.map((hora) => (
                    <Button
                      key={hora}
                      variant={form.hora === hora ? "default" : "outline"}
                      onClick={() => setForm({ ...form, hora })}
                    >
                      {hora}
                    </Button>
                  ))}
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={prevStep}>
                    Atrás
                  </Button>
                  <Button onClick={nextStep} disabled={!form.hora}>
                    Continuar
                  </Button>
                </div>
              </div>
            )}

            {/* PASO 5 - Confirmación */}
            {step === 5 && (
              <div className="space-y-4 text-center">
                <h2 className="text-xl font-bold text-green-700">
                  Confirmar cita ✅
                </h2>
                <p>
                  <strong>Mascota:</strong> {form.nombreMascota} ({form.tipoMascota})
                </p>
                <p>
                  <strong>Servicio:</strong> {form.servicio}
                </p>
                <p>
                  <strong>Fecha:</strong> {form.fecha?.toLocaleDateString()}
                </p>
                <p>
                  <strong>Hora:</strong> {form.hora}
                </p>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={prevStep}>
                    Atrás
                  </Button>
                  <Button onClick={handleConfirmar} className="bg-green-600">
                    Confirmar
                  </Button>
                </div>
              </div>
            )}

            {/* PASO 6 - Éxito */}
            {step === 6 && (
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-green-600">
                  ¡Cita reservada con éxito! 🎉
                </h2>
                <p>Recibirás un correo con la confirmación.</p>
                <Button className="w-full" onClick={() => setStep(2)}>
                  Reservar otra cita
                </Button>
              </div>
            )}
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
}