import React from "react";
import './MisProductos.css'
import OpcionesConSelect from './Opciones.jsx'


function MisProductos(props) {
  return (
    <div className='grid-productos'>
      <div className='caja1'>
        <img src={props.imagen} className="caja1-img" alt="productos" />
        <p>{props.parrafo}</p>
      </div>
      <OpcionesConSelect className="listado-productos" 
      op1= 'Color'
      op2= 'Talle'
      op3= 'Cantidad'
      op4= 'Envio'
      />
    </div>
  )
}

export default MisProductos;