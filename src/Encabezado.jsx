import React, { useEffect } from "react";
import './Encabezado.css';
import { Outlet, Link } from "react-router-dom"
import chaqueta from './img/chaqueta.png';

const Encabezado = () => {
    useEffect(() => {
        const abrir = document.querySelector("#abrir");
        const cerrar = document.querySelector("#cerrar");
        const nav = document.querySelector("#nav");

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
    }, []);

    return (
        <header>
            <h1 className="titulo">Estilo Urbano</h1>
            <button id="abrir" className="abrir-menu">
                <img src={chaqueta} alt="menu"/>
            </button>
            <nav className="nav" id="nav">
                <button className="cerrar-menu" id="cerrar">Cerrar</button>
                <ul className="nav-list">
                    <li><Link to= "/Inicio">Inicio</Link></li>
                    <li><Link to= "/Productos">Productos</Link></li>
                    <li><Link to= "/Promociones">Promociones</Link></li>
                    <li><Link to= "/Conocenos">Conocenos</Link></li>
                </ul>
            </nav>
            <Outlet />
        </header>
    );
};

export default Encabezado;
