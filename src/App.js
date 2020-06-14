import React,{useState}from 'react';
import Parent from './Parent';
function App() {

  let [number, setNumber]=useState(7);

  return (
    <div className="App">
      <h1>App component.............</h1>
      <Parent num={number}/>
      <button onClick={()=>(setNumber(++number))}>Clickme</button>
    </div>
  );
}

export default App;
