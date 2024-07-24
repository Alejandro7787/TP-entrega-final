import React from "react";
import logo from './img/logo.svg';
import './MisProductos.css'
import OpcionesConSelect from './Opciones.jsx'

function MisProductos(props) {
  return (
    <div className='grid-productos'>
      <div className='caja1'>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Esta va ser la descripcion</p>
      </div>
      <div className="listado-productos">
        <OpcionesConSelect />
      </div>
    </div>
  )
  
}

export default MisProductos;