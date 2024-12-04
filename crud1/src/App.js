import { useState } from "react";
import Viewtable from "./tables/Viewtable";
import Adduser from "./form/Adduser";


function App() {

  const usersData = [
    {id:1,name:'Leo',username:'Leodas'},
    {id:2,name:'Harold',username:'Harolddas'},
    {id:3,name:'Arnold',username:'Arnolddas'},

  ];

  const[users,setUsers] = useState(usersData);

  const adduser = (user)=>{
    user.id = users.length + 1;
    setUsers([...users,user])
  }

  const deleteUser = (id)=>{
    setUsers(users.filter((user)=>user.id!==id))
  }

  return (
    <div className="App">
      <h1>CRUD APP</h1>
      <div classname="Main">
      <h2>ADD USER</h2>
      <Adduser adduser={adduser}/>
       </div>
      <div className="sub">
        <h2>VIEW USERS</h2>
        <Viewtable deleteUser={deleteUser} users={users}/>
      </div>
    </div>
  );
}

export default App;
