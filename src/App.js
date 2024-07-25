import './App.css'
import Encabezado from './Encabezado.jsx';
import MisProductos from './MisProductos.jsx';
import Pie from './Pie.jsx';

function App() {
  return (
    <div>
      <Encabezado />
        <MisProductos 
        imagen= {require("./img/bosque.png")}
        parrafo="este es el texto para mostrar"
        />
        <MisProductos 
        imagen= {require("./img/bosque.png")}
        parrafo="este es el texto para mostrar"
        />
        <MisProductos 
        imagen= {require("./img/bosque.png")}
        parrafo="este es el texto para mostrar"
        />
        <MisProductos 
        imagen= {require("./img/bosque.png")}
        parrafo="este es el texto para mostrar"
        />
        <Pie/>
    </div>
  );
}

export default App;