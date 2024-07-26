import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import remera from './img/remera verde.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Encabezado from './Encabezado';
import Pie from './Pie';


function Promociones() {
  return (
    <div>
      <Encabezado />
    <div >
      <Carousel className='flex-carrusel' data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block"
          src={remera}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={remera}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
       <Carousel.Item>
          <img
            className="d-block"
            src={remera}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
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
    <Pie />
    </div>
  )
}

export default Promociones;
