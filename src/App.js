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
  return array
}

function App() {
  const [state, setState] = useState([])
  const [user, setUser] = useState('')

  useEffect(() => {
    const localState = localStorage.getItem('state')
    const localUser = localStorage.getItem('user')
    if (localUser && localState) {
      setState(JSON.parse(localState))
      setUser(JSON.parse(localUser))
    } else setUser(prompt('Enter your name please'))
  }, [])

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))
  }, [state])

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

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
