import React, { Component } from 'react';
import './App.css';
import PersonList from '../components/PersonList/PersonList';
import Cockpit from '../components/Cockpit/Cockpit';

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

    let personList = null;

    if(this.state.showPersons === true){
      personList = (
        <div>
          <PersonList
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.handleTextChange}
            />
        </div>
      )
    }

    return (
      <div>
        <Cockpit
          clicked={this.showPersonsHandler}

          />
        {personList}
      </div>
    );
  }
}

export default App;
