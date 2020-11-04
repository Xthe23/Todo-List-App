import React, {useState}from 'react'
import './App.css';
import './assets/main.css'
import Form from "./components/Form";
import TodoList from "./components/TodoList";


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App text-center w-screen h-screen bg-gradient-to-r from-indigo-400 via-white-500 to-pink-500">
      <h1 className="text-5xl text-white pt-6">Michael's Todo List</h1>
    <Form 
    setInputText={setInputText}
    setTodos={setTodos}
    inputText={inputText}
    todos={todos}
    ></Form>
    <TodoList todos={todos} setTodos={setTodos}></TodoList>
    
    </div>

  );
}

export default App;
