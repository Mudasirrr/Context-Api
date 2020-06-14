import React from 'react';
/**
 * Context has two things
 *  1.Provider
 *      whenever we work with context we first provide some data so that component can access that value
 * 
 *  2.Consumer
 *      to use in a component use consumer, consume the value
 * =>It is a sort of global variable
 */
const ValueContext=React.createContext(45,()=>{});


export default ValueContext;