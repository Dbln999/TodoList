import React, { Component } from 'react'

import './App.css';
class Add extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             input: ''
        }
    }

    addText = () =>{
        const { input } = this.state
        if(input){
            this.props.addName(input);
            this.setState({input: ''})
        }
    }
    
    inpChange = e =>{
        this.setState({input:e.target.value})
    }
    handleEnter = e =>{
        if(e.key ==='Enter')
            this.addName()
    }
    render() {
        const { input } = this.state
        return (
            <div className='add'>
                
                <input className='addInp' onKeyPress={this.handleEnter} onChange={this.inpChange} value={input}/>
                <button className='addBtn' onClick={this.addText}>ADD</button>
            </div>
        )
    }
}

export default Add;
