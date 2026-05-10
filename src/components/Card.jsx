import React from 'react'
import InstaLogo from "../assets/InstagramLogo.jpeg"
import saveIcon from "../assets/SaveJobIcon.jpeg"

const Card = () => {
  return (
    <div>
      <div className='card'>
        <img src={InstaLogo} className='logo'></img>
        <button className='saveJobButton'>
            Save
            <img src={saveIcon} className='savelogo'></img>
        </button>
      </div>
    </div>
  )
}

export default Card
