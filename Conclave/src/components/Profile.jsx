import Navbar from "../common/Navbar"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/Profile.css'

const Profile = () => {
  return (
    <div className="profile">
     <Navbar/>
     <div id="pro_info">
      <div id='pro-data'>
        <div>
          <p id="userIcon"><FontAwesomeIcon icon={faUser} id="user-icon" /></p>
        </div>
          <p><strong>Name : </strong>Peter Paul</p>
          <p><strong>Email : </strong>peterpaul@gmail.com</p>
          <p><strong>Phone : </strong>9344056723</p>
          <p><strong>Interest : </strong>Religion</p>
          <p><strong>Location : </strong>Vatican City, America</p>
      </div>

     </div>
    </div>
   
  )
}

export default Profile