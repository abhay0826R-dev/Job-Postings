import React from 'react'
import saveIcon from "../assets/SaveJobIcon.jpeg"
import locationIcon from "../assets/locationIcon.jpeg"
import defaultLogo from "../assets/defaultLogo.jpeg"

const Card = ({ logo=defaultLogo, companyName="Not Provided", postTime="Not Provided", title="Not Provided", salary=NaN, location="Not Provided", tags=[] }) => {
  return (
      <div className='card'>

        <div className='card-top'>
            <img src={logo} className='logo' />
            <button className='saveJobButton'>
                Save
                <img src={saveIcon} className='savelogo' />
            </button>
        </div>

        <div className='card-middle'>
            <div className="Job-Company-Time">
                <span className='Company-Name'>{companyName}</span>
                <span className='Job-Post-Time'>{postTime}</span>
            </div>
            <span className='Job-Title'>{title}</span>
            <div className='Job-Tags'>
                {tags.map((tag, i) => (
                    <span key={i} className='Job-Tag'>{tag}</span>
                ))}
            </div>
        </div>

        <div className='card-bottom'>
            <div id="Salary-Location-Div">
                <span className='Job-Salary'>{salary}</span>
                <div className='Job-Location'>
                    <img src={locationIcon} />
                    <span className='Job-Location-text'>{location}</span>
                </div>
            </div>
            <button className='Job-Apply-Button'>Apply now</button>
            
        </div>

      </div>
  )
}

export default Card
