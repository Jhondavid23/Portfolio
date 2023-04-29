import './../../../public/Images/png/logojs.png'
import './card.scss'

function CardTecnologies({ data }) {
  return (
    <div className='card'>
      <div className='card-content'>
        <img src={`./../../../public/Images/png/${data.image}`} alt='' />
      </div>
      <div className='card-body'>
        <h2 className='card-title'>{data.title}</h2>
        <p className='card-text'>{data.description}</p>
      </div>
    </div>
  );
}

export default CardTecnologies;