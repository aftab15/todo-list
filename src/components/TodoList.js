import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filtered }) => {
  return (
    <>
      <div className="todo-container">
        <ul className="todo-list">
          {filtered.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
              text={todo.text}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
