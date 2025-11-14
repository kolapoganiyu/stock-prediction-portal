import { useState } from 'react'
import './assets/css/style.css'
import Header from './Component/Header'
import Main from './Component/Main'
import Footer from './Component/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './Component/Register'
import Login from './Component/Login'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    

      
    </>
  )
}

export default App
