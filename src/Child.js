import React from 'react';

function Child(props) {
  return (
    <div className="Child">
      <h1>Child component............</h1>
      <h1>{props.num}</h1>
    </div>
  );
}

export default Child;
