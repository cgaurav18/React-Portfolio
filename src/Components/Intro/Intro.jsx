import React, { useContext } from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Insta from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import me from '../../img/per.jpg'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesemo from '../../img/glassesimoji.png'
import Floatingdiv from '../Floatingdiv/Floatingdiv'
import { themeContext } from '../../Context'
import {motion} from 'framer-motion'
import { Link } from 'react-scroll'
const Intro = () => {
  const transition = {duration:2, type:"spring"}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='intro'>
        <div className='i-left'>
            <div className='i-name'>
                <span style={{color:darkMode?"white":""}}>Hey! I Am </span>
                <span>Gaurav Chavan</span>
                <span className='desc'>Full Stack Developer with huge enthusiasm in web designing and development producing the high quality work!</span>

            </div>
            <Link to='Contact' smooth={true}> <button className='button i-button'>Hire Me</button></Link>
           
            <div className='i-icons'>
                <a href='https://github.com/cgaurav18'><img src={Github} alt=''/></a>
                <a href='https://www.linkedin.com/in/gaurav-chavan-15127b216'><img src={LinkedIn} alt=''/></a>
                <a href='https://instagram.com/cgaurav18?igshid=MzNlNGNkZWQ4Mg=='><img src={Insta} alt=''/></a>
            </div>
        </div>

        <div className='i-right'>
    <img className='v1'  src={Vector1} alt=''/>
    <img className="v2" src={Vector2} alt=''/>
    <img className="me" src={me} alt=''/>
    <motion.div 
    initial={{x:'10rem'}}
    animate={{x:'22rem'}}
    transition={transition}
    className='floating-div'
    >
    
      <Floatingdiv image={Crown} txt1={"Web"} txt2={"Developer"}/>
    </motion.div>
    <motion.div 
    initial={{x:'-2rem',top:'21rem'}}
    animate={{x:'0rem'}}
    transition={transition}
    className='floating-div'
    >
      <Floatingdiv image={thumbup} txt1="Adaptable" txt2="Learner"/>
    </motion.div>
    <div className='blur' style={{background:"rgb(238 210 255)"}}>

    </div>
    <div className='blur' style={{background: '#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'9rem'}}></div>
        </div>
    </div>
  )
}

export default Intro