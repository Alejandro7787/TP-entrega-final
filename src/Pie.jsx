import React from 'react'
import './Pie.css';
import { Outlet, Link } from "react-router-dom"

function Pie() {
  return (
        <footer>
            <div className="footerContainer">
                <div className="socialIcons">
                    <a target="_blank" rel='noopener noreferrer' href="https://www.facebook.com/?locale=es_LA"><i className="fa-brands fa-facebook"></i></a>
                    <a target="_blank" rel='noopener noreferrer' href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                    <a target="_blank" rel='noopener noreferrer' href="https://twitter.com/?lang=es"><i className="fa-brands fa-x"></i></a>
                    <a target="_blank" rel='noopener noreferrer' href="https://support.google.com/answer/2451065?hl=en"><i className="fa-brands fa-google-plus"></i></a>
                    <a target="_blank" rel='noopener noreferrer' href="https://www.youtube.com/"><i className="fa-brands fa-youtube"></i></a>
                </div>
                <div className="footerNav">
                    <ul>
                    <li><Link to= "/Inicio">Inicio</Link></li>
                    <li><Link to= "/Productos">Productos</Link></li>
                    <li><Link to= "/Promociones">Promociones</Link></li>
                    <li><Link to= "/Conocenos">Conocenos</Link></li>
                    </ul>
                </div>
                <div className="footerBottom">
                <p className='pfooter'>Copyright &copy;2024; Diseñado por <span class="designer">AAlmiron</span></p>
                </div>
            </div>
        </footer>
  )
}

export default Pie
