import React, { Component } from "react";

const style = {
	margin: '25px',
	width: '200px'
};

const inputStyle = {
	width: '200px',
	height: '40px',
	fontSize: '20px'
};

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: "" };
	}

	onInputChange(term) {
		this.setState({ term });
		this.props.onSearchTermChange(term);
	}

	render() {
		return (
			<div className="search-bar" style={style}>
				<input
					style={inputStyle}
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)}
				/>
			</div>
		);
	}
}

export default SearchBar;
