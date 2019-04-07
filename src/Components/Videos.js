import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	margin-bottom: 20px;
	.imageContainer {
		display: flex;
		align-items: center;
	}
	.video {
		height: 200px;
		width: 400px;
	}
	.name {
		display: block;
		font-size: 14px;
		opacity: 0.8;
	}
`;
const ThumImage = styled.div`
	background-image: url(${props => props.imageUrl});
`;

const SLink = styled(Link)``;

const Videos = ({ videos }) => (
	<Container>
		<div className="VideoContainer">
			{videos.map( (video, index) => (<>
					<iframe className="video" key={index} src={`https://www.youtube.com/embed/${video.key}`} controls allowFullScreen />
					<span>{video.name}</span>
				</>)
			)}
		</div>
	</Container>
);

Videos.propTypes = {
	videos: PropTypes.array
};

export default Videos;