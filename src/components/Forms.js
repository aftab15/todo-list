import React from "react";
import "../App.css";

const Forms = ({ inputText, setInputText, setTodos, todos, setStatus }) => {
  const inputHandler = (e) => {
    setInputText(e.target.value);
    // console.log(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <>
      <form>
          <div className="farm">
          <div className="farm1">
          <input
            value={inputText}
            type="text"
            className="todo-input"
            onChange={inputHandler}
          />
          <button onClick={submitHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
          </button>
        </div>

        <div  className="farm2">
          <div className="select">
            <select
              onChange={statusHandler}
              name="todos"
              className="filter-todo"
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="incompleted">Incompleted</option>
            </select>
          </div>
        </div>
              
          </div>

      </form>
    </>
  );
};

export default Forms;
