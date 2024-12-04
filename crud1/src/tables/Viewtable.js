const Viewtable=(props)=>(
    <table className="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>           
                </tr>
        </thead>
        <tbody>
            {props.users.length>0?(
                props.users.map((user)=>(
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                    <button className="button">Edit</button>
                </td>
                <td>
                    <button onClick={()=>props.deleteUser(user.id)} className="button">Delete</button>
                </td>
            </tr>
                ))
            ):(
                <tr>
                    <td>No users</td>
                </tr>
            )
            }
            
        </tbody>
    </table>
    );

    export default Viewtable;