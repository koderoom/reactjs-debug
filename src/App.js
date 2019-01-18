import React, { Component } from 'react';
import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import {faReact} from '@fortawesome/free-brands-svg-icons';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    let title = "React JS Debugging";

    let todoList = [];
    todoList.push({'data':'Learn React JS debugging in VSCode Editor', 'ts' : new Date()});
    todoList.push({'data':'Learn React JS debugging in Chrome Dev Tools', 'ts' : new Date()});
    todoList.push({'data':'Learn React Native debugging in VSCode Editor', 'ts' : new Date()});
    todoList.push({'data':'Learn React Native debugging in Chrome Dev Tools', 'ts' : new Date()});

    this.state = {'title':title, 'todoList' : todoList, 'newTodo':''};
    
    // Event binding
    this.handleChange = this.handleChange.bind(this);
    this.addNewTodo = this.addNewTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  handleChange(event) {
    this.setState({'newTodo': event.target.value});
  }

  /**
   * ADD NEW TODO TASK
   */
  addNewTodo() {
    console.log('Add', new Date());

    if(this.state.newTodo.length > 0) {
      let newTodo = {'data' : this.state.newTodo, 'ts': new Date()};
      this.state.todoList.splice(0, 0, newTodo);

      this.setState({'newTodo': '', 'todoList' : this.state.todoList});
    }
  }

  /**
   * Remove a task.
   * @param {*} index 
   */
  removeTodo(index) {
    console.log('Remove', index, new Date());

    this.state.todoList.splice(index, 1);
    this.setState({'todoList' : this.state.todoList});
  }


  /**
   * UI RENDERING COMPONENT
   */
  render() {
    const itemList = this.state.todoList.map((item, index)=>
        <li className="list-group-item" key={index}>
          <div className="d-flex justify-content-between">
              <div className="d-flex flex-column">
                <span className='text-capitalize'>{item.data}</span>
                <span style={{fontSize:'x-small'}}>{moment(item.ts).format('YYYY-MM-DD HH:mm:ss')}</span>
              </div>
              <FontAwesomeIcon onClick={()=>{this.removeTodo(index)}} icon={faTrashAlt} size="lg" color='red' style={{opacity:'.7', cursor:'pointer'}}/>
          </div>
        </li>
    );

    return (
      <React.Fragment>
        
        {/* UI ELEMENT NAVBAR HEADER */}
        <nav className="navbar navbar-dark bg-dark">
          <div>
            <FontAwesomeIcon icon={faReact} size="lg" color="white" className="slow-spin" />
            <a className="ml-1 navbar-brand" style={{fontWeight:'bold'}} href="#">{this.state.title}</a>
          </div>
        </nav>

        {/** UI Elemnent NewTodo */}
        <div className="container-fluid">
            <div className="row justify-content-center mt-1">
                <div className="col-6 rounded">
                    <div className="card">
                      <div className="card-body bg-secondary d-flex justify-content-center align-items-center">
                          <input value={this.state.newTodo} onChange={this.handleChange} className="form-control form-control-lg col-9 mr-1" type="text" placeholder="Add New Todo" />
                          <button type="button" className="btn btn-lg btn-secondary" onClick={this.addNewTodo}>Add Todo</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>

        {/** UI ELEMENT LIST */}
        <div className="container-fluid">
            <div className="row justify-content-center mt-1">
              <div className="col-6">
                <div className="card">
                  <div className="card-header bg-secondary h4 text-light">Todo List</div>
                  <ul className="list-group list-group-flush">
                    {itemList}
                  </ul>
                </div>
              </div>
            </div>
        </div>

        {/**UI ELEMENT FOOTER */}
        <nav className="navbar navbar-dark bg-dark justify-content-center text-light fixed-bottom">
            Made with Love <span className="ml-1"> &hearts;</span>
        </nav>
      </React.Fragment>
    );
  }
}

export default App;
