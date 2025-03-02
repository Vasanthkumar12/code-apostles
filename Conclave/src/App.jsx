import './App.css'
import { SignIn } from './components/SignIn'
import { Landing } from './components/Landing'
import { Register } from './components/Register'
import Home from './components/Home'
import Group from './components/Group'
import Profile from './components/Profile'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div id="app">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/groups' element={<Group/>}/>
      </Routes>
    </div>
   
  )
}

export default App
