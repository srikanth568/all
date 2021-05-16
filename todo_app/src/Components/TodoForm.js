import React, { Component } from 'react'

export default class TodoForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todoText:''
        }
        this.sendTodo = this.sendTodo.bind(this)
    } 
    sendTodo(e){
        e.preventDefault();
        this.props.todoTitle(this.state.todoText)
        this.setState({todoText:''})
    }
    render() {
        return (
            <div className="Form"> 
            <form onSubmit={this.sendTodo}>
             <input type="text"
             value={this.state.todoText}
             onChange={(e)=>this.setState({todoText:e.target.value})}
             placeholder="please enter todo"
             /> 
             </form>  
            </div>
        )
    }
}
