import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import './App.css';
import SM from "./Page/SM";
import RMCards from "./Page/RMCards";
import CharacterDetail from "./Page/DetalleCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Sobre_mi" element={<SM />} />
        <Route path="/Personajes" element={<RMCards />} />
        <Route path="/Personajes/:id" element={<CharacterDetail />} /> {/* Ruta separada */}
      </Routes>
    </div>
  );
}

export default App;
