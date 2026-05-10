import React from 'react'
import InstaLogo from "../assets/InstagramLogo.jpeg"
import saveIcon from "../assets/SaveJobIcon.jpeg"

const Card = () => {
  return (
    <div>
      <div className='card'>

        <div className='card-top'>
            <img src={InstaLogo} className='logo'></img>
            <button className='saveJobButton'>
                Save
                <img src={saveIcon} className='savelogo'></img>
            </button>
        </div>

        <div className='card-middle'>
            <h2 className='CompanyName'>Ammazon</h2>
            <span className='JobPostTime'>5 days ago</span>
            <h1>Senior UI/UX Designer</h1>
            <span className='JobTags'>Part-Time</span>
            <span className='JobTags'>Senior Level</span>
        </div>

        <div className='card-bottom'>
            <hr></hr>
            <span className='JobSalary'>$120/hr</span>
            <button className='JobApplyButton'>Apply now</button>
        </div>

      </div>
    </div>
  )
}

export default Card
