import { Navigate, useLocation } from "react-router-dom";

export default function AuthRoute({ children }) {
  const user = sessionStorage.getItem("userProfile");

  const location = useLocation();

  return user ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
}
