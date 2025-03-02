import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Register.css'
 
export const SignIn = () => {
    const userRef = useRef()
    const errRef = useRef()

    const [userName, setUserName] = useState('')    
    const [password, setPassword] = useState('')

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus()
    }, [])

  return (
    <div  id="sign-form">
            <section>
                <p ref={errRef} className={errMsg? 'errmsg' : 'offscreen'} 
                aria-live='assertive'>{errMsg}</p>
                <div id="form">
                    <h1>SignIn</h1>
                    <form>
                        <label htmlFor="username">
                            Username:
                        </label>
                        <input 
                            type="text" 
                            id="username"
                            placeholder='Enter your username'
                            ref={userRef}
                            autoComplete='off'
                            onChange={(e) => setUserName(e.target.value)}
                        />

                        <label htmlFor="password">
                            Password: 
                        </label>
                        <input 
                            type="password" 
                            id="password"
                            placeholder='Enter your password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                      
                        <button id="signin">Sign In</button>
                    </form>

                    <div>
                        <p id="already-registered">You haven't Already registered </p><br/>
                        <span >
                            <Link to="/register" className='link'>Register</Link>
                        </span>
                    </div>
                </div>
            </section>
    </div>
  )
}
