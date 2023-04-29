import React from 'react'
import CardTecnologies from './CardTecnologies'
import { useState } from 'react';
import { useEffect } from 'react';
import './CardContainer.scss'
import { useRef } from 'react';
function CardContainer() {
    // const images = ['logojs.png', 'logonode.png', 'logoexpress.png', 'logoreact.png', 'logoredux.png', 'logosequelize.png', 'logopostgre.png'];
    const data = [
        { title: 'JavaScript', description: 'Programming language', image : 'logojs.png' },
        { title: 'Node js', description: 'Cross-platform runtime environment', image : 'logonode.png' },
        { title: 'Express js', description: 'Web app infrastructure', image : "logoexpress.png" },
        { title: 'React js', description: 'Library for interfaces', image : 'logoreact.png'},
        { title: 'Redux', description: 'Library', image : 'logoredux.png' },
        { title: 'Sequelize', description: 'ORM', image : 'logosequelize.png' },
        { title: 'Postgre SQL', description: 'Relational database', image : 'logopostgre.png' }

    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [intervalTime, setIntervalTime] = useState(2000);



    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(currentIndex => (currentIndex + 1) % data.length);
        }, intervalTime)
        return () => clearInterval(interval);
    }, [intervalTime, data.length])

    const handleNext = () => {
        setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1);
    };

    const handlePrev = () => {
        setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1);
    };
    return (
        <div className='CardContainer'>
            <div className='c-title'>
                <h1>Tecnologies</h1>
            </div>
            <div className="c-container">
                <button onClick={handlePrev} className='prev'>{"<"}</button>
                <CardTecnologies data={data[currentIndex]} />
                <button onClick={handleNext}>{">"}</button>

            </div>
        </div>
    )



    

}

export default CardContainer