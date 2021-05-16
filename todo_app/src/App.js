import React, { Component } from 'react'
import './App.css';
import Todo from './Components/Todo.js';
import TodoForm from './Components/TodoForm';

export default class App extends Component {
  constructor(props) {
      super(props)
  
      this.state = {
        todo:[{id:1,name:'first',complete:false},{id:2,name:'second',complete:false},{id:3,name:'third',complete:false}]
           
      }
  }
  addTodo(todoText){
    console.log("uuu",todoText)
    let todos = [...this.state.todo]
    console.log("tood",todos)
    let id =todos[todos.length -1] ?  todos[todos.length-1].id+1 : 0;
    console.log("ididid",id)
    let newTodo = {
      id:id,
      name:todoText,
      complete:false
    }
    todos.push(newTodo)
    this.setState({todo:todos})
  }

  handleComplete(id){
    console.log("hc",id)
    // this.setState({})
    // let todo = [...this.state.todo]
    this.state.todo.filter(todo => {
      if(todo.id === id){
        todo.complete = true
      }
    })
    this.setState({todo:this.state.todo})
  }
  handleDelete(id){
    console.log("iii",id)
    this.state.todo.filter(todo => {
      if(todo.id == id){
        this.state.todo.splice(todo.id-1,1)
      }
    })
    console.log("kkk",this.state.todo)
    this.setState({todo:this.state.todo})
  }
  render(){
    console.log("ttt",this.state.todo)
    return (
      <div>
        <div className="developer">
          <span>developer</span>
          <br/>
          <p>srikanth damacharla</p>
        </div> 
        <div className="heading">         
          <h1>TODO MANAGEMENT IN REACT JS</h1>
          <div className="todos">
            {this.state.todo.map( todo =>(
              <Todo todo ={todo} handleComplete={(id)=>this.handleComplete(id)} handleDelete={(id)=>this.handleDelete(id)}/>
            ))}
          </div>
          <TodoForm todoTitle={(todoText)=>this.addTodo(todoText)}/>
        </div>
      </div>
    );
  }
}


