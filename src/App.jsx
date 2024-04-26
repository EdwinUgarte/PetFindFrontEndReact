import "./App.css";
import Nav from "./components/Navbar/NavBar";
import Home from "./components/Home/Home"
import { Routes, Route, HashRouter } from "react-router-dom";
import Perfil from "./components/Perfil/Perfil";
import Actualizar from "./components/Actualizar/Actualizar";
import Agregar from "./components/Agregar/Agregar";

function App() {
  return (
    <HashRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Home/>}/>
        <Route path="/agregar" element={<Agregar/>}/>
        <Route path="/perfil/:id" element={<Perfil/>}/>
        <Route path="/update/:id" element={<Actualizar/>}/>
        <Route path="/agregar" element={<Agregar/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;

