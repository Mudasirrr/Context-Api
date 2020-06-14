import React,{useState, useContext, useReducer}from 'react';
import Parent from './Parent';
import ValueContext from './ValueContext';
function App() {

  // let [number, setNumber]=useState(7);
let value=useState(48);
  return (
    <ValueContext.Provider value={value}>


    <div className="App">
      <h1>App component.............</h1>
      <Parent/> 
    </div>

    </ValueContext.Provider>
    
  );
}

export default App;
