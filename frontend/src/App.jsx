import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import About from './Pages/About.jsx'
import Registeration from './Pages/Registeration.jsx'
export default function App() {
  return( 
  <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Registeration />} />
        <Route path="/about" element={<About />}/>
      </Routes>
    </Router>
  );
}