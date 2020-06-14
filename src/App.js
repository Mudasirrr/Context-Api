import React,{useState}from 'react';
import Parent from './Parent';
import ValueContext from './ValueContext';
function App() {

  // let [number, setNumber]=useState(7);

  return (
    <ValueContext.Provider value={78}>


    <div className="App">
      <h1>App component.............</h1>
      <Parent/>
    </div>

    </ValueContext.Provider>
  );
}

export default App;
