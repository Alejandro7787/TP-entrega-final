import React from 'react'
import Encabezado from './Encabezado.jsx';
import MisProductos from './MisProductos.jsx';
import Pie from './Pie.jsx';

function Productos() {
  return (
    <div>
      <Encabezado />
        <MisProductos 
        imagen= {require("./img/remera catalogo.jpg")}
        parrafo="este es el texto para mostrar"
        />
        <MisProductos 
        imagen= {require("./img/pantalones catalogo.jpg")}
        parrafo="este es el texto para mostrar"
        />
        <MisProductos 
        imagen= {require("./img/camisas catalogo.jpg")}
        parrafo="este es el texto para mostrar"
        />
        <MisProductos 
        imagen= {require("./img/bermudas catalogo.jpg")}
        parrafo="este es el texto para mostrar"
        />
        <Pie/>
    </div>
  )
}

export default Productos
