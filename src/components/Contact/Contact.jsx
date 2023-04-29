import React from 'react'
import { useState } from 'react';
import './contact.scss'
function Contact() {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = { name, subject, message };
        const response = await fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        console.log(data); // Maneja la respuesta del servidor
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };
    return (
        <div className='contact'>
            <div className="c-right">
                <h1>Contact info</h1>
                <span>Phone: +57 3003711416</span>
                <span>Email: juandaviddiazorozco@gmail.com</span>
            </div>
            <div className="c-left">
                <form onSubmit={handleSubmit} className='c-form'>
                    <label>
                        <span>Name:</span>
                        <input
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </label>
                    <label>
                        Asunto: 
                        <input
                            type="text"
                            value={subject}
                            onChange={(event) => setSubject(event.target.value)}
                        />
                    </label>
                    <label>
                        Mensaje:
                        <textarea
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                        />
                    </label>
                    <button type="submit" className='button'>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Contact