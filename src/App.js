import React, { useState, useEffect } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';
import "react-datepicker/dist/react-datepicker.css";

const sortDay = array => {
  array.sort((b, a) => {
    return new Date(b.due) - new Date(a.due);
  });
  const undone = array.filter(el => !el.done)
  const done = array.filter(el => el.done)
  return undone.concat(done)
}

function App() {
  const [state, setState] = useState([])
  const [user, setUser] = useState('')

  useEffect(() => {
    const localState = localStorage.getItem('todos')
    if (localState) {
      setState(JSON.parse(localState).state)
      setUser(JSON.parse(localState).user)
    } else setUser(prompt('Enter your name please'))
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify({ state: state, user: user }))
  }, [state])

  return (
    <div className="my-container">
      <div className="main">
        <Welcome name={user} />
        <InputTodo state={state} setState={setState} />
        <TodoList state={sortDay(state)} setState={setState} />
      </div>
    </div>
  );
}

export default App;
