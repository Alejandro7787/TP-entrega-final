import React from 'react';
import Encabezado from './Encabezado.jsx';
import Pie from './Pie.jsx';
import './Inicio.css';
import slice1 from './img/slice1.jpg';
import slice2 from './img/slice2.jpg';
import slice3 from './img/slice3.jpg';
import slice4 from './img/slice4.jpg';
import slice5 from './img/slice5.jpg';
import img1 from './img/img1.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';
import img7 from './img/img7.jpg';
import img8 from './img/img8.jpg';
import img9 from './img/img9.jpeg';
import img10 from './img/img10.jpg';



function Inicio() {

  return (
    <div>
      <Encabezado />
      <div className="grid-contenedor1">
        <div className="ac--container">
            <figure>
            <img src={slice1} alt="imagen 1"/>
            <input id="img-ac-1" type="radio" name="ac--radio" defaultChecked />
                <figcaption>
                    <span>REMERAS</span>
                </figcaption>
                <figure>
                <img src={slice2} alt="imagen 2" />
                    <input type="radio" name="ac--radio" id="img-ac-2"/>
                    <figcaption><span>BUZOS</span></figcaption>
                    <figure>
                    <img src={slice3} alt="imagen 3"/>
                        <input type="radio" name="ac--radio" id="img-ac-3"/>
                        <figcaption><span>SHORTS</span></figcaption>
                        <figure>
                        <img src={slice4} alt="imagen 4"/>
                            <input type="radio" name="ac--radio" id="img-ac-4"/>
                            <figcaption><span>GORRAS</span></figcaption>
                            <figure>
                            <img src={slice5} alt="imagen 5"/>
                                <input type="radio" name="ac--radio" id="img-ac-5"/>
                                <figcaption><span>SACOS</span></figcaption>
                            </figure>
                        </figure>
                    </figure>
                </figure>
            </figure>
        </div>
        <p className="textop" id="p-ac-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ipsam alias, quaerat saepe excepturi quisquam dolor eligendi error nisi architecto illo aspernatur eum. Labore autem possimus harum, molestias eaque sequi?</p>
        <div className="flex-productos">
            <div className="accordion">
                <div className="accordion-item">
                 <img src={img1} alt="SacoGris"/>
                <div className="content">La mejor calidad, talles varios. Elegi el tuyo y lleva lo</div>
                </div>
                <div className="accordion-item">
                 <img src={img3} alt="RemeraDeportiva"/>
                <div className="content">La mejor calidad, talles varios. Elegi el tuyo y lleva lo</div>
                </div>
                <div className="accordion-item">
                 <img src={img4} alt="GorroDeLana"/>
                <div className="content">La mejor calidad, talles varios. Elegi el tuyo y lleva lo</div>
                </div>
                <div className="accordion-item">
                 <img src={img5} alt="Jeans"/>
                <div className="content">La mejor calidad, talles varios. Elegi el tuyo y lleva lo.</div>
                </div>
                <div className="accordion-item">
                 <img src={img7} alt="Campera"/>
                <div className="content">La mejor calidad, talles varios. Elegi el tuyo y lleva lo.</div>
                </div>
                <div className="accordion-item">
                 <img src={img8} alt="Pantalon"/>
                <div className="content">La mejor calidad, talles varios. Elegi el tuyo y lleva lo.</div>
                </div>
                <div className="accordion-item">
                 <img src={img9} alt="Remera"/>
                <div className="content">La mejor calidad, talles varios. Elegi el tuyo y lleva lo.</div>
                </div>
                <div className="accordion-item">
                 <img src={img10} alt="Remera"/>
                <div className="content">La mejor calidad, talles varios. Elegi el tuyo y lleva lo.</div>
                </div>
            </div>
        </div>
    </div>
      <Pie />
      </div>
  );
};

export default Inicio;