import React from 'react'
import './procards.css'
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Procards = ({emoji,heading,detail}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='procard' style={{width:'16rem'}}>
        <img src={emoji} alt=''/>
        <span>{heading}</span>
        <span>{detail}</span>
    </div>
  )
}

export default Procards