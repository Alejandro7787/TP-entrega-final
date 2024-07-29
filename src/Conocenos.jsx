import React from 'react'
import Encabezado from './Encabezado'
import Pie from './Pie';
import Nosotros from './img/Nosotros.jpg';

function Conocenos() {
  return (
    <div>
      <Encabezado/>
      <div className='conocenos'>
        <img src={Nosotros} alt='Nosotros'/>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum architecto dolorum quas aliquam voluptas inventore reiciendis exercitationem quia quam, amet blanditiis optio cumque impedit atque nobis obcaecati. Ipsam, hic iure?</p>
            <div className="map">
              <iframe
                src="https://dipika.carto.com/builder/4689b5db-23d8-4eb0-9712-91aa03e7a0d1/embed?state=%7B%22map%22%3A%7B%22ne%22%3A%5B-47.5172006978394%2C-151.17187500000003%5D%2C%22sw%22%3A%5B73.07384351277217%2C173.67187500000003%5D%2C%22center%22%3A%5B26.509904531413927%2C11.25%5D%2C%22zoom%22%3A3%7D%7D"
                width="300"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                >Mapa</iframe>
            </div>
          <section className="contenedor-section">
            <h1>Formulario de contacto</h1>
            <div className="form-contenedor">
              <h2 className="titulo-form">Conectate con nosotros</h2>
              <form action="https://formspree.io/f/mleqznzl" method="post" className="form">
                <input className="box item1" type="text" name="nombres" placeholder="Apellido y Nombre" autoComplete="off"/>
                <select name="ciudad" className="box item2">
                  <option value="">Ciudad</option>
                  <option value="San Isidro">San Isidro</option>
                  <option value="Capital">Capital</option>
                </select>
                <input className="box item3" type="tel" name="telefono" placeholder="Número de teléfono" autoComplete="off"/>
                <select className="box item4" name="provincias">
                  <option value="">Provincia</option>
                  <option value="Catamarca">Catamarca</option>
                  <option value="Cordoba">Cordoba</option>
                  <option value="Buenos Aires">Buenos Aires</option>
                </select>
                <input className="box item5" type="email" name="email" placeholder="Correo electronico" autoComplete="off"/>
                <textarea className="box item6" name="mensaje" cols="30" rows="5"></textarea>
                <input className="submit" type="submit" name="enviar" value="Enviar"/>
              </form>
            </div>
          </section>
      </div>
      <Pie />
    </div>
  );
}

export default Conocenos;
