import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import AuthPage from './pages/AuthPage/AuthPage'
function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/auth" element={<AuthPage/>} />
      </Routes> 
    </>
  )
}

export default App
