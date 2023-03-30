import React from 'react';
import './App.css';


function TodoForm({ addTodo }) {
  //create Form 
  //create state (current_state, set_state)
  const [value, setValue] = React.useState("");

  // handler to guard against blank submit
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    //if valid, then add to List
    addTodo(value);
    //clearing added item
    setValue("");
  };

  return (
    //once clicked, call handler
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        //set states once pressed
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}



function Todo({ todo }) {
  return (
    //function used to display text dynamically
    <div className="todo">
      {todo.text}
    </div>
  );
};
//main function --> starting point of app
function App() {

  //dynamically create new list
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  //create list of todos and setTodos which will 
  //be a React useState,


  const [todos, setTodos] = React.useState([
    { text: "Learn about React" },
    { text: "Meet friend for lunch" },
    { text: "Build really cool todo app" }
  ]);

  //return is what usually being shown on the
  //app page
  return (
    //create main div 
    //create todo-list div
    //map of the todos to Todo components
    //create TodoForm Object
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
