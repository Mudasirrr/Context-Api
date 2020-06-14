s1. first make a file ValueContext.js
    inside of this const ValueContext=React.createContext(45);
                   export default ValueContext;

s2. In App that is root , apply 1st part of the React Context that is provider
        by importing valueContext.js in App
        then use as 
        ```
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
        ```

s3. Now its time to Implement the 2nd part of the ValueContext that is COnsumer
        by using the value in context , go to the child component
         ```
        import React, { useContext } from 'react';
        import ValueContext from './ValueContext';

        function Child() {
        let value = useContext(ValueContext);
        return (
            <div className="Child">
            <h1>Child component............</h1>
            <h1>{value}</h1>
            </div>
        );
        }

        export default Child;
        ```
