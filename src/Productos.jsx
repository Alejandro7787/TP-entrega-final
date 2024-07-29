import React from 'react'
import Encabezado from './Encabezado.jsx';
import MisProductos from './MisProductos.jsx';
import Pie from './Pie.jsx';

function Productos() {
  return (
    <div>
      <Encabezado />
      <div className='productos'>
        <MisProductos
        imagen= {require("./img/remera catalogo.jpg")}
        parrafo="¡Renova tu estilo con nuestras remeras exclusivas! Diseños únicos, calidad premium y comodidad insuperable. ¡No te quedes sin la tuya!"
        />
        <MisProductos 
        imagen= {require("./img/pantalones catalogo.jpg")}
        parrafo="¡Luce increíble con nuestros pantalones! Cómodos, modernos y perfectos para cualquier ocasión. ¡Consigue los tuyos ahora!"
        />
        <MisProductos 
        imagen= {require("./img/camisas catalogo.jpg")}
        parrafo="este es el texto para mostrar"
        />
        <MisProductos 
        imagen= {require("./img/bermudas catalogo.jpg")}
        parrafo="este es el texto para mostrar"
        />
      </div>
        <Pie/>
    </div>
  )
}

export default Productos
