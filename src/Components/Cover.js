import React from "react";
import PropTypes from "prop-types";
import styled from  "styled-components";

const Container = styled.span`
	display: block;
	border-radius: 5px;
	img {
		width: 100%;
	}
`;

const Cover = ({ url, alt }) => (
	<Container className="cover">
		<img src={url} alt={alt ? `${alt} poster` : "poster" } />
	</Container>
)

Cover.prototype = {
	url: PropTypes.string,
	alt: PropTypes.string
}

export default Cover;