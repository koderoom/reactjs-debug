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
                  <div class="card-header">
                    Todo List
                  </div>
                  <div class="card-body">
                    <blockquote class="blockquote mb-0">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                      <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
        </div>

      </React.Fragment>
    );
  }
}

export default App;
