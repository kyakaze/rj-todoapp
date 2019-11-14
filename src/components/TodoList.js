import React from 'react'

const TodoList = props => {
  const handleDelete = e => {
    const filter = props.state.filter(({ id }) => id != e)
    props.setState(filter)
  }
  const markDone = e => {
    const clone = props.state.slice()
    const found = clone.findIndex(({ id }) => id == e)
    clone[found].done = !clone[found].done
    props.setState(clone)
  }
  return (
    <div className='todo-list-box'>
      {props.state.length > 0 && props.state.map((el) => {
        return (
          <div className="todo" key={el.id}>
            <div onClick={() => markDone(el.id)} className={el.done ? 'done' : ''} >{el.body}</div>
            <div className="todo-right-group">
              <span style={{marginRight:'5px'}}>{new Date(el.due).toDateString()} - {new Date(el.due).toLocaleTimeString()} </span>
              <i onClick={() => handleDelete(el.id)} className="fas fa-trash-alt red"></i>
            </div>
          </div>
        )
      }
      )}
    </div >
  )
}

export default TodoList;