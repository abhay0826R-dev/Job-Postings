import React from 'react'
import JobCards from './components/JobCards'

const App = () => {
  return (
    <>
      <header>
        <h1 className='main-head'>Job Portal</h1>
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
