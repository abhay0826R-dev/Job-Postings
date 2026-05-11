import React from 'react'
import JobCards from './components/JobCards'

const App = () => {
  return (
    <>
      <header>
        <div>
          <h1 className='main-head'>Job Portal</h1>
        </div>
        <div className='dropdown-menus'>
          <span>Browse Jobs ▾</span>
          <span>Saved Jobs ▾</span>
          <span>Profile ▾</span>
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