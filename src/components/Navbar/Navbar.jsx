import React, { useEffect, useState } from 'react';
import "./navbar.scss"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
function Navbar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);
    const [open, setOpen] = useState(false);


    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.addEventListener('scroll', onScroll);
    }, []);

    function handleView(seccion) {
        document.getElementById(seccion).scrollIntoView()
        setOpen(false)
    }
    return (
        <div className={`n-component ${scrolled ? "scrolled" : ""}`}>
            <div className="n-left">
                <div className="n-name">Juan</div>
                <span>Logo</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul className='links'>
                        <li onClick={() => handleView('seccion1')}>Home</li>
                        <li onClick={() => handleView('seccion2')}>About</li>
                        <li onClick={() => handleView('seccion3')}>Proyects</li>

                    </ul>
                    <button className='button n-button' onClick={() => handleView('seccion4')}>Contact me</button>

                </div>

            </div>
            <div className="toggle_btn" onClick={()=> setOpen(open ? false : true)}>
                { open ? <CloseIcon/> : <MenuIcon /> }
            </div>
            <div className={`dropdown_menu ${open && "open"}`}>
                <li onClick={() => handleView('seccion1')}>Home</li>
                <li onClick={() => handleView('seccion2')}>About</li>
                <li onClick={() => handleView('seccion3')}>Proyects</li>
                <li><button className='button n-button' onClick={() => handleView('seccion4')}>Contact me</button></li>
            </div>
        </div>
    )
}

export default Navbar