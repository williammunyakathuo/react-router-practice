import { NavLink, Outlet, useNavigate } from "react-router-dom";

const NewBLog = () => {
    const navigate = useNavigate()
    return (
        <div className="blogsummary">

            <NavLink to='f'>Home</NavLink>
            <NavLink to='n'>blog details</NavLink>
           
            new blog
            <button onClick={() => navigate(-1)}>back</button>
            <Outlet/>
        </div>
    );
}

export default NewBLog;