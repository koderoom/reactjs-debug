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
            <div className="row justify-content-center mt-1" >
                <div className="col-6 bg-secondary rounded d-flex justify-content-center align-items-center" style={{height:'100px', opacity:'.9'}}>
                    <input class="form-control form-control-lg col-10 mr-1" type="text" placeholder="Add New Todo" />
                    <button type="button" class="btn btn-secondary " style={{fontWeight:'bold'}}>Add Todo</button>
                </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
