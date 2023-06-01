import { useNavigate } from "react-router-dom";

const Nomatch = () => {
    const navigate = useNavigate()
    return ( 
        <div className="404">
            no match route
            <button onClick={()=> navigate(-1)}>back</button>
        </div>
     );
}
 
export default Nomatch;