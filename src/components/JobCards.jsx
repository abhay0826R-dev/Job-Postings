import React from 'react'
import Card from './Card'
import appleLogo from '../assets/appleLogo.jpeg'
import googleLogo from '../assets/googleLogo.jpeg'
import instagramLogo from '../assets/InstagramLogo.jpeg'
import pinterestLogo from '../assets/PinterestLogo.jpeg'
import spotifyLogo from '../assets/SpotifyLogo.png'
import telegramLogo from '../assets/TelegramLogo.jpeg'

// Card parameter -> logo (img), CompanyName (string), postTime (string),
// title (string), tags (arr), salary (string), location (string)

const JobCards = () => {
  return (
    <div className='parent'>
        <Card logo={appleLogo} companyName="Apple" postTime="5 days ago"
            title="Sr. Software Engineer" salary="120$/hr" location="India, Bengaluru"
            tags = {["Part-Time", "Senior Level", "5 Days a week"]}/>

        <Card logo={googleLogo} companyName="Google" postTime="3 days ago"
            title="Jr. Data Analyst" salary="15$/hr" location="India, Pune"
            tags = {["Part-Time", "Senior Level", "5 Days a week"]}/>

        <Card logo={instagramLogo} companyName="Instagram" postTime="1 week ago"
            title="Jr. Software Developer" salary="120$/hr" location="India, Bengaluru"
            tags = {["Part-Time", "Senior Level", "5 Days a week"]}/>

        <Card logo={appleLogo} companyName="Apple" postTime="5 days ago"
            title="Sr. Software Engineer" salary="120$/hr" location="India, Bengaluru"
            tags = {["Part-Time", "Senior Level", "5 Days a week"]}/>

        <Card logo={appleLogo} companyName="Apple" postTime="5 days ago"
            title="Sr. Software Engineer" salary="120$/hr" location="India, Bengaluru"
            tags = {["Part-Time", "Senior Level", "5 Days a week"]}/>

        <Card logo={appleLogo} companyName="Apple" postTime="5 days ago"
            title="Sr. Software Engineer" salary="120$/hr" location="India, Bengaluru"
            tags = {["Part-Time", "Senior Level", "5 Days a week"]}/>

    </div>
  )
}

export default JobCards
