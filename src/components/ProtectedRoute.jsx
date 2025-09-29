import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const user = JSON.parse(localStorage.getItem("user"));

  // 👇 usamos user.rol en vez de user.role
  if (!user || user.rol !== role) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
