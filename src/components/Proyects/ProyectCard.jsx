import React, { useState } from 'react'
import './proyectCard.scss'
import Modal from '../Modals/Modal';
import { useModal } from './../../hooks/useModal'

function ProyectCard({ proyect }) {
  const imagen = proyect.images[0];
  const { isOpen, openModal, closeModal } = useModal(false);
  const [showText, setShowText] = useState(false);

  const handleMauseEnter = () => {
    setShowText(true);
  }

  const handleMauseLeave = () => {
    setShowText(false)
  }

  return (
    <div className='container'>
      <div className='card' onClick={openModal} onMouseEnter={handleMauseEnter}
        onMouseLeave={handleMauseLeave}>
        <img src={imagen} alt="image of proyect" className='imageCard' />
        <div
          className={`card-text ${showText ? "show" : ""}`}

        >
          <h1>{proyect.name}</h1>
          <p>{proyect.year}</p>
          <p>Click to open</p>
        </div>
      </div>
      <div>
        <Modal isOpen={isOpen} closeModal={closeModal} >
          <h3>Modal 1</h3>
          <p>This is a modal.</p>
        </Modal>
      </div>
    </div>
  )
}

export default ProyectCard