import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Register.css'
import axios from 'axios'
 
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

    const handleSubmit = async (e) => {
      e.preventDefault();
      // Placeholder for authentication logic
      console.log("Logging in with:", userName, password);
      const res = await axios.get("https://conclave-525c4-default-rtdb.asia-southeast1.firebasedatabase.app/users.json")
      // console.log(res.data)
      let userArr = Object.entries(res.data)
      console.log(userArr)
      userArr.map((usr) => {
        // console.log(usr)
        if(userName === usr[1].username && password === usr[1].password) {
          console.log('=========== * valid user * ============')
          setSuccess(true);
        }
        else {
          setErrMsg("Wrong Username and Password")
        }
        console.log('username : ', usr[1].username, 'password : ', usr[1].password)
      })
    }
    
    const navigate = useNavigate()
    return (
      <div  id="sign-form">
            <section>
                {success ? (
                  <div className="signin-box">
                    <h1>Success</h1>
                    <p>
                      {navigate('/home')}
                    </p>
                  </div>
                ) : (
                  <div>
                    <p ref={errRef} className={errMsg? 'errmsg' : 'offscreen'} 
                    aria-live='assertive'>{errMsg}</p>
                    <div id="form">
                        <h1>SignIn</h1>
                        <form onSubmit={handleSubmit}>
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
                  </div>
                )}
            </section>
    </div>
  )
}
