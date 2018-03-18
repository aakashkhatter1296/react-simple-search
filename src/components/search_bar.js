import React, { Component } from "react";

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: "" };
	}

	// Funciton called when the search term is changed.
	// Sets the current term in the state and calls the callback funtion to return the current search term
	onInputChange(term) {
		this.setState({ term });
		this.props.onSearchTermChange(term);
	}

	render() {
		return (
			<div className="search-bar">
				<input
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)}
				/>
			</div>
		);
	}
}

export default SearchBar;
