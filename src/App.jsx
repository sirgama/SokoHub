import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Landing from './pages/Landing/Landing';
import Lands from './pages/Lands/Lands';
import Register from './pages/Auth/Register';
import LoginPage from './pages/Auth/LoginPage';
import { AuthProvider } from './context/Authcontext';
import Farmer from './pages/Dashboard/Farmer';
import PrivateRoute from './utils/PrivateRoute';

function App() {

  return (
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/lands" element={<Lands />} />
      <Route path="/farmers" element={<PrivateRoute><Farmer /></PrivateRoute>} />
      <Route path="/auth/signup" element={<Register />} />
      <Route path="/auth/login" element={<LoginPage />} />

    </Routes>
  </BrowserRouter>
  </AuthProvider>
  )
}

export default App
