import React from 'react'
import './Services.css'
import java from '../../img/java.png'
import c from '../../img/c.png'
import python from '../../img/python.png'
import react from '../../img/react.png'
import Cards from '../Cards/Cards'
import resume from './resume.pdf'
import mongo from './../../img/mongo.png'
import node from './../../img/node.png'
import ex  from './../../img/ex.png'
import html  from './../../img/html.png'
import spring  from './../../img/spring.png'
import sql from './../../img/sql.png'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import {motion} from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

const Services = () => {
    const animation = useAnimation();
    const {ref,inView} = useInView({threshold:1});
    const isMobile = useMediaQuery({maxWidth:600});
    useEffect(()=>{
        console.log("Use effect hook",inView);
        if(inView)
        {
            animation.start({
                x:0,
                transition:{type:'spring',duration:2,bounce:0.3}
            });


        }
        if(!inView)
        {
            animation.start({
                x:'10rem'
            })
        }
    },[inView]);

    
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='Services'>
        <div className='awesome'>
            <span style={{color:darkMode?"white":""}}>My </span>
            <span>Skills</span>
            <span className='ski'>
                I am dedicated to build innovative solutions on the basis of my skillset<br/> to bring fruitful results in the tech world.
                
                With the solid understanding of these skills,<br/> I commited to do best and stay updated with new technolgies!
            </span>
            <a href={resume} download>
            <button className='button s-button'>Download CV</button></a>
            <div className='blur s-burl' style={{background: "#ABF1FF94"}}> </div>
 
        </div>

        <motion.div className='cards' ref={ref} animate={isMobile?null:animation}>
           
            <div style={{left:'4rem'}} className='java'> 
                <Cards emoji={java} heading={'Java'} detail ={"Knowledge of basics and advanced java. Familiar with OOPS and data structures in java."}></Cards>
            </div>
            
            <div style={{left:'22rem'}} className='c'>
            <Cards emoji={c} heading={'Programming'} detail ={"Strong basic fundamentals of C language."}></Cards>
            </div>
            
        

      
            

            

           

            
        
    <div   style={{position: 'relative', top: '18rem'}} >
        
        
        <div  style={{left: '10rem',position: 'relative',left: '-31rem'}} className='mongo'>
        <Cards emoji={mongo} heading={"Mongo DB"} detail={"Capabale to create scalable databases in MongoDB."}></Cards>
        </div>
   

        <div style={{position:'relative',left:'-13rem'}} className='ex'>
        <Cards emoji={ex} heading={"Express.js"} detail={"Proficient in building RESTful APIs using Express.js."}></Cards>
        </div>

        
        <div style={{position:'relative',left:'4rem'}} className='react'>
            <Cards emoji={react} heading={'React'} detail={"Proficient in creating interactive web pages using React."}></Cards>
        </div>

        <div style={{position:'relative',left:'22rem'}} className='node'>
            <Cards emoji={node} heading={'Node.js'} detail={"Knowledge of developing server side applications using Node.js."}></Cards>
        </div>
        
    </div>
        
        
        
        <div style={{position: 'relative', top: '18rem'}}>
             <div style={{position:'relative', top:'18rem',left:'-31rem'}} className='py'>
            <Cards emoji={python} heading={'Python'} detail={"Decent in python. Using it for data analysis and Machine learning."}></Cards>
            </div>

            <div style={{position:'relative',top:'18rem',left:'-13rem'}} className='spri'>
            <Cards emoji={spring} heading={'Spring'} detail={"Decent knowledge of spring to build robust web applications."}></Cards>
            </div>

             <div style={{position:'relative',top:'18rem',left:'4rem'}} className='ht'>
            <Cards emoji={html} heading={'HTML/CSS'} detail={"Handy to use HTML and CSS for creating responsive web pages."}></Cards>
            </div>

            <div style={{position:'relative',top:'18rem',left:'22rem'}} className='mys'>
            <Cards emoji={sql} heading={'MySQL'} detail={"Proficient in using MySQL for handling and creating databases."}></Cards>
            </div>  
        </div>
        </motion.div>
        
        
        
       
        

       
        <div className='blur s-blur2' style={{background:"var(--purple)"}}></div>
        
    </div>
  )
}

export default Services