import React from 'react'
import './Footer.css'
import github from '../img/github.png'
import linkedin from '../img/linkedin.png'
import { Fade } from 'react-awesome-reveal'

function Footer() {
    return (
        <div className='footer'>
            <Fade left>
        <footer >
               <a href= 'https://github.com/sofiarocchietti'> <img className= 'image1' src= {github} alt= 'github' /> </a>
               <a href= 'https://www.linkedin.com/in/sofiarocchietti/'> <img className= 'image2' src = {linkedin} alt= 'linkedin' /> </a> 
        </footer>
        </Fade>
        </div>
      
    )
}

export default Footer
