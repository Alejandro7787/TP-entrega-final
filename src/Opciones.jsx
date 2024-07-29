import React, { useState } from 'react';

function OpcionesConSelect(props) {
  const [color, setColor] = useState('');
  
 
const [talle, setTalle] = useState('');
  
 
const [cantidad, setCantidad] = useState('');
  
 
const [entrega, setEntrega] = useState('');

  
return (

<form className="box item1">
      <label>
        {props.op1}
        <select className="optiones-value" value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="">Elegir...</option>
          <option value="Rojo">Rojo</option>
          <option value="Marrón">Marrón</option>
          <option value="Verde">Verde</option>
          <option value="Azul">Azul</option>
        </select>
      </label>
      <label>
        {props.op2}
        <select className="optiones-value" value={talle} onChange={(e) => setTalle(e.target.value)}>
          <option value="">Elegir...</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </label>
      <label>
        {props.op3}
        <select className="optiones-value" value={cantidad} onChange={(e) => setCantidad(e.target.value)}>
          <option value="">Elegir...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </label>
      <label>
        {props.op4}
        <select className="optiones-value" value={entrega} onChange={(e) => setEntrega(e.target.value)}>
          <option value="">Elegir...</option>
          <option value="Correo">Correo</option>
          <option value="Retirar">Retirar</option>
        </select>
      </label>
    </form>
  );
}

export default OpcionesConSelect;