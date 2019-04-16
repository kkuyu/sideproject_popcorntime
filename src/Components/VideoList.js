import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Video from "Components/Video";

const Container = styled.div`
	.inner {
		margin: -10px;
		li {
			padding: 10px;
		}
		&:after {
			content: "";
			display: block;
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
	&.full {
		li {
			float: left;
			width: 50%;
		}
		li:nth-child(2n+1) {
			clear: both;
		}
	}

	@media (max-width: 1600px) {
		.inner {
			overflow-x: scroll;
			display: Block;
			white-space: nowrap;
			li {
				float: none;
				display: inline-block;
				width: 600px;
			}
			.name {
				text-overflow: ellipsis;
				overflow: hidden;
			}
		}
	}

	@media (max-width: 768px) {
		.inner li {
			width: 320px;
		}
	}
`;

const VideoList = ({ videos, isPrevVideo }) => (
	<Container className={ !isPrevVideo && "full" }>
		<ul className="inner">
			{videos.map((video, index) => ( index < ( isPrevVideo ? 2 : videos.length ) && 
				<li key={index}>
					<Video url={video.key} title={video.name} />
					<a className="name" href={`https://www.youtube.com/watch?v=${video.key}`} target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i>{video.name}</a>
				</li>
			))}
		</ul>
	</Container>
);

VideoList.propTypes = {
	videos: PropTypes.array,
	isPrevVideo: PropTypes.bool
};

export default VideoList;