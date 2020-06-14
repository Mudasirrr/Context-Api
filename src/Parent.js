import React, { useState } from 'react';
import Child from './Child';
import Child2 from './Child2';

function Parent(props) {
  return (

    <div className="Parent">

    <h1>Parent compon............</h1>
      <Child/>
      <Child2/>
    </div>
  );
}

export default Parent;
