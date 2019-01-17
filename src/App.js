import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
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
                    <li class="list-group-item">
                      <div className="d-flex justify-content-between">
                          <div className="d-flex flex-column">
                            <span>Learning React JS with VSCode</span>
                            <span>Again</span>
                          </div>
                          <span>close</span>
                      </div>
                    </li>
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
