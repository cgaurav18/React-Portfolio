import React from 'react'
import './projects.css'
import candidate from './../../img/candidate.jpg'
import doc from './../../img/doc.png'
import inv from './../../img/inv.png'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import Cards from '../Cards/Cards'
import Procards from './Procards'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import {motion} from 'framer-motion'
const Projects = () => {
  const isMobile = useMediaQuery({maxWidth:600});
  const animation = useAnimation();
    const {ref,inView} = useInView();

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
    <div className='projects' id='Projects'>
      
        <span className='my' style={{color:darkMode?"white":""}}>My</span>
        <span className='pro'>Projects</span>
        
        <motion.div  ref={ref} animate={isMobile?null:animation} style={{height:'64vh'}}>
        
        <div style={{position: 'relative',left: '-33rem'}} className='p1'>
            <a href='https://github.com/cgaurav18/Candidate_Assesment/tree/master' style={{color:darkMode?'white':'black'}}>
           
            <Procards emoji={candidate} heading={'Candidate Assessment'} detail={'Candidate assessment is java web application used to take assesment of candidates based on OCEAN model. It is using java servlets for server side activities, JDBC for storing and handling database and HTML/CSS for web design. It is working on three panels as Admin, HR and Candidates each of them having their own tasks.'}
            ></Procards></a>
        </div>
        

        <div style={{position:'relative',left:'-9rem'}} className='p2'>
        <a href='https://github.com/cgaurav18/Inventory_Management/tree/master' style={{color:darkMode?'white':'black'}}>
          <Procards emoji={inv} heading={'Inventory Management'} detail={"Web based solution that solves the complex task of tracking and controlling inventory. This comprehensive system enables real-time monitoring of stock levels, and optimized inventory management. It's features makes it an invaluable tool for business seeking efficient inventory management."}></Procards></a>
        </div>

        <div style={{position:'relative',left:'15rem'}} className='p3'>
          <a href='https://github.com/cgaurav18/Codeclause-Payment_Gateway_Integration/tree/master' style={{color:darkMode?'white':'black'}}>
          <Procards emoji={doc} heading={"Payment Gateway Integration"} detail={"The primary objective of this project was to integrate a reliable and efficient payment gateway into diverse e-commerce platforms, thereby facilitating hassle-free payment processing. The payment gateway integration solution offers a robust and secure channel for monetary transactions."}></Procards></a>
        </div>
        
        </motion.div>
       
        
        
        
    </div>
  )
}

export default Projects