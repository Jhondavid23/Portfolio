import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './proyectDetail.scss';

function ProyectDetail({proyect}) {
  const [slideIndex, setSlideIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setSlideIndex(next),
  };

  return (
    <article className='proyectDetailContainer'>
      <section className='p-one'>
        <h1>{proyect.name}</h1>
        {proyect.images && (
          <Slider {...settings} className='carrusel'>
            {proyect.images.map((image) => (
              <img src={image} alt="Project image" key={image} className='img'/>
            ))}
          </Slider>
        )}
      </section>
      <section className='p-two'>
        <h3>Description</h3>
        <p>{proyect.description}</p>
      </section>
      <section className='p-three'>
        <h3>Tecnologies:</h3>
        <p>{proyect.tecnologies}</p>
        <h3>Year</h3>
        <p>{proyect.year}</p>
      </section>
    </article>
  );
}

export default ProyectDetail;