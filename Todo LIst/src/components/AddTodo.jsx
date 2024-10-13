import React from "react";
import { useState } from "react";

function AddTodo({addTodo}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if(!title || !description) alert("title or description cannot be blank")
        addTodo(title, description)
    }
  return (
    <div className="conatiner my-3" style={{width:"50%", margin:"auto"}}>
    <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label for="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {setTitle(e.target.value)}}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="description" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => {setDescription(e.target.value)}}
            className="form-control"
            id="description"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          ADD
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
