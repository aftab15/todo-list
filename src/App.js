import { useEffect, useState } from "react";
import "./App.css";
import Forms from "./components/Forms";
import TodoList from "./components/TodoList";

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtered, setFiltered] = useState([]);

  useEffect(()=>{
    getLocal();
  },[])

  useEffect(()=>{
    filterHadler();
    saveLocal();
  },[status, todos])

  const filterHadler =()=>{
    switch(status){
      case "completed":
        setFiltered(todos.filter((todo)=> todo.completed === true));
        break;
      case "incompleted":
        setFiltered(todos.filter((todo)=> todo.completed === false));
        break;
      default:
        setFiltered(todos);
        break;    
    }
  }


  const saveLocal =()=>{
        localStorage.setItem("todos", JSON.stringify(todos));
    }


  const getLocal =()=>{
    if(localStorage.getItem('todos') ===null){
      localStorage.setItem("todos", JSON.stringify([]));
  }else{
      let localtodo = JSON.parse(localStorage.getItem("todos"));
      setTodos(localtodo)
  }
  }


  return (
    <div className="App">
      <header>
        <h1 className="names">AFTAB'S TO-DO LIST</h1>
      </header>
      <Forms todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus}/>
      <TodoList todos={todos} setTodos={setTodos} filtered={filtered}/>
    </div>
  );
}

export default App;
