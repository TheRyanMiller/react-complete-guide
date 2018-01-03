import React, {Component} from 'react';
import './Person.css';

//const Person = (props) =>{

class Person extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="Person" >
        <p
          onClick={this.props.click}>
          Im {this.props.name}, am {this.props.age} years old.
        </p>
        <input type="text"
          value={this.props.name}
          onChange={this.props.change}
          />
      </div>
    )
  }
}

export default Person;
