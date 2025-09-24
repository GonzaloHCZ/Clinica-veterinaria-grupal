import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const user = JSON.parse(localStorage.getItem("user")); // Obtenemos el usuario

  // Si no existe o no tiene el rol adecuado, lo mandamos al login
  if (!user || user.role !== role) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
