import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {

  const [usersList,setUsersList] = useState([])

  const usersListHandler = (title,description)=>{
    setUsersList((prev)=>{
      return [...prev,{title:title,description:description,id:Math.random().toString()}]
    })
  }
  return (
    <div className="App">
      <AddUser onAddUser = {usersListHandler}/>
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
