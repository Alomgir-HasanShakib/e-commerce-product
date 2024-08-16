import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/Authentication/Authentication";


const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loader } = useContext(AuthContext);
  if (user) return children;
  if(loader) return <h2 className="text-4xl">Loading........</h2>

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
