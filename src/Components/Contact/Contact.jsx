import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'
import {useRef, useState} from 'react'
import { useContext } from 'react'
import { themeContext } from '../../Context'
const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();
    const [done,setDown] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_piyn868', 'template_u0mvprc', form.current, 'sRnpLk-N8Iq5pCu8V')
      .then((result) => {
          console.log(result.text);
          setDown(true)
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    
    <div className='contact-form' id='Contact'>
        <div className='w-left'>
            <div className='awesome'>
                <span style={{color:darkMode?"white":""}}>Get in touch</span>
                <span>Contact me</span>
                <div className='blur s-blur1' style={{background:"#ABF1FF94"}}>

                </div>

            </div>

        </div>

        <div className='c-right'>
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='user_name' className='user'  required placeholder='Name'/>
                <input type='email' name='user_email' className='user'  required placeholder='Email'/>
                <textarea  name='message' className='user' placeholder='Message' required/>
                <input type='submit' value="SEND"   className='button'/>
                <span>{done && "Thanks for contacting. I'll reach to you soon!"}</span>
                <div className='blur c-blur1' style={{background:"var(--purple)"}}></div>

            </form>

        </div>

    </div>
  )
}

export default Contact