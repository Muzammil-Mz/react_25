import React from "react";

const App = () => {
  let name = "suhail";
  let age = 66;

  let cfiStudents = {
    name: "mz",
    class: "cfi",
    age: 22,
    roll: 65,
  };


  const mobilePhone={
    brand:"vivo",
    model:100,
    color:"red",
    storage:225
  }
  return (
    <div>
      <h1>Hello im {name}</h1>
      <h2>THis is a static example </h2>
      <h3>{name} and mz are cohorts</h3>
      <h3>
        Im {name},{age}
      </h3>{" "}
      {/* used to add multiple variable in same html page */}
      <h2>Hello Im {cfiStudents.name}</h2>
      <h2>Im studying in {cfiStudents.class}</h2>
      <h3> im {cfiStudents.age}</h3>
      <h3>my roll is {cfiStudents.roll}</h3>
{/* object cant be ACCESSED directly accessed by object.key as above {cfiStudents.name} */}





<h2>NEw mobile Phone</h2>
<h3>this is {mobilePhone.brand}</h3>
<h3>this is {mobilePhone.color}</h3>
<h3>this is {mobilePhone.storage}</h3>





































    </div>
  );
};

export default App;
