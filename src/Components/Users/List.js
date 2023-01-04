import React from "react";
import "./List.css";

function List(props) {
  const { title, description } = props.user;
  return (
    <ul>
      <li>{`[${title}] : ${description}`}</li>
      <button className="list-btn-delete">
        <i className="fa fa-trash fa-1x"></i>
      </button>
      <button className="list-btn-edit">
        <i className="fa fa-edit fa-1x"></i>
      </button>
    
    </ul>
  );
}

export default List;
