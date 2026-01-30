import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Preview from './pages/preview'

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='preview' element={<Preview/>}/>
        <Route path='preview' element={<Preview/>}/>
      </Routes>





    </div>
  )
}

export default App