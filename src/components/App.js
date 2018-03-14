import React, { Component } from "react";
import { cities } from "../assets/cities-10k";
import SearchBar from "./search_bar";
import CityList from "./cities_list";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { cities: cities };
	}

	FilterList(filterString) {
		this.setState({
			cities: cities.filter(city => {
				return city.city.match(filterString);
			})
		});
	}

	render() {
		return (
			<div className="App">
				<SearchBar onSearchTermChange={term => this.FilterList(term)} />
				<CityList cities={this.state.cities} />
			</div>
		);
	}
}

export default App;
