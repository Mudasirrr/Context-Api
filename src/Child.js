import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function Child() {
  let value = useContext(ValueContext);
  return (
    <div className="Child">
      <h1>Child component............</h1>
      <h1>Child Number {value[0]}</h1>
      <button onClick={()=>{value[1](++value[0])}}>Update Value</button>
    </div>
  );
}

export default Child;
