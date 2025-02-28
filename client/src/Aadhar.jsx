import React from 'react'

const Aadhar = ({name,age}) => {
  return (
   <>
   
   <h1>My name is {name} and age is {age}</h1>
   {age  &&  <h1> Yes age is there {age} </h1> }
   {/* {age >= 18 ?  <h1>You can vote </h1> : <h1>You cant vote</h1> } */}
       
   </>
  )
}

export default Aadhar