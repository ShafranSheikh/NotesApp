import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Footer from './components/Footer'
import Notes from './pages/Notes'
function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/notes' element={<Notes />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
