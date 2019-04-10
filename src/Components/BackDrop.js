import React from "react";
import PropTypes from "prop-types";
import styled from  "styled-components";

const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	opacity: 0.1;
	z-index: -1;
	background-image: url(${props => props.bgUrl});
`;

const BackDrop = ({ bgurl }) => (
	<Container className="backdrop" bgUrl={`https://image.tmdb.org/t/p/original${bgurl}`} />
)

BackDrop.prototype = {
	bgUrl: PropTypes.string,
}

export default BackDrop;