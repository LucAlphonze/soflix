import React from 'react'
import './About.css'
import a from '../img/aboutp_png.png'
import github from '../img/github.png'
import linkedin from '../img/linkedin.png'
import { Fade } from 'react-awesome-reveal'

function About() {
    return (
        <Fade left> 
        <div className= "about_comp">
         <div className="back">
        <h1 className= "hi">HI THERE!</h1>
        <p>I'm Sofia, a 20 years old Full Stack Developer. I'm passionate about Front-End, but I also like Back-End.
My current technologies are HTML, CSS, JavaScript, ReactJS, Redux, NodeJS, ExpressJS, Sequelize and Postgres.
I'm a musician and singer and I adore putting all my creative ideas on my projects.</p>
        <a href= 'https://github.com/sofiarocchietti'> <img className= 'image_g' src= {github} alt= 'github' /> </a>
        <a href= 'https://www.linkedin.com/in/sofiarocchietti/'> <img className= 'image_l' src = {linkedin} alt= 'linkedin' /> </a> 
      </div>
        </div>
        </Fade>
    )
}

export default About
