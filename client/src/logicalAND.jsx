import React from 'react'

const logicalAND = (name,age) => {
  return (
    <div>
<h1>my name is {name} and my age is{age}</h1>
{age && <h1> My age is {age}</h1>} //&& logical operator
{age>=18 ? <h1>you can vote</h1>:<h1>You cant vote</h1>} 





    </div>
  )
}

export default logicalAND

// THe logical and && opreator in react is commonly used for conditional rendering. it allows you to render a component or element only if a certain conditions is met.

// basic syntax in js:
// the && operator works as follows:

// if the left hand side condition is true, the right hand-side expression is returned.
// if the left hand side condition is false 