import React, { useState } from 'react';
import Child from './Child';

function Parent(props) {
  return (

    <div className="Parent">

    <h1>Parent compon............</h1>
      <Child num={props.num}/>
    </div>
  );
}

export default Parent;
