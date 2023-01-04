import React from "react";
import "./UsersList.css";
import List from "./List";
import Card from "../../UI/Card";
function UsersList(props) {
  return (
    <Card className="users">
      {props.users.map((user) => (
        <List user={user} key={user.id}></List>
      ))}
    </Card>
  );
}

export default UsersList;
