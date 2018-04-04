import React from "react";
import CityListItem from "./city_list_item";
import { List } from "react-virtualized";

const CityList = props => {
  function rowRenderer({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style // Style object to be applied to row (to position it)
  }) {
    return (
      <div key={key} style={style}>
        <CityListItem key={index} title={props.cities[index].city} />
      </div>
    );
  }

  return (
    <List
      className="list-group"
      height={1000}
      rowCount={props.cities.length}
      rowHeight={40}
      width={800}
      rowRenderer={rowRenderer}
      overscanRowCount={10}
    />
  );
};

export default CityList;
