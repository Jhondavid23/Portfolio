import React from 'react'

function ProyectDetail(proyect) {
  return (
    <article>
        <section>
            <h1>{proyect.name}</h1>
            {proyect.images && proyect.images.map((i)=> {
                <img src={i} alt="Image of proyect" />
            })}
        </section>
        <section>

        </section>
    </article>
  )
}

export default ProyectDetail