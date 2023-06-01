import { useSearchParams } from "react-router-dom";

const Users = () => {

    const [searchParams, setSerachParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active'
    return ( 
        <div className="users">
            <h2>user 1</h2>
            <h2>user 2</h2>
            <h2>user 3</h2> 
            <div>
                <button onClick={()=> setSerachParams({filter: 'active'})}>Active Users</button>
                <button onClick={()=> setSerachParams({})}>Reset filter</button>
            </div>
            {showActiveUsers ? <h2>Showing active users</h2> : <h2>showing all users</h2>}
        </div>
     );
}
 
export default Users;