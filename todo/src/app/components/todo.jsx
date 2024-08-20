import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../store/todoSlice";

const Todo = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const onAddTodo = async (e) => {
    e.preventDefault();
    dispatch(addTodo(task));
    setTask("");
  };

  const todos = useSelector((state) => state.Todo.todos);

  return (
    <div className="flex flex-col items-center p-4">
      <form onSubmit={onAddTodo}>
        <div className="flex mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="border border-gray-300 rounded p-2 w-64"
            placeholder="Add a new task"
          />
          <button
            type="submit"
            className="ml-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      </form>

      <ul className="list-disc">
        {todos && todos.length > 0 ? (
          todos.map((todo) => (
            <li key={todo.id}>
              {todo.title}
              <button>X</button>
            </li>
          ))
        ) : (
          <p>No Todo available!</p>
        )}
      </ul>
    </div>
  );
};

export default Todo;
