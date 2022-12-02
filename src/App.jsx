import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Landing from './pages/Landing/Landing';
import Lands from './pages/Lands/Lands';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/lands" element={<Lands />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
