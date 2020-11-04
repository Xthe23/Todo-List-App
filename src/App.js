import React, {useState, useEffect} from 'react'
import './App.css';
import './assets/main.css'
import Form from "./components/Form";
import TodoList from "./components/TodoList";


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])
  const filteredHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
      }
  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todo', JSON.stringify([]))
    }else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }

  useEffect(() => {
    getLocalTodos()
  }, [])

  useEffect(() => {
    filteredHandler()
    saveLocalTodos()
  }, [todos, status])

  return (
    <div className="App text-center w-screen h-screen bg-gradient-to-r from-indigo-400 via-white-500 to-pink-500">
      <h1 className="text-5xl text-white pt-6">Michael's Todo List</h1>
    <Form 
    setInputText={setInputText}
    setTodos={setTodos}
    inputText={inputText}
    todos={todos}
    status={status}
    setStatus={setStatus}
    ></Form>
    <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}></TodoList>
    
    </div>

  );
}

export default App;
