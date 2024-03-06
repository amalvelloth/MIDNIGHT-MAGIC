import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Contact/>
    </div>
  )
}

export default App