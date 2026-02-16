import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Preview from './pages/Preview'
import LoginForm from './pages/LoginForm'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import ResumeBuilder from './pages/ResumeBuilder'
import Register from './pages/Register'


const App = () => {
  return (
    <Routes>

      {/* Public routes (NO navbar) */}
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/register' element={<Register />} />

      {/* Routes WITH navbar */}
      <Route element={<Layout />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/preview' element={<Preview />} />
        <Route path='/resumebuilder/:id' element={<ResumeBuilder />} />
      </Route>

    </Routes>
  )
}

export default App
