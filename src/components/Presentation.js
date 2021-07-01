import React from 'react'
import './Presentation.css'
import p from '../img/presentation..png'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

function Presentation() {

   /*  const handlerHome = () => {
        return <NavLink exact to="/"></NavLink>
    } */
    return (
        <div className='background'>
            <Fade cascade={true}> 
            <div className='p_container'>
          {/*   <img 
                className='presentation_image'
                src={p}
                alt='Hello there!'
                /> */}
                <h2 className='welcome'> WELCOME TO </h2>
                <img className='logo_p' src={logo} alt='SOFLIX' />
                <button className='button_home'><Link to='/home' className='link_text'>  HOME  </Link></button>
             </div>
            </Fade>
        </div>
    )
}

export default Presentation;
