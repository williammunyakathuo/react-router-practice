import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

const Navbar = () => {

    const auth = useAuth;
    return (
        <div className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/create'>New Blog</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
                {
                    !auth.user && (<NavLink to='/login'>Login</NavLink>)
                }
            </div>


        </div>
    );
}

export default Navbar;