import React, { Component } from 'react';
import Person from '../Components/Persons/Person'
//import Input from './Components/Input'
//import Output from './Components/Output'
import Radium,{StyleRoot} from 'radium'

import './App.css';
class App extends Component {

  state = {
    Person: [
      { id:"123",name: "John", age: 56 },
      { id:"456",name: "Jack", age: 16 },
      { id:"789",name: "Julia", age: 26 }
    ],
    showPersons: false
  }

  switchPeopleHandler = () => {
    this.setState({
      Person: [
        { name: "Shyam", age: 28 },
        { name: "Jack", age: 16 },
        { name: "Julia", age: 26 }
      ]
    })
  }

  deletePersonHandler = (personIndex)=>{
    console.log("Inside delete person handler")
     let person = [...this.state.Person]

     console.log(this.state.Person)
     person = this.state.Person.splice(personIndex,1) 
     console.log("After splicing")
     console.log(person)
     this.setState({Person:person})
  }

  onChangeEvent = (event,id) => {
    const personIndex = this.state.Person.findIndex(p=>{
      return p.id === id
    }) 

    const person = {
      ...this.state.Person[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.Person]
    persons[personIndex] = person
    this.setState({Person:persons})
  }

  tooglePersons = () => {
    const currentStatus = this.state.showPersons;
    this.setState({ showPersons: !currentStatus })
  }

  render() {
    let style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
    }
    let person = null;
    if (this.state.showPersons) {
      person = (
        <div>
          {
            this.state.Person.map((person,index) => {
             return <Person
              click={()=>this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              changed={(event)=>this.onChangeEvent(event,person.id)} 
              />
            })
          }   
          
        </div>
      )

      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor:'lightred',
        color:'black'
      }

    }
    return (
      <StyleRoot>
      <div className="App">
        <h1>Hello React</h1>
        <p>My First React App</p>
        <button style={style} onClick={this.tooglePersons}>Toggle People</button>
        {person}
      </div>
      </StyleRoot>
    );

  }
}

/*
state = {
  name:"Jack"
}



onChangeEvent = (event)=>{
  this.setState({
    name:event.target.value
  }
  )
}

render(){
  return (
    <div className="App">
    <Input 
        changed={this.onChangeEvent}> 
    </Input>
    <Output 
     name={this.state.name}
     />
    </div>
  )
}

} */

export default Radium(App);
