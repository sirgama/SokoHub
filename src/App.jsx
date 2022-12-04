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

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/lands" element={<Lands />} />
      <Route path="/auth/signup" element={<Register />} />
      <Route path="/auth/login" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
