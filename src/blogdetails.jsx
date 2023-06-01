// import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const BlogDetails = () => {

    const navigate = useNavigate();
    return ( 
        
        <div className="blogDetails">
            
            <p>Blog details</p>
            <button onClick={()=> navigate('/newblog')}>New blog</button>
            <button onClick={() => navigate(-1)}>back</button>
        </div>
     );
}
 
export default BlogDetails;