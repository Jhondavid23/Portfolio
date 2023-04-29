import React, { useEffect, useState } from 'react';
import "./navbar.scss"

function Navbar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(()=> {
        const onScroll = () => {
            if(window.scrollY > 50){
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return ()=> window.addEventListener('scroll', onScroll);
    }, []);
  return (
    <div className={`n-component ${scrolled ? "scrolled" : ""}`}>
        <div className="n-left">
            <div className="n-name">Juan</div>
            <span>Logo</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Proyects</li>
                
                </ul>
                <button className='button n-button'>Contact me</button>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar