import React from 'react'
import { useState } from 'react';
import './contact.scss'
import sendEmail from './sendEmail';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const form = useRef();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = { name, subject, message };

        emailjs.sendForm('service_93kz5nq', 'template_g02qhy9', form.current, '58dds6zJWhzPpGzrP')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        console.log({ name, subject, message }); // Maneja la respuesta del servidor
        setName('');
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
                <form ref={form} onSubmit={handleSubmit} className='c-form'>
                    <label>
                        <span>Name:</span>
                        <input
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            name='from_name'
                        />
                    </label>
                    <label>
                        Asunto:
                        <input
                            type="text"
                            value={subject}
                            onChange={(event) => setSubject(event.target.value)}
                            name='from_email'
                        />
                    </label>
                    <label>
                        Mensaje:
                        <textarea
                            value={message}
                            name='message'
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