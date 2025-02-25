import React from "react";
// here we are creating a template format
const Person2 = (props) => {
  return (
   <>
   <h1>Person Details</h1>
     <p>Name:{props.name}</p>
     <p>Age:{props.age}</p>
     <p>Class:{props.class}</p>
     <br />
     <hr />
      </>
  );
};

export default Person2;
