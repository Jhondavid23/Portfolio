import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from './../../../public/Images/profile-pic (12).png'
import './home.scss'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import WebIcon from '@mui/icons-material/Web';
import TerminalIcon from '@mui/icons-material/Terminal';
import CodeIcon from '@mui/icons-material/Code';

function Home() {
    return (
        <div className='home' id='seccion1'>
            <div className='h-left'>
                <div className="h-name">
                    <span>Hy! I Am</span>
                    <span>Juan David</span>
                    <span>FullStack developer whit experience in designing and developing high quality web solutions. </span>
                </div>
                <button className='button h-button'>About me</button>
                <div className="h-icons">
                    <a href="https://github.com/Jhondavid23" target="_blank">
                        <GitHubIcon className='github' />
                    </a>
                    <a href="https://www.linkedin.com/in/juan-david-diaz-orozco-8b850a1a7/" target="_blank">
                        <LinkedInIcon className='linkedin' />
                    </a>

                </div>
            </div>
            <div className="h-right">
                <CodeIcon className='codeIcon'/>
                <div className='floatingDiv1'>
                    <FloatingDiv Image={WebIcon} text1='Frontend' text2="Developer" />
                </div>
                <div className='floatingDiv2'>
                    <FloatingDiv Image={TerminalIcon} text1='Backend' text2="Developer" />
                </div>
                <div className='h-image'>
                    <div className='h-picture'>
                        <img src={Image} alt="perfil" />
                        <div className='fondo'></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home