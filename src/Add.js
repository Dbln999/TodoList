import React, { Component } from 'react'

import './App.css';
class Add extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             input: '',
             date:''
        }
    }

    addText = () =>{
        const { input } = this.state
        const { date } = this.state;
        if(input.trim() || date){
            this.props.addName(input, date);
            this.setState({input: '', date:''})
        }

    }
    inpChange = event =>{
        this.setState({input:event.target.value})
    }
    dateChage = e =>{
        this.setState({date:e.target.value})
    }
    handleEnter = event =>{
        if(event.key ==='Enter')
            this.addText()
            
            
    }
    render() {
        const { input } = this.state
        const{ date } = this.state
        return (
            <div className='add'>
                <input className='addInp' onKeyPress={this.handleEnter} onChange={this.inpChange} value={input}/>
                <input className='dateInp' type='date' onChange={this.dateChage} value={date}/>
                <button className='addBtn'  onClick={this.addText}>ADD</button>
            </div>
        )
    }
}

export default Add;
