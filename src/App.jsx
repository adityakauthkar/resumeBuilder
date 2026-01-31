import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Preview from './pages/Preview'
import Login from './pages/Login'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import ResumeBuilder from './pages/ResumeBuilder';
import Register from './pages/Register'


const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/preview' element={<Preview/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/layout' element={<Layout/>}/>
        <Route path='/resumebuilder' element={<ResumeBuilder/>}/>
        <Route path='/register' element={<Register/>}/>
        
      </Routes>





    </div>
  )
}

export default App