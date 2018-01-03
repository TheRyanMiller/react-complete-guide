import React from 'react';
import Person from './Person/Person';

const personList = (props) =>{
  let ppl = props.persons.map(
    (person,index) => {
      return (
        <Person
          className='Person'
          name={person.name}
          age={person.age}
          change={(e) => props.changed(e,person.id)}
          click={() => props.clicked(index)}
          key={person.id}
          />
      )
    }
  )

  return ppl;

}

export default personList;
