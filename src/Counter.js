import React, { useReducer } from "react";

function reducer(state, action){
  switch (action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
}

function Counter() {

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1)
    }
    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1)
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;