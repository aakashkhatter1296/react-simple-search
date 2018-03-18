import React from "react";
import CityListItem from "./city_list_item";

const CityList = props => {
	const cityListItems = props.cities.map(obj => {
		return <CityListItem key={obj.index} title={obj.city} />;
	});

	return <ul>{cityListItems}</ul>;
};

export default CityList;
