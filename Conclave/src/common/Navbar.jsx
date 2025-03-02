import {Link, NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
          <Link to='/' className="title">ConClave</Link>
        <div className="nav-links">
        <NavLink to='/'>Home</NavLink>
      <NavLink to='/profile'>Profile</NavLink>
      <NavLink to='/groups'>Groups</NavLink>
      <Link>Logout</Link>
        </div>
    </div>
  )
}

export default Navbar