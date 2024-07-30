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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum iste, alias eaque temporibus placeat saepe, dolores ipsam libero voluptates reiciendis dolorem quisquam repudiandae sint animi. Ab voluptas officiis magnam.</p>
            <button className="boton">Lo quiero!!</button>
          </div>
        </div>
      <Pie />
    </div>
  )
}

export default Promociones;
