import React from 'react';
import './App.css';

const Tittle = () => {
 // return (
    // <div>
    //  <h1>Hello :)</h1>
    // </div>
  // );

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello Bren")
  )
}


export default Tittle
