import './App.css'
import { SignIn } from './components/SignIn'
import { Routes, Route } from 'react-router-dom'
import { Landing } from './components/Landing'
import { Register } from './components/Register'

function App() {

  return (
    <div id="app">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
