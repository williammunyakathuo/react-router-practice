import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

const Login = () => {
    const [user, setUser] = useState('');
    const auth = useAuth();
    const navigate = useNavigate()

    const handleLogin = () =>{
        auth.login(user)
        navigate('/')
    }
    return ( 
        <>
         <label htmlFor="user"> 
            username: {''}
            <input type="text" onChange={(e) => setUser(e.target.value)}/>
         </label>
         <button onClick={handleLogin}>Login</button>
        </>
      );
}
 
export default Login;