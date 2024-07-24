import React from "react";
import chaqueta from './img/chaqueta.png'
import Navegador from './Navegador.css'

const Encabezado = () => {
    useEffect(() => {
      const nav = document.querySelector("#nav");
      const abrir = document.querySelector("#abrir");
      const cerrar = document.querySelector("#cerrar");
  
      const abrirMenu = () => {
        if (nav) {
          nav.classList.add("visible");
        }
      };
  
      const cerrarMenu = () => {
        if (nav) {
          nav.classList.remove("visible");
        }
      };
  
      abrir.addEventListener("click", abrirMenu);
      cerrar.addEventListener("click", cerrarMenu);
  
      return () => {
        abrir.removeEventListener("click", abrirMenu);
        cerrar.removeEventListener("click", cerrarMenu);
      };
    }
)

return (
    <header>
        <h1>La Tienda</h1>
        <button id="abrir" className="abrir-menu">
            <img src={chaqueta} alt="menu"/>
        </button>
        <nav className="nav" id="nav">
            <button className="cerrar-menu" id="cerrar">Cerrar</button>
            <ul className="nav-list">
                <li><a href="#">Conocenos</a></li>
                <li><a href="#">Productos</a>
                <ul style={{ '--cantidad-items': '4.5' }}>
                    <li>Pantalones</li><br></br>
                    <li>Remera</li><br></br>
                    <li>Accesorios</li><br></br>
                    <li>Calzados</li><br></br>
                </ul>
                </li>
                <li><a href="#">Promociones</a></li>
                <li><a href="#">Contactanos</a></li>
            </ul>
        </nav>
    </header>
)
}
    

export default Encabezado;