import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import AddTodo from "./components/AddTodo";

function App() {
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, description) => {
    let sno = todos[todos.length-1].sno + 1
    const myTodo = {
      sno: sno,
      title: title,
      description: description
    }
    setTodos([...todos, myTodo])
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      description: "You need to go to the market to get this job done1",
    },
    {
      sno: 2,
      title: "Go to the mall",
      description: "You need to go to the mall to get this job done2",
    },
    {
      sno: 3,
      title: "Go to the ghat",
      description: "You need to go to the ghat to get this job done3",
    },
  ]);

  return (
    <>
      <Navbar title="MyToDoList" searchBar={true} />
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
