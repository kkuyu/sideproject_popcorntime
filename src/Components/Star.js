import React from "react";
import PropTypes from "prop-types";
import styled from  "styled-components";

const Container = styled.span`
	.fa-star {
		margin-right: 3px;
		font-size: 13px;
	}
	.fas {
		color: #ecce40;
	}
	&.half {
		.far:first-child,
		.fas + .far {
			color: #ecce40;
		}
	}

	@media (max-width: 768px) {
		.fa-star {
			font-size: 12px;
		}
	}
`;

const Star = ({ average, averageFloor }) => (
	<Container className={ (averageFloor%2) !== 0 ? "star half" : "star" }>
		<i className={ (averageFloor/2) >= 1 ? "fas fa-star" : "far fa-star" } />
		<i className={ (averageFloor/2) >= 2 ? "fas fa-star" : "far fa-star" } />
		<i className={ (averageFloor/2) >= 3 ? "fas fa-star" : "far fa-star" } />
		<i className={ (averageFloor/2) >= 4 ? "fas fa-star" : "far fa-star" } />
		<i className={ (averageFloor/2) >= 5 ? "fas fa-star" : "far fa-star" } />
		<em> {average}</em>
	</Container>
)

Star.prototype = {
	average: PropTypes.number,
	averageFloor: PropTypes.number
}

export default Star;