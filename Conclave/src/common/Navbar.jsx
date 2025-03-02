import {Link, NavLink} from "react-router-dom"
import { faEnvelope, faBell } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Navbar = ({}) => {
  return (
    <div className="navbar">
          <Link to='/' className="title">ConClave</Link>
        <div className="nav-links">
        <NavLink to='/home'>Home</NavLink>
      <NavLink to='/profile'>Profile</NavLink>
      <NavLink to='/groups'>Groups</NavLink>
      <FontAwesomeIcon icon={faEnvelope} size="1.2x" title="Messages" />
      <FontAwesomeIcon icon={faBell} size="1.2x" title="Notifications" />
      <Link to='/'>Logout</Link>
        </div>
    </div>
  )
}

export default Navbar