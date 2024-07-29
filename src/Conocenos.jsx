import React from 'react'
import Encabezado from './Encabezado'
import Pie from './Pie';
import Nosotros from './img/Nosotros.jpg';

function Conocenos() {
  return (
    <div>
      <Encabezado/>
        <div className='grid-nosotros'>
          <img src={Nosotros} alt='Nosotros'/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum architecto dolorum quas aliquam voluptas inventore reiciendis exercitationem quia quam, amet blanditiis optio cumque impedit atque nobis obcaecati. Ipsam, hic iure?</p>
        </div>
      <Pie />
    </div>
  )
}

export default Conocenos
