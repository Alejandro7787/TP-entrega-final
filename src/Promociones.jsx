import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import promo1 from './img/promo1.jpg';
import promo2 from './img/promo2.jpg';
import promo3 from './img/promo3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Promociones.css';
import Pie from './Pie';

function Promociones() {
  return (
    <div>
        <div className='grid-carrusel'>
          <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block"
              src={promo1}
              alt="First slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={promo2}
              alt="Second slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img
                className="d-block"
                src={promo3}
                alt="Third slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item >
          </Carousel>

          <div className="flex-productos-cr">
            <p>¡Grandes Ofertas en Estilo Urbano!
              <br></br>
                ¡No te pierdas nuestras promociones exclusivas! Este mes, Estilo Urbano tiene todo lo que necesitas para renovar tu guardarropa con estilo y a precios increíbles.<br></br><br></br>

                Descuentos hasta el 50% en toda la tienda:<br></br><br></br>

                Moda de Verano: Prepárate para el sol con nuestra colección de vestidos, camisetas y shorts a precios irresistibles.<br></br><br></br>
                Accesorios: Completa tu look con bolsos, sombreros y gafas de sol con descuentos especiales.<br></br><br></br>
                Ropa Casual: Encuentra tus prendas favoritas para el día a día con rebajas que no puedes dejar pasar.<br></br><br></br>
                Calzado: Desde sandalias hasta zapatillas, tenemos el calzado perfecto para cada ocasión con grandes descuentos.<br></br><br></br>
                ¡Apurate, las promociones son por tiempo limitado!<br></br><br></br>

                ¡Te esperamos en Estilo Urbano!</p>
            <button className="boton">Lo quiero!!</button>
          </div>
        </div>
      <Pie />
    </div>
  )
}

export default Promociones;
