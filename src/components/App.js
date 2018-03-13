import React, { Component } from 'react';
import { countries } from "../assets/countries";
import SearchBar from "./search_bar";

class App extends Component {

	constructor(props){
		super(props);
	}
  render() {
    return (
      <div className="App">
      	<SearchBar />
      </div>
    );
  }
}

export default App;
