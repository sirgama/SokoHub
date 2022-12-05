
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/Authcontext";

const PrivateRoute = ({ children, ...rest }) => {
    let { user } = useContext(AuthContext);
    return <Route {...rest}>{!user ? <Redirect to="/auth/login" /> : children}</Route>;
  };
  
  export default PrivateRoute;