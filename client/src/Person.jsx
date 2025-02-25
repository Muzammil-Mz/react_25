import React from "react";
// person name should be capital as this is a component
//here we are exporting and importing in app.jsx as <person/>
const Person = () => {
const personDetails={
  name:"john",
  age:22,
  roll:55,
  mail:"123@gmail.com"
}

  return (
    <>
      <div>
       
        <h2>name :{personDetails.name}</h2>
        <h2>age :{personDetails.age}</h2>
        <h3>roll: {personDetails.roll}</h3>
        <h3>mail:{personDetails.mail}</h3>
        <hr />
        <br />
      </div>
    </> 
  );
};

export default Person;
