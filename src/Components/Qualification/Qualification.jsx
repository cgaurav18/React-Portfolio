import React from 'react'
import './Qualification.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import j1 from '../../img/j1.png'
import j2 from '../../img/j2.png'
import j3 from '../../img/j3.png'
import {Pagination} from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import {motion} from 'framer-motion'
const Qualification = () => {
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
    const edu =[
        {
        img: j3,
        degree: "Bachelors in Technology (Computer)",
        place: "R.C. Patel Institute of Technology, Shirpur",
        date: "2020-2024"

        },

        {
            img: j2,
            degree: "Intermediate",
            place: "R.C. Patel Junior College, Shirpur",
            date: "2018-2020"
    
            },

            {
                img: j1,
                degree: "Matriculation",
                place: "R.C. Patel Seconday School, Shirpur",
                date: "2013-2018"
        
                }

    ]
  return (
    <div className='t-wrapper' id='Quali'>
        <div className='t-heading' id='testimonial' style={{alignSelf:'center',textAlign:'center'}}>
            <span className='qua' style={{color:darkMode?"white":""}}>Qualification</span><br/>
            <span className='edu'>My Education Journey</span>
            <div className='blur t-blur1' style={{background: "var(--purple)"}}></div>
            
            
        </div>
        
        <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable:true}}
        >
                {edu.map((key,index)=>{
                    return(
                        <SwiperSlide key={index}>
                        <div className='testimonial'>
                            <img src={key.img} alt=''></img>
                            <span>{key.degree}</span><br/>
                            <span>{key.place}</span><br/>
                            <span>{key.date}</span>
                        </div>
                        </SwiperSlide>
                    );
                })}
        </Swiper>

   
    </div>
  )
}

export default Qualification