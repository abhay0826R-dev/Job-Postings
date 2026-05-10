import React from 'react'
import Card from './Card'
import appleLogo from '../assets/appleLogo.jpeg'
import googleLogo from '../assets/googleLogo.jpeg'
import instagramLogo from '../assets/InstagramLogo.jpeg'
import pinterestLogo from '../assets/PinterestLogo.jpeg'
import spotifyLogo from '../assets/SpotifyLogo.png'
import telegramLogo from '../assets/TelegramLogo.jpeg'

const JobCards = () => {
  return (
    <div className='parent'>
      <Card logo={appleLogo} companyName="Apple" postTime="5 days ago"
        title="Sr. Software Engineer" salary="$140k/yr" location="India, Bengaluru"
        tags={["Full-Time", "Senior Level"]}/>

      <Card logo={googleLogo} companyName="Google" postTime="3 days ago"
        title="Data Analyst" salary="$90k/yr" location="India, Hyderabad"
        tags={["Full-Time", "Flexible Schedule"]}/>

      <Card logo={instagramLogo} companyName="Instagram" postTime="1 week ago"
        title="UI/UX Designer" salary="$85/hr" location="India, Mumbai"
        tags={["Contract", "Remote"]}/>

      <Card logo={pinterestLogo} companyName="Pinterest" postTime="2 days ago"
        title="Frontend Developer" salary="$100/hr" location="India, Pune"
        tags={["Full-Time", "In Office"]}/>

      <Card logo={spotifyLogo} companyName="Spotify" postTime="today"
        title="React Developer" salary="$110k/yr" location="India, Delhi"
        tags={["Part-Time", "Remote"]}/>

      <Card logo={telegramLogo} companyName="Telegram" postTime="6 days ago"
        title="Backend Engineer" salary="$95k/yr" location="India, Chennai"
        tags={["Full-Time", "Senior Level"]}/>
    </div>
  )
}

export default JobCards