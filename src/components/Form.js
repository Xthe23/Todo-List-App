import React from 'react';

const Form = () => {
  return (
    <form className="flex items-center">
        <div className="flex-auto border-b border-white-500 m-5 p-5">

      <input type="text" className="w-64 appearance-none bg-gray-100 border-none text-indigo mr-5 p-2 leading-tight focus:outline-none" />
      <button className="todo-button" type="submit">
        <i className="fas fa-feather-alt w-5 text-white mr-8 flex"></i>
      </button>
        <select name="todos" className=" appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
        </div>
    </form>
  )
}

export default Form;