import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.ul`
	li + li {
		margin-top: 20px;
	}
	&.half {
		margin-left: -10px;
		margin-right: -10px;
		li {
			float: left;
			width: 50%;
			padding: 0 10px;
		}
		li:nth-child(2) {
			margin-top: 0;
		}
		li:nth-child(2n+1) {
			clear: both;
		}
	}
	.name {
		margin-top: 10px;
		padding-left: 22px;
		text-indent: -11px;
		line-height: 1.2;
		i {
			font-size: 15px;
			padding-right: 4px;
		}
	}
	.name:hover {
		text-decoration: underline;
		i {
			color: #ff0000;
		}
	}
`;

const VideoList = ({ videos, isToggleOn }) => (
	<Container className={ isToggleOn ? "video-list" : "video-list half"}>
		{videos.map((video, index) => ( index < ( isToggleOn ? 2 : videos.length ) && <>
			<li>
				<div className="video">
					<iframe src={`https://www.youtube.com/embed/${video.key}`} controls allowFullScreen />
				</div>
				<a className="name" href={`https://www.youtube.com/watch?v=${video.key}`} target="_blank"><i className="fab fa-youtube"></i>{video.name}</a>
			</li>
		</>))}
	</Container>
);

VideoList.propTypes = {
	videos: PropTypes.array,
	isToggleOn: PropTypes.bool
};

export default VideoList;