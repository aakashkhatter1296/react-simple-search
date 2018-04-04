import React from "react";

const CityListItem = props => {
	return (
		<div className="list-detail list-group-item">
			<h6>{props.title}</h6>
		</div>
	);
};

export default CityListItem;
