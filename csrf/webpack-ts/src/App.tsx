import React, { useEffect } from "react";

export const App = () => {

  useEffect(()=> {
    fetch("http://localhost:3000")
  },[])


  return (
    <div>
      hello
      <input
        type="text"
        value="jun"
        name="name"
        onClick={(e) => {
          const value = e.currentTarget.value;
          
          const 
        }}
      />
    </div>
  );
};
