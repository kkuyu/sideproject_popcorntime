import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	width: 50%;
	margin-bottom: 20px;
	.title {
		width: 100%;
		font-size: 20px;
		font-weight: 300;
		margin-bottom: 20px;
	}
	.imageContainer {
		display: flex;
		align-items: center;
	}
	.thumImage {
		height: 100px;
		width: 100px;
		background-size: cover;
		background-position: center center;
		border-radius: 10px;
		margin-right: 20px;
	}
	.name {
		font-size: 14px;
		opacity: 0.8;
	}
`;
const ThumImage = styled.div`
	background-image: url(${props => props.imageUrl});
`;

const SLink = styled(Link)``;

const Collection = ({ id, title, imageUrl }) => (
	<Container>
		<h4 className="title">Collection</h4>
		<SLink to={`/collection/${id}`}>
			<div className="imageContainer">
				<ThumImage className="thumImage" imageUrl={ imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : require("../assets/noPosterSmall.png") } />
				<span className="name">{title}</span>
			</div>
		</SLink>
	</Container>
);

Collection.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	imageUrl: PropTypes.string
};

export default Collection;