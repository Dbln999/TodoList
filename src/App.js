
import './App.css';

import React, { Component }  from 'react'
import Enter from './Enter';
import Add from './Add';
export default class App extends Component {
  constructor() {
    super()
  
    this.state = {
       names:[
        {title:'Danja', id:0, done:false, time: new Date().toISOString().slice(0,10)},
        {title:'Nikita', id:1, done:false, time: new Date().toISOString().slice(0,10)}
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
  addName = (name, time) =>{
      this.state.names.push({
        id:Date.now(),
        title:name,
        done:false,
        time:time
      
    })
    this.setState({names:this.state.names})
  }
  render() {
    const{names} = this.state
    const inProg = names.filter((completed) => !completed.done)
    const active = names.filter(compl => compl.done)
    return (
      
      <div className='App'>
        
        <h1 className='tasks'>Todos: {names.length}</h1>
        <Add addName={this.addName} ></Add>
        
        {[...inProg, ...active].map((name)=> (
        <Enter 
        
        names={name} 
        time={name.time}
        key={name.id}
        deleteTask={()=> this.deleteTask(name.id)}
        >
        </Enter>
        ))}
        
      </div>
    )
  }
}

