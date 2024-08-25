import React from 'react'
import logo from '../assets/logo.png'

function Logo({width ='100px'}) {
  return (
    <div>
      <img  className='w-1/6  h-15'  src={logo}/>
    </div>
  )
}

export default Logo