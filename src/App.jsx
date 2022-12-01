import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Landing from './pages/Landing/Landing';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="users/*" element={<Users />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
