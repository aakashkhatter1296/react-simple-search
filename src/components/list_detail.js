import React from "react";

const style = {
	marginTop: '15px'
};

const ListDetail = props => {
	return (
		<div className="list-detail" style={style}>
			<h3 style={style}>{props.title}</h3>
		</div>
	);
};

export default ListDetail;
