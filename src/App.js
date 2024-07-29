import { Routes, Route } from "react-router-dom";
import Inicio from './Inicio';
import Productos from './Productos';
import Promociones from './Promociones';
import Conocenos from "./Conocenos";

function App() {
  return (
    <div>
     <Routes >
      <Route path="Inicio" element={<Inicio />}></Route>
      <Route path="Productos" element={<Productos />}></Route>
      <Route path="Promociones" element={<Promociones />}></Route>
      <Route path="Conocenos" element={<Conocenos />}></Route>
      </Routes >
    </div>
  );
}

export default App;