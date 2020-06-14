import React, { useContext } from 'react';
import ValueContext from '../valueContext';

function Child(props) {
  let value = useContext(ValueContext);
  return (
    <div className="Child">
      <h1>Child component............</h1>
      <h1>{value}</h1>
    </div>
  );
}

export default Child;
