import React from 'react';
import './Person.css';
import Radium from 'radium';

const Person = (props) =>{
  let hobs = "";
  props.hobbies.map(hobby => {
    if(hobs===""){
      return hobs=hobby
    }
    else{
      return hobs+=", "+ hobby
    }
  });

  return (
    <div className="Person" >
      <p onClick={props.click}>
        Im {props.name}, am {props.age} years old and enjoy {hobs}.
      </p>
      <input type="text" value={props.name}  onChange={props.change}/>
    </div>
  )
}

export default Radium(Person);
