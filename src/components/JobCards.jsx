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
    <main>
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

        <Card logo={appleLogo} companyName="Apple" postTime="2 days ago"
        title="iOS Developer" salary="$130k/yr" location="India, Bengaluru"
        tags={["Full-Time", "Senior Level"]}/>

        <Card logo={googleLogo} companyName="Google" postTime="1 day ago"
        title="ML Engineer" salary="$150k/yr" location="India, Hyderabad"
        tags={["Full-Time", "Remote"]}/>

        <Card logo={instagramLogo} companyName="Instagram" postTime="3 days ago"
        title="Content Strategist" salary="$70k/yr" location="India, Mumbai"
        tags={["Part-Time", "Flexible Schedule"]}/>

        <Card logo={pinterestLogo} companyName="Pinterest" postTime="5 days ago"
        title="Product Designer" salary="$95/hr" location="India, Pune"
        tags={["Contract", "Remote"]}/>

        <Card logo={spotifyLogo} companyName="Spotify" postTime="1 week ago"
        title="Audio Engineer" salary="$80k/yr" location="India, Delhi"
        tags={["Full-Time", "In Office"]}/>
    </main>
  )
}

export default JobCards