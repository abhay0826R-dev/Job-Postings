import React from 'react'
import Card from './Card'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import defaultCompanyIcon from '../assets/defaultCompanyIcon.svg'
import defaultCompanyIcon2 from '../assets/defaultCompanyIcon2.svg'
import defaultCompanyIcon3 from '../assets/defaultCompanyIcon3.svg'
import defaultCompanyIcon4 from '../assets/defaultCompanyIcon4.svg'

const JobCards = () => {

  const salaries = ["$60k/yr", "$80k/yr", "$90k/yr", "$120k/yr", "$30k/yr"]
  const postTime = ["1 week ago", "5 days ago", "3 days ago", "1 day ago", "2 days ago", "today"]
  const logos = [defaultCompanyIcon, defaultCompanyIcon2, defaultCompanyIcon3, defaultCompanyIcon4]

  const [jobs, setJobs] = useState([])

  const getData = async () => {
    const jobData = await axios.get("https://www.arbeitnow.com/api/job-board-api?search=india")
    console.log(jobData.data.data)
    const jobCards = jobData.data.data.map((elem, idx) => ({
        logo: logos[Math.floor(Math.random() * logos.length)],
        companyName: elem.company_name,
        postTime: postTime[Math.floor(Math.random() * postTime.length)],
        title: elem.title.split(":")[0].slice(0, 25) + "...",
        salary: "Not Disclosed",
        location: elem.location,
        tags: elem.tags,
        url: elem.url
    }))
    setJobs(jobCards)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <main>

      {jobs.map((card, idx) => (
        <Card key={idx} {...card} />
      ))}

    </main>
  )
}

export default JobCards