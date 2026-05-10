import React from 'react'
import InstaLogo from "../assets/InstagramLogo.jpeg"

const Card = () => {
  return (
    <div>
      <div className='card'>
        <img src={InstaLogo} className='logo'></img>
      </div>
    </div>
  )
}

export default Card
