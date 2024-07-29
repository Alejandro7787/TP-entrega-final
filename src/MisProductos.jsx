import React from "react";
import './MisProductos.css'
import OpcionesConSelect from './Opciones.jsx';


function MisProductos(props) {
  return (
    <div className='grid-productos'>
      <div className='caja1'>
        <img src={props.imagen} className="caja1-img" alt="productos" />
        <p className="parrafosP">{props.parrafo} <br></br><br></br>
        <button>Me lo llevo!!</button>
        </p>
      </div>
      <OpcionesConSelect className="listado-productos" 
      op1= 'Color:    '
      op2= 'Talles:    '
      op3= 'Cant.: '
      op4= 'Envio:    '
      />
    </div>
  )
}

export default MisProductos;