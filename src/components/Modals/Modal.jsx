import React from 'react'
import './modal.scss'
function Modal({children, isOpen, closeModal}) {
    const handleModalContainerClick = (e)=> e.stopPropagation();
    return (
        <div className={`modal ${isOpen ? "is-open" : ""}`} onClick={closeModal}>
            <div className="modal-container" onClick={handleModalContainerClick}>
                <button className="modal-close" onClick={closeModal}>X</button>
                
                {children}
            </div>
        </div>
    )
}

export default Modal