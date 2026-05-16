import React from 'react'
import SaveIcon from "../assets/saveIcon.svg"
import locationIcon from "../assets/locationIcon.svg"
import defaultLogo from "../assets/defaultCompanyIcon.svg"

const Card = ({ logo=defaultLogo, companyName="Not Provided", postTime="Not Provided", title="Not Provided", salary=NaN, location="Not Provided", tags=[], url }) => {
  return (
      <article className='JobCard overflow-hidden'>

        <div className='card-top'>
            <img src={logo} className='logo' />
            <button className='saveJobButton'>
                Save
                <img src={SaveIcon} className='savelogo' />
            </button>
        </div>

        <div className='card-middle'>
            <div className="Job-Company-Time">
                <span className='Company-Name'>{companyName}</span>
                <span className='Job-Post-Time'>{postTime}</span>
            </div>
            <h2 className='Job-Title'>{title}</h2>
            <div className='Job-Tags'>
                {tags.map((tag, i) => (
                    <span key={i} className='Job-Tag'>{tag}</span>
                ))}
            </div>
        </div>

        <div className='card-bottom'>
            <div id="Salary-Location-Div">
                <h5 className='Job-Salary'>{salary}</h5>
                <div className='Job-Location'>
                    <img src={locationIcon} />
                    <span className='Job-Location-text'>{location}</span>
                </div>
            </div>
            <a href={url} target="_blank">
                <button className='Job-Apply-Button'>Apply now</button>
            </a>
            
        </div>

      </article>
  )
}

export default Card
