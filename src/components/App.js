import React, { Component } from "react";
import { cities } from "../assets/cities-50k";
import SearchBar from "./search_bar";
import CityList from "./cities_list";
import ListDetail from "./list_detail";
import _ from 'lodash';
import { List } from 'react-virtualized/dist/commonjs/List'

const style = {
	fontSize: '20px',
	margin: '25px'
};

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			cities: cities,
			filterString: ''
		};
	}

	findCity (filterString) {
		let t1 = Date.now();
		if(_.isEmpty(filterString)) {
			console.log('Time taken to bail out', Date.now() - t1);
			return cities;
		}

		let results = _.filter(cities, (city) => {
			return city.city.match(filterString);
		});
		let t2 = Date.now();
		console.log('Time Taken for filtering', t2 - t1);
		return results;
	}

	FilterList(filterString) {
		if (!_.isEmpty(filterString)) {
			let t1 = Date.now();
			this.setState({ 
				cities: this.findCity(filterString),
				filterString
			}, () => {
			console.log('Time taken to set the State', Date.now() - t1);
		});
		}
		else {
			this.setState({ filterString });
		}
	}

	getCities () {
		/**
		 * Early return without setting the state
		 */
		if(_.isEmpty(this.state.filterString)) {
			return cities;
		}
		return this.state.cities;
	}

	rowRenderer ({
		key,         // Unique key within array of rows
		index,       // Index of row within collection
		isScrolling, // The List is currently being scrolled
		isVisible,   // This row is visible within the List (eg it is not an overscanned row)
		style        // Style object to be applied to row (to position it)
	}) {
		return (
			<div
				key={key}
				style={style}
			>
				<ListDetail key={index} title={cities[index].city} />;
			</div>
		)
	}

	render() {
		return (
			<div className="App">
				<SearchBar onSearchTermChange={_.debounce(term => this.FilterList(term), 300)} />
				{
					!_.isEmpty(this.state.filterString) ?
						<CityList cities={this.state.cities} /> :
						<List
							width={800}
							height={1000}
							rowCount={cities.length}
							rowHeight={20}
							rowRenderer={this.rowRenderer}
							style={style}
						/>
				}
			</div>
		);
	}
}

export default App;
