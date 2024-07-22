import React from "react";
import logo from './logo.svg';
import './estilos/MisProductos.css'

var talles = ['S','M','L','XL']

function MisProductos(props) {
  return (
    <div className='grid-productos'>
      <div className='caja1'>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Esta va ser la descripcion</p>
      </div>
      <div className='listado-productos'>
      <section className='box item1' name="Talle">
       <option value={''}>Talle: {props.talles}</option>
      </section>
      </div>
      </div>
  )
  
}

export default MisProductos;