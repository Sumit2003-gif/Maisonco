import React from 'react'
import Navbar from "../src/Page/Navbar"
import { Routes, Route, Router } from 'react-router-dom'
import Home from './Page/Home'
import Footer from './Page/Footer'
import About from './Page/About'
import Contact from './Page/Contact'
import Blog from './Page/Blog'
import ScrollToTop from './Componet/ScrollTop'

function App() {

  return (
    <div>

      {/* <Router> */}
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
      {/* </Router> */}
    </div>
  )
}

export default App
