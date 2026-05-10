import React from 'react'
import InstaLogo from "../assets/InstagramLogo.jpeg"
import saveIcon from "../assets/SaveJobIcon.jpeg"

const Card = () => {
  return (
      <div className='card'>

        <div className='card-top'>
            <img src={InstaLogo} className='logo' />
            <button className='saveJobButton'>
                Save
                <img src={saveIcon} className='savelogo' />
            </button>
        </div>

        <div className='card-middle'>
            <div className="Job-Company-Time">
                <h4 className='Company-Name'>Amazon</h4>
                <span className='Job-Post-Time'>5 days ago</span>
            </div>
            <h3>Senior UI/UX Designer</h3>
            <div className='Job-Tags'>
                <span className='Job-Tag'>Part-Time</span>
                <span className='Job-Tag'>Senior Level</span>
            </div>
        </div>

        <div className='card-bottom'>
            <hr></hr>
            <span className='JobSalary'>$120/hr</span>
            <button className='Job-Apply-Button'>Apply now</button>
        </div>

      </div>
  )
}

export default Card
