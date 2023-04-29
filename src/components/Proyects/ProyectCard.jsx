import React from 'react'
import './proyectCard.scss'
function ProyectCard({proyect}) {
    const imagen = proyect.images[0];
   
  return (
    <div className='card'>
        <img src={imagen} alt="image of proyect" className='imageCard'/>
    </div>
  )
}

export default ProyectCard