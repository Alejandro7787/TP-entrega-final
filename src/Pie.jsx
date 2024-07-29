import React from 'react'
import './Pie.css';

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
                    <ul><li><a href="articulos.html">Conocenos</a></li>
                        <li><a href="index.html">Productos</a></li>
                        <li><a href="formulario.html">Contactanos</a></li>
                    </ul>
                </div>
                <div className="footerBottom">
                <p>Copyright &copy;2024; Diseñado por <span class="designer">AAlmiron</span></p>
                </div>
            </div>
        </footer>
  )
}

export default Pie
