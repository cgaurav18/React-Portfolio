import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import {Link} from 'react-scroll'
import Services from '../Services/Services'

const Navbar=()=> {
  return (
    
    <div className='n-wrapper' id='Navbar'>
        <div className='n-left'>
            <div className='n-name'>Gaurav</div>
            <Toggle/>
        </div>
        <div className='n-right'>
            <div className='n-list'>
                <ul style={{listStyle:'none'}}>
                <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                    <li>Home</li>
                </Link>
                <Link spy={true} to='Services' smooth={true} activeClass="activeClass">
                <li>Skills</li>
                </Link>
                <Link spy={true} to='Projects' smooth={true} activeClass="activeClass">
                <li>Projects</li>
                </Link>
                <Link spy={true} to='Quali' smooth={true} activeClass="activeClass">
                <li>Qualification</li>
                </Link>
                    
                    
                    
                </ul>
            </div>
            <Link spy={true} to='Contact' smooth={true} activeClass="activeClass">
            <button className='button n-button' >Contact</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar
