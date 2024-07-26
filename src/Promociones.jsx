import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import remera from './img/bosque.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Encabezado from './Encabezado';
import Pie from './Pie';
import './Promociones.css'


function Promociones() {
  return (
    <div>
      <Encabezado />
    <div >
    <div className='grid-carrusel'>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block"
          src={remera}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className='texto-carrusel'>First slide label</h5>
          <p className='texto-carrusel'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={remera}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className='texto-carrusel'>Second slide label</h5>
          <p className='texto-carrusel'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
       <Carousel.Item>
          <img
            className="d-block"
            src={remera}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 className='texto-carrusel'>Third slide label</h5>
            <p className='texto-carrusel'>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item >
      </Carousel>

      <div className="flex-productos-cr">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta earum iste, alias eaque temporibus placeat saepe, dolores ipsam libero voluptates reiciendis dolorem quisquam repudiandae sint animi. Ab voluptas officiis magnam.</p>
        <button className="boton">Lo quiero!!</button>
      </div>
      </div>
    </div>
    <Pie />
    </div>
  )
}

export default Promociones;
