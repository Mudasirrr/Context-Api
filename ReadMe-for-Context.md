

            Part A[simple flow of the context]
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
            Part B[useState updatng the value]

s1. change the ValueContext
        in order to use useState for updating the value  
            ```
            const ValueContext=React.createContext(45,()=>{});


            export default ValueContext;
            ```
s2. also change the app.js file
       ```
        let value=useState(48);
        return (
            <ValueContext.Provider value={value}>


            <div className="App">
            <h1>App component.............</h1>
            <Parent/> 
            </div>

            </ValueContext.Provider>
            
        );
        ```
s3. also change the child component
        ```
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

        ```

        Part C[Reducers........................]

    we use this because it facilitate us to do more action, more function as compared to use state, useState is for single value or perticular component, but the reducer is application level or we can say for the whole application.

    //https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f