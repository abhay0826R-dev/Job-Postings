import React from 'react'
import Card from './Card'
import appleLogo from '../assets/appleLogo.jpeg'

// Card parameter -> logo (img), CompanyName (string), postTime (string),
// title (string), tags (arr), salary (string), location (string)

const JobCards = () => {
  return (
    <div className='parent'>
        <Card logo={appleLogo} companyName="Apple" postTime="5 days ago"
            title="Sr. Software Engineer" salary="120$/hr" location="India, Bengaluru"
            tags = {["Part-Time", "Senior Level", "5 Days a week"]}/>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default JobCards
