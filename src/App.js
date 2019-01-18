import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className={"main"}>
          <div className={"action"}>Action Bar</div>
          <div className={"tj"}>Test Jig</div>
          <div className={"ts"}>Test Suite</div>
          <div className={"tc"}>Test Case</div>
          <div className={"product"}>Product</div>
        </div>
        <div className={"jig_list"}>
          <div className={"test_jig"}>TJ1</div>
          <div className={"test_jig"}>TJ2</div>
          <div className={"test_jig"}>TJ3</div>
          <div className={"test_jig"}>TJ4</div>
          <div className={"test_jig"}>TJ5</div>
          <div className={"test_jig"}>TJ5</div>
          <div className={"test_jig"}>TJ5</div>
          <div className={"test_jig"}>TJ5</div>
          <div className={"test_jig"}>TJ5</div>
          <div className={"test_jig"}>TJ5</div>
          <div className={"test_jig"}>TJ5</div>
        </div>
      </div>
    );
  }
}

export default App;
