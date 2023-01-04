import React, { useState } from "react";
import Card from "../../UI/Card";
import "./AddUser.css";

function AddUser(props) {
  const [title, setTittle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    //if the input field is empty
    if (title.trim().length === 0 || description.trim().length === 0) {
      return;
    }
    //logging the form value
    // console.log(title, description);

    //passing data to App.js
    props.onAddUser(title, description);

    //resetting form value
    setTittle("");
    setDescription("");
  };

  //this is the onChange for title input
  const titleHandler = (event) => {
    setTittle(event.target.value);
  };
  //this is the onChange for description input
  const descHandler = (event) => {
    setDescription(event.target.value);
  };
  return (
    <Card className="input">
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={titleHandler} />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={descHandler}
        />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
}

export default AddUser;
