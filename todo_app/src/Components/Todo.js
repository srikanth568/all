import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    aboutComplete(id){
        console.log("complete",id)
        this.props.handleComplete(id)
    }
    
    render() {
        console.log("prop",this.props)
        return (
            <div className='todo'>
                <p style={{textDecoration:this.props.todo.complete ? 'line-through' : null}}>{this.props.todo.name}</p>
                <div className="status">
                    <button className="complete" style={{cursor:'pointer'}}onClick={()=>this.aboutComplete(this.props.todo.id)}>complete</button>
                    <button className="delete" style={{cursor:'pointer'}} onClick={()=>this.props.handleDelete(this.props.todo.id)}>X</button>               
                </div>
            </div>
        )
    }
}