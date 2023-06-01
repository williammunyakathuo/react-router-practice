import { useParams } from "react-router-dom";

const Userdetails = () => {
    const params = useParams()
    const userId = params.userId
    return ( 
        <div className="usersDetails">
            users details{userId}
        </div>
     );
}
 
export default Userdetails;