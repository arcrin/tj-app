import React, { Component } from 'react';
import './App.css';

import ActionBar from "./components/ActionBar/ActionBar";
import TestJig from "./components/TestJig/TestJig";

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className={"main"}>
					{/*<div className={"action"}>Action Bar</div>*/}
					<ActionBar/>
					<div className={"tj"}>Test Jig</div>
					<div className={"ts"}>Test Suite</div>
					<div className={"tc"}>Test Case</div>
					<div className={"product"}>Product</div>
				</div>
				<div className={"jig_list"}>
					<TestJig progress={60} pass_fail={"pass"}/>
					<TestJig progress={100} pass_fail={"pass"}/>
					<TestJig progress={50} pass_fail={"pass"}/>
					<TestJig progress={60} pass_fail={"pass"}/>
					<TestJig progress={84} pass_fail={"pass"}/>
					<TestJig progress={100} pass_fail={"fail"}/>
				</div>
			</div>
		);
	}
}

export default App;
