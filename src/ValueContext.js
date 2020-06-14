import React from 'react';
/**
 * Context has two things
 *  1.Provider
 *      whenever we work with context we first provide some data so that component can access that value
 * 
 *  2.Consumer
 *      to use in a component use consumer, consume the value
 */
const ValueContext=React.createContext(45);


export default ValueContext;