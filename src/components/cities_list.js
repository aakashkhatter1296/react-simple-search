import React from "react";
import ListDetail from "./list_detail";

const CityList = props => {
	const listDetailItems = props.cities.map(obj => {
		return <ListDetail key={obj.index} title={obj.city} />;
	});

	return <ul>{listDetailItems}</ul>;
};

export default CityList;
