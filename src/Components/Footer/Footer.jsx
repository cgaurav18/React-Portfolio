import React from 'react'
import './Footer.css'
import Wave from "../../img/wave.png"
import Insta from "@iconscout/react-unicons/icons/uil-instagram"
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin"
import Github from "@iconscout/react-unicons/icons/uil-github"
const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} style={{width:'100%'}}></img>
        <div className='f-content'>
            <span>chvngaurav@gmail.com</span>
            <div className='f-icons'>
            <a href='https://instagram.com/cgaurav18?igshid=MzNlNGNkZWQ4Mg=='><Insta color="white" size="3rem"/></a>
                <a href='https://www.linkedin.com/in/gaurav-chavan-15127b216'><LinkedIn color="white" size="3rem"/></a>
                <a href='https://github.com/cgaurav18'><Github color="white" size="3rem"/></a>

            </div>
        </div>
    
    </div>
  )
}

export default Footer