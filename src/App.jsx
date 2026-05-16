import React from 'react'
import JobCards from './components/JobCards'

const App = () => {

  return (
    <>
      <title>Job Portal</title>
      <header>
        <div>
          <h1 className='main-head'>Job Portal</h1>
        </div>
        <div className='dropdown-menus'>
          <span className="cursor-pointer hover:border-green-600 hover:border-b-1 ">Browse Jobs ▾</span>
          <span className="cursor-pointer hover:border-green-600 hover:border-b-1 ">Saved Jobs ▾</span>
          <span className="cursor-pointer hover:border-green-600 hover:border-b-1 ">Profile ▾</span>
        </div>
      </header>
      <JobCards />
      <footer>
        <p>© 2025 JobBoard. All rights reserved.</p>
        <p>*This is a practice project. All company logos and names are used for educational purposes only.</p>
      </footer>
    </>
  )
}

export default App