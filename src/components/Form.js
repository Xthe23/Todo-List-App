import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ inputText, setInputText, setTodos, todos, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: uuidv4() }]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form className="flex items-center">
      <div className="flex-auto border-b border-white-500 m-5 p-5">
        <input
          type="text"
          value={inputText}
          onChange={inputTextHandler}
          className="w-64 appearance-none bg-gray-100 border-none text-indigo mr-5 p-2 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          onClick={submitTodoHandler}
          className="w-8 h-8 bg-black  todo-button mr-10 w-2 focus:outline-none "
          type="submit"
        >
          <i className="fas fa-feather-alt text-white fa-lg"></i>
        </button>
        <select
          onChange={statusHandler}
          name="todos"
          className=" appearance-none bg-white border border-gray-400 hover:border-gray-700 px-3 py-1 pr-8 rounded shadow leading-tight focus:outline-none"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
