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
import Investor from './pages/Dashboard/Investor';
import Leaser from './pages/Dashboard/Leaser';

function App() {

  return (
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/lands" element={<Lands />} />
      <Route path="/dashboard/farmers" element={<PrivateRoute><Farmer /></PrivateRoute>} />
      <Route path="/dashboard/investor" element={<PrivateRoute><Investor /></PrivateRoute>} />
      <Route path="/dashboard/leaser" element={<PrivateRoute><Leaser /></PrivateRoute>} />
      <Route path="/auth/signup" element={<Register />} />
      <Route path="/auth/login" element={<LoginPage />} />

    </Routes>
  </BrowserRouter>
  </AuthProvider>
  )
}

export default App
