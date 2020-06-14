import React, { useContext, useReducer } from 'react';
import ValueContext from './ValueContext';
import numberReducer from './NumberReducer.js';

function Child2() {
  // let value = useContext(ValueContext);
  let [state,dispatch]=useReducer(numberReducer,52);
  return (
    <div className="Child">
    <h1>Child2 component............</h1>
  <h3>Child2 = {state}</h3>
  <button onClick={()=>{dispatch({type:'INCREMENT'});}}>Increment</button>
  <button onClick={()=>{dispatch({type:'DECREMENT'});}}>Decrement</button>
    </div>
  );
}

export default Child2;
