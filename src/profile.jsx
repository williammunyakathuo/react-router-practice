import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

const Profile = () => {
    const auth =  useAuth()
    const navigate = useNavigate()
    const handlelogout = ()=>{
        auth.logout()
        navigate('/')
    }
    return ( 
        <div className="profile">
            <p>welcome  {auth.user}</p>
            <button onClick={handlelogout}>logout</button>
        </div>
     );
}
 
export default Profile;