import React, { Component } from "react";
import { cities } from "../assets/cities-50k";
import SearchBar from "./search_bar";
import CityList from "./cities_list";
import _ from "lodash";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { cities: cities };
	}

	// Function to search the list, and put the results into the state
	filterList(filterString) {
		if (_.isEmpty(filterString)) {
			this.setState({
				cities: cities
			});
		}
		// constructing the regex string for case-insensitive matching
		var regex = new RegExp(_.escapeRegExp(filterString), "i");
		this.setState({
			cities: _.filter(cities, city => {
				//console.log(city.city + " = " + city.city.match(regex));
				return city.city.match(regex);
			})
		});
	}

	render() {
		// Debounce function so that the filter function is called only after 300ms
		const filter = _.debounce(term => {
			this.filterList(term);
		}, 300);

		return (
			<div className="App">
				<SearchBar onSearchTermChange={term => filter(term)} />
				<CityList cities={this.state.cities} />
			</div>
		);
	}
}

export default App;
