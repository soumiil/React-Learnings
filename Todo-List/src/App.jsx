import { useState } from "react";
import TodoForm from "./Components/TodoForm";
import TodoListItem from "./Components/TodoListItem";

function App() {
    const [todoList, setTodoList] = useState([]);

    const addToDoList = (inputText) => {
        setTodoList(todoList.push(inputText));
      };
      return (
        <>
            <TodoForm addToDoList={addToDoList} />
            <hr />
            {todoList.map((item, index) => {
                return <TodoListItem item={item} key={index} />
            })}
        </>
    );
}

export default App;
