import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import '../styles/Register.css'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
 
export const Register = () => {
    const userRef = useRef()
    const errRef = useRef()

    const [userName, setUserName] = useState('')
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)

    
    const [password, setPassword] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchPwd, setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    const [showRegister, setShowRegister] = useState(true)

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(userName)
        setValidName(result)
    }, [userName])

    useEffect(() => {
        const result = PWD_REGEX.test(password)
        setValidPwd(result)
        const match = password == matchPwd
        setValidMatch(match)
    }, [password, matchPwd])

    useEffect(() => {
        setErrMsg('')
    }, [userName, password, matchPwd])

    function handleSubmit(e) {
        e.preventDefault()
        axios.get("")

    }

  return (
    <div  id="register-form">
        {showRegister && (
            <section >
                <p ref={errRef} className={errMsg? 'errmsg' : 'offscreen'} 
                aria-live='assertive'>{errMsg}</p>
                <div id="form">
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            Username: 
                            <span className={validName? 'valid' : 'hide'}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className={validName || !userName ? 'hide' : 'invalid'}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                        </label>
                        <input 
                            type="text" 
                            id="username"
                            placeholder='Enter username'
                            ref={userRef}
                            autoComplete='off'
                            onChange={(e) => setUserName(e.target.value)}
                            required
                            aria-invalid={validName? 'false' : 'true'}
                            aria-describedby='uidnote'
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}    
                        />
                        <p id='uidnote' className={userFocus && userName && !validName ? 'instructions' : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} style={{marginRight: '10px'}} /> <br/>
                            4 to 24 characters. <br/>
                            Must begin with a letter.<br/>
                            Letters, numbers, underscores, hyphens allowed.
                        </p>

                        <label htmlFor="email">
                            Email:
                        </label>
                        <input 
                            type="email"
                            placeholder='Enter email' 
                        />

                        <label htmlFor="password">
                            Password: 
                            <span className={validPwd? 'valid' : 'hide'}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className={validPwd || !password ? 'hide' : 'invalid'}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                        </label>
                        <input 
                            type="password" 
                            id="password"
                            placeholder='Enter password'
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            aria-invalid={validPwd? 'false' : 'true'}
                            aria-describedby='pwdnote'
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}    
                        />
                        <p id='pwdnote' className={pwdFocus && !validPwd ? 'instructions' : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} style={{marginRight: '10px'}} /> <br/>
                            8 to 24 characters. <br/>
                            Must include uppercase and lowercase letters, a number and a special character.<br/>
                            Letters, numbers, underscores, hyphens allowed.
                        </p>

                        <label htmlFor="confirm_pwd">
                            Confirm Password: 
                            <span className={validMatch && matchPwd? 'valid' : 'hide'}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <span className={validMatch || !matchPwd ? 'hide' : 'invalid'}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                        </label>
                        <input 
                            type="password" 
                            id="confirm_pwd"
                            placeholder='confirm your password'
                            onChange={(e) => setMatchPwd(e.target.value)}
                            required
                            aria-invalid={validPwd? 'false' : 'true'}
                            aria-describedby='confirmnote'
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}    
                        />
                        <p id='confirmnote' className={matchFocus && !validMatch ? 'instructions' : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} style={{marginRight: '10px'}} /> <br/>
                            Must match the password
                        </p>

                        <label htmlFor="mobile">
                            Mobile:
                        </label>
                        <input 
                            type="number"
                            placeholder='Enter mobile number' 
                        />

                        <label htmlFor="location">
                            Location:
                        </label>
                        <input type="text" placeholder='Enter location'/>
                        
                        <label htmlFor="interests">
                            Interests:
                        </label>
                        <select id='interests'>
                            <option value="">Select Interests</option>
                            <option value="social-activities">Social Activities</option>
                            <option value="travel">Travel</option>
                            <option value="hobbies">Hobbies</option>
                            <option value="business">Business</option>
                            <option value="support">Support</option>
                            <option value="sports">Sports</option>
                            <option value="religion">Religion</option>
                            <option value="games">Games</option>
                            <option value="education">Education</option>
                            <option value="language">Language</option>
                            <option value="tech">Tech</option>
                            <option value="music">Music</option>
                            <option value="dancing">Dancing</option>
                            <option value="community">Community</option>
                            <option value="writing">Writing</option>
                            <option value="family">Family</option>
                            <option value="animals">Animals</option>
                        </select>
                        <button id="signup" disabled={!validName || !validPwd || !validMatch? true : false}>Sign Up</button>
                    </form>

                    <div>
                        <p id="already-registered">Already registered </p><br/>
                        <span >
                            <Link to="/signin" className='link' onClick={() => setShowRegister(false)}>Sign In</Link>
                        </span>
                    </div>
                </div>
            </section>
        )}
    </div>
  )
}

// phone, email, location, interests()