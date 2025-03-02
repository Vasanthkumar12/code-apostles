import './App.css'
import Home from './components/Home'
import Group from './components/Group'
import Profile from './components/Profile'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    
      <Routes>
      <Route path='/' element={<Home/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/groups' element={<Group/>}/>
    
      </Routes>
    </>
  )
}

export default App
