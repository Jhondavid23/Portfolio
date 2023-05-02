import React from 'react'
import { proyects } from './../../utils/proyects'
import ProyectCard from './ProyectCard'
import './proyects.scss'
function Proyects() {
    return (
        <div className='proyects' id='seccion3'>
            <div className='p-info'>
                <h1>Proyects</h1>
                <p>These are some of the projects I have developed throughout my professional career, in which you can see an increase in complexity and the quality of the web solution developed. You can obtain more information about the projects by clicking on the box of their image.</p>
            </div>
            <div className="p-box" >
                {proyects && proyects.map((proyect, i) => <div key={i}> <ProyectCard proyect={proyect} /> </div>)}
            </div>
            

        </div>
    )
}

export default Proyects