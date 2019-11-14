import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import randomstring from 'randomstring';


const InputTodo = props => {
  const [startDate, setStartDate] = useState(new Date());
  const [text, setText] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (text.length < 1) {
      alert('Enter your task')
      return
    }
    const todo = {
      id:randomstring.generate(4),
      body: text,
      due: startDate.toString(),
      done: false,
    }
    setText('')
    props.setState(props.state.concat(todo))
  }

  return (
    <div className="input-box">
      <div className="input-left-group">
        <form className='input' onSubmit={(e) => handleSubmit(e)}>
          <input
            name='text'
            className='input'
            value={text}
            placeholder="How are you today?"
            onChange={e => setText(e.target.value)} />
        </form>
        <DatePicker
          className="datepicker"
          selected={startDate}
          onChange={date => setStartDate(date)}
          showTimeSelect
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      </div>
        <i onClick={(e) => handleSubmit(e)} className="fi-xwsuxl-plus-solid fi-5x my-icon"></i>
    </div>
  )
}


export default InputTodo;