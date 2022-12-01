import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Landing from './pages/Landing/Landing';
import Lands from './pages/Landing/Lands';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="lands/*" element={<Lands />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
