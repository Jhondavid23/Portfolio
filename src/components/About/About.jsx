import React from 'react'
import resume from './../../utils/resume.pdf';
import './about.scss'
function About() {
    function donwloadPdf() {
        const link = document.createElement('a');
        link.href = resume;
        link.download = "Resume-Juan-David.Diaz.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <div className='about' id='seccion2'>
            <div className="left">
                <div>
                    My resume
                </div>
                <button onClick={donwloadPdf} className='button a-button'>Donwload</button>
            </div>
            <div className="right">
                <div className='a-description'>
                    <h1 className='a-title'>About me</h1>
                    <p className='a-resume'>Hello! My name is Juan David Diaz Orozco.
                        <br />
                        <br />
                        Who am I?
                        <br />
                        
                        I am a Fullstack programmer with a focus on Backend development.
                        <br />
                        <br />
                        Programming has interested me since I was a child and was one of the motivations for starting my professional studies.
                        <br />
                        <br />
                        What do I do? 🤔<br />
                        Currently, I work on projects that allow me to advance in my programming skills, and I am also working on improving my soft skills.
                        <br /><br />
                        Where am I heading? 🔭 <br />
                        I am passionate about the world of programming, and I enjoy being able to create solutions through code. I am willing to face new challenges that will take me one step further in my professional career.</p>
                </div>
            </div>
        </div>
    )
}

export default About