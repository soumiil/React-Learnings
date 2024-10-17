import { useState } from "react";

function TodoForm({addToDoList}) {
    const [todo, setTodo] = useState("");
    return (
        <div className="conatainer w-full flex items-center flex-col py-10">
            <h1 className="text-2xl font-bold">TODO LIST</h1>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="w-[1170px] flex justify-center mt-4 gap-4"
            >
                <input
                    type="text"
                    value={todo}
                    onChange={(e) => {
                        setTodo(e.target.value);
                    }}
                    placeholder="Enter Todo Here"
                    className="w-[70%] border border-gray-400 outline-none focus:ring-2 px-6 text-2xl rounded-md"
                />
                <button
                    onClick={() => {
                        addToDoList(todo);
                        setTodo("");
                    }}
                    className="bg-green-500 h-[4rem] w-[10%] text-white rounded-md text-xl font-semibold"
                >
                    Save
                </button>
            </form>
        </div>
    );
}

export default TodoForm;
