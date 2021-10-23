
import './App.css';

import React, { Component }  from 'react'
import Enter from './Enter';
import Add from './Add';
export default class App extends Component {
  constructor() {
    super()
  
    this.state = {
       names:[
        {title:'Danja', id:0, done:false},
        {title:'Nikita', id:1, done:false}
       ]
    }
  }
  //doneTask = id =>{
    //const index = this.state.names.map(name=>name.id).indexOf(id);
    //this.setState(state=>{
      //let{names} = state;
      //names[index].done = true;
      //return names
    //})
  //}
  
  deleteTask = id =>{
  this.setState({
  names:this.state.names.filter(name=>name.id!==id)
}) 

  }
  addName = name =>{
    this.setState(state=>{
      let{ names } = state;
      names.push({
        id:names.length,
        title:name,
        done:false
      })
      return name
    })
  }
  render() {
    const{names} = this.state
    const activeTask = names.filter((completed)=>completed.done)
    const inProg = names.filter((completed) => !completed.done)
    return (
      
      <div className='App'>
        
        <h1 className='tasks'>Names:{inProg.length}</h1>
        <Add addName={this.addName}></Add>
        {[...inProg, ...activeTask].map((name)=> (
        <Enter 
        names={name} 
        key={name.id}
        deleteTask={()=> this.deleteTask(name.id)}
        doneTask={()=> this.doneTask(name.id)}>
        </Enter>
        ))}
        
      </div>
    )
  }
}

