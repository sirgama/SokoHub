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
import Dashboard from './pages/Dashboard/Leaser/Dashboard';
import MyLands from './pages/Dashboard/Leaser/MyLands';
import Contracts from './pages/Dashboard/Leaser/Contracts';
import FDashboard from './pages/Dashboard/Farmer/Dashboard';
import FLandlist from './pages/Dashboard/Farmer/Landlist';
import Croplist from './pages/Dashboard/Farmer/Croplist';
import Profile from './pages/Dashboard/Profile';
import Resources from './pages/Dashboard/Resources';
import CropHealth from './pages/Dashboard/Farmer/CropHealth';

function App() {

  return (
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/lands" element={<Lands />} />
      <Route path="/dashboard/farmers" element={<PrivateRoute><Farmer /></PrivateRoute>} > 
        <Route path='home' element={<PrivateRoute><FDashboard /></PrivateRoute>} />
        <Route path='farms' element={<PrivateRoute><FLandlist /></PrivateRoute>} />
        <Route path='crops' element={<PrivateRoute><Croplist /></PrivateRoute>} />
        <Route path='profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path='resources' element={<PrivateRoute><Resources /></PrivateRoute>} />
        <Route path='crophealth' element={<PrivateRoute><CropHealth /></PrivateRoute>} />
      </Route>
      <Route path="/dashboard/investor" element={<PrivateRoute><Investor /></PrivateRoute>} />
      <Route path="/dashboard/leaser" element={<PrivateRoute><Leaser /></PrivateRoute>}>
        <Route path='home' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path='contracts' element={<PrivateRoute><Contracts /></PrivateRoute>} />
        <Route path='lands' element={<PrivateRoute><MyLands /></PrivateRoute>} />
        <Route path='profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path='resources' element={<PrivateRoute><Resources /></PrivateRoute>} />

      </ Route>
      <Route path="/auth/signup" element={<Register />} />
      <Route path="/auth/login" element={<LoginPage />} />

    </Routes>
  </BrowserRouter>
  </AuthProvider>
  )
}

export default App
