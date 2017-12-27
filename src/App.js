import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

let hobbies = ["skiing","skateboarding"];
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      persons: [
        { id: '1', name: 'Ryan', age: '29' },
        { id: '2', name: 'Manu', age: '33'},
        { id: '3', name: 'Billy', age: '13'}
      ],
      otherState: 'Some other value',
      showPersons: true
    }
  }

  showPersonsHandler = (newName) =>{
    console.log("clicked button!");
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  handleTextChange = (e,id) =>{
    const personIdx = this.state.persons.findIndex(p=>{
      return p.id === id;
    });
    const persons = [...this.state.persons];
    const person = persons[personIdx];
    console.log(this.state.persons[personIdx]);
    //const person = [...this.state.person][personIdx];
    person.name = e.target.value;

    persons[personIdx] = person;
    this.setState({
      persons:persons
    });
  }

  deletePersonHandler = (personIndex) =>{
     const persons = [...this.state.persons];
     persons.splice(personIndex,1);
     this.setState({persons:persons});
  }

  render() {
    const style={
      backgroundColor: "green",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      color:'white',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }//Radium style

    }

    let persons = null;

    if(this.state.showPersons === true){
        persons = (
          <div>
            {this.state.persons.map(
              (person,index) => {
                return <Person
                  className='Person'
                  name={person.name}
                  age={person.age}
                  hobbies={hobbies}
                  change={(e) => this.handleTextChange(e,person.id)}
                  click={() => this.deletePersonHandler(index)}
                  key={person.id} />
              }
            )}
          </div>
        )
        style.backgroundColor='red';
        style[':hover']={
          backgroundColor: 'salmon',
          color: 'black'
        }
      }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi Im a React App</h1>
          <p>This is actually working</p>
          <button style={style} onClick={this.showPersonsHandler}>
            Switch Name.
          </button>
          {persons}

        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
