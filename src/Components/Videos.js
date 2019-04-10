import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.ul`
	li + li {
		margin-top: 30px;
	}
	.video {
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
	}
	.name {
		position: relative;
		padding: 10px 0 10px 24px;
		line-height: 1.2;
		i {
			position: absolute;
			top: 8px;
			left: 0;
			font-size: 18px;
		}
		&:hover {
			i {
				color: #ff0000;
			}
		}
	}
`;


const Videos = ({ max, videos }) => (
	<Container className="VideoContainer">
		{videos.map((video, index) => ( index < ( max ? max : videos.length ) && <>
			<li key={index}>
				<div className="video">
					<iframe src={`https://www.youtube.com/embed/${video.key}`} controls allowFullScreen />
				</div>
				<a className="name" href={`https://www.youtube.com/watch?v=${video.key}`} target="_blank"><i className="fab fa-youtube"></i> {video.name}</a>
			</li>
		</>))}
	</Container>
);

Videos.propTypes = {
	max: PropTypes.string,	
	videos: PropTypes.array
};

export default Videos;