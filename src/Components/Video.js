import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.ul`
	position: relative;
	width: 100%;
	&:before {
		content: "";
		display: block;
		width: 100%;
		padding-bottom: 55.5%;
		background: #3c3c3c;
	}
	iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`;

const Video = ({ url, title }) => (
	<Container className="video">
		<iframe src={`https://www.youtube.com/embed/${url}`} title={title} controls allowFullScreen />
	</Container>
);

Video.propTypes = {
	videos: PropTypes.string
};

export default Video;