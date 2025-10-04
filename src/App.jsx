import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Servicios from "./pages/Servicios";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Formulario from "./pages/Formulario";

// Admin
import Dashboard from "./pages/Admin/Dashboard";
import Usuarios from "./pages/Admin/Usuarios";
import AdminReservas from "./pages/Admin/AdminReservas"; // 👈 tu nueva página
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./layouts/AdminLayout";

// Login
import Login from "./pages/Login";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Layout cliente */}
        <Route
          path="/*"
          element={
            <div className="bg-blue-50 min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Hero />} />
                  <Route path="/servicios" element={<Servicios />} />
                  <Route path="/nosotros" element={<Nosotros />} />
                  <Route path="/contacto" element={<Contacto />} />
                </Routes>
              </main>
              <Footer />
            </div>
          }
        />

        {/* Login */}
        <Route path="/login" element={<Login />} />
        <Route path="/reservar" element={<Formulario />} />

        {/* Layout admin con Outlet */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="citas" element={<AdminReservas />} /> {/* 👈 Post-it */}
        </Route>
      </Routes>
    </Router>
  );
}
