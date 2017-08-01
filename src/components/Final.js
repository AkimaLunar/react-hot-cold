import React from 'react';
import './Final.css'
const Final = ({ number, onReset }) => {
  return (
    <header>
      <h1>{number}</h1>
      <h2>You Won!</h2>
      <button onClick={onReset}>Play again!</button>
    </header>
  )
}

Final.displayName = 'Final';
export default Final;