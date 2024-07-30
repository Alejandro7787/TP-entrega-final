import React from 'react';
import Pie from './Pie';
import Nosotros from './img/Nosotros.jpg';
import './Conocenos.css';

function Conocenos() {
  return (
    <div>
      <div className="conocenos">
        <img className='nosotros' src={Nosotros} alt="Nosotros" />
        <p className='pnosotros'>
        "Estilo Urbano"<br></br><br></br>
          
          Estilo Urbano es una tienda de moda ubicada en el corazón de Buenos Aires, dedicada a ofrecer ropa moderna y vanguardista para hombres y mujeres. Nuestra misión es proporcionar prendas de alta calidad que reflejen las últimas tendencias del estilo urbano.<br></br><br></br>

          Planes Futuros:<br></br>
          Nos proponemos expandirnos a nuevas ciudades en Argentina y abrir tiendas en otros países de América Latina. También planeamos lanzar una línea de ropa sostenible al 100%, reafirmando nuestro compromiso con el medio ambiente.<br></br><br></br>

          Contacto e Información Adicional:<br></br>
          Para más información, puedes visitarnos en:<br></br><br></br>

          Sitio Web: www.estilourbano.com<br></br>
          Instagram: @estilourbano<br></br>
          Facebook: facebook.com/estilourbano
        </p>
        <div className="map">
        <iframe
            title="Mapa interactivo de nuestra ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.7521050545984!2d-58.50821192425622!3d-34.68620547292484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9290900fbb1%3A0x7297158b73f228fb!2sOlavarr%C3%ADa%20763%2C%20B1768AUC%20Villa%20Madero%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1722295373551!5m2!1ses!2sar"
            width="300"
            height="600"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>
        <section className="contenedor-section">
          <div className="form-contenedor">
            <h2 className="titulo-form">Conéctate con nosotros</h2>
            <form action="https://formspree.io/f/mleqznzl" method="post" className="form">
              <input className="box item1" type="text" name="nombres" placeholder="Apellido y Nombre" autoComplete="off" />
              <select name="ciudad" className="box item2">
                <option value="">Zona</option>
                <option value="Zona Oeste">Zona Oeste</option>
                <option value="Zona Sur">Zona Sur</option>
                <option value="Zona Norte">Zona Norte</option>
                <option value="Zona Este">Zona Este</option>
                <option value="Capital">CABA</option>
              </select>
              <input className="box item3" type="tel" name="telefono" placeholder="Número de teléfono" autoComplete="off" />
              <select className="box item4" name="provincias">
                <option value="">Provincia</option>
                <option value="Catamarca">Catamarca</option>
                <option value="Córdoba">Córdoba</option>
                <option value="Buenos Aires">Buenos Aires</option>
              </select>
              <input className="box item5" type="email" name="email" placeholder="Correo electrónico" autoComplete="off" />
              <textarea className="box item6" name="mensaje" cols="30" rows="5"></textarea>
              <input className="submit" type="submit" name="enviar" value="Enviar" />
            </form>
          </div>
        </section>
      </div>
      <Pie />
    </div>
  );
}

export default Conocenos;
