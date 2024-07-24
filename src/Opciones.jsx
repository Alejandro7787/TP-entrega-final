import { useState } from "react";

function OpcionesConSelect() {
    const [option, setOption] = useState('opcion1')
    const manejarCambios = (event) => {
        setOption(event.target.value)
    }
    return (
        <form className="box item1">
            <label>
                Color:
                <select className="optiones-value" value={option} onChange={manejarCambios}>
                    <option value="Rojo">Rojo</option>
                    <option value="Marrón">Marrón</option>
                    <option value="Verde">Verde</option>
                    <option value="Azul">Azul</option>
                </select>
            </label>
            <label>
                Talles:
                <select className="optiones-value" value={option} onChange={manejarCambios}>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
            </label>
            <label>
                Cantidad:
                <select className="optiones-value" value={option} onChange={manejarCambios}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </label>
            <label>
                Entrega:
                <select className="optiones-value" value={option} onChange={manejarCambios}>
                    <option value="Correo">Correo</option>
                    <option value="Retirar">Retirar</option>
                </select>
            </label>
        </form>
    )
}

export default OpcionesConSelect;