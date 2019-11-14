import React from 'react';

const Welcome = props => {
  const today = new Date()
  return (
    <div className="welcome">
      <h1>Welcome {props.name}!</h1>
      <small className='time'>
        {today.toDateString()} - {today.toLocaleTimeString()}
      </small>
    </div>
  )
}

export default Welcome;