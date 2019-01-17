import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {'todoList' : [1, 2, 3, 4, 5]};
  }

  render() {
    const itemList = this.state.todoList.map((item, index)=>
      <li class="list-group-item" key={index}>
        <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <span>Learning React JS with VSCode</span>
              <span>Again</span>
            </div>
            <span>Remove</span>
        </div>
      </li>
    );

    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" style={{fontWeight:'bold'}} href="#">ReactJS Debug</a>
        </nav>

        <div className="container-fluid">
            <div className="row justify-content-center mt-2">
                <div className="col-6 rounded">
                    <div class="card">
                      <div class="card-body bg-secondary d-flex justify-content-center align-items-center">
                          <input class="form-control form-control-lg col-9 mr-1" type="text" placeholder="Add New Todo" />
                          <button type="button" class="btn btn-lg btn-secondary ">Add Todo</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid">
            <div className="row justify-content-center mt-4">
              <div className="col-6">
                <div class="card">
                  <div class="card-header" style={{fontWeight:'bold'}}>Todo List</div>
                  <ul class="list-group list-group-flush">
                    {itemList}
                  </ul>
                </div>
              </div>
            </div>
        </div>

      </React.Fragment>
    );
  }
}




export default App;
