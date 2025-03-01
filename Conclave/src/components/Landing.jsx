import '../styles/Landing.css'
import React from 'react'
import { Link } from  'react-router-dom'

export const Landing = () => {
  return (
    <div id="landing">
        <div>
            <h1>Welcome to our Community Platform <span id="project_name">Conclave</span></h1>
            <p>Please Register to start your journey <Link to="/register" className="links">Register</Link></p>
            <p>or Already register please <Link to="/signin" className="links">SignIn</Link></p>
        </div>
    </div>
    
  )
}
