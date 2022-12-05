
import { Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/Authcontext";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    let navigate = useNavigate()
    let { user } = useContext(AuthContext);
    if (!user) {
        return <Navigate to="/auth/login" />;
      } else {
        return children;
      }
  };
  
  export default PrivateRoute;