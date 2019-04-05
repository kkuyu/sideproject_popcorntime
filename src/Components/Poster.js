import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from  "styled-components";

const Container = styled.div`
	font-size: 12px;
	.iamge-container {
		position: relative;
		margin-bottom: 5px;
		.image {
			height: 180px;
			border-radius: 4px;
			background-size: cover;
			background-position: center center;
			transition: opacity 0.1s ease-in-out;
		}
		.rating {
			position: absolute;
			bottom: 5px;
			right: 5px;
			color: #d2d2d2;
			opacity: 0;
			transition: opacity 0.2s ease-in-out;
		}
	}
	&:hover{
		.image{
			opacity: 0.3;
		}
		.rating {
			opacity: 1;
		}
	}
	.title {
		display: block;
		margin-bottom: 3px;
	}
	.year {
		font-size: 10px;
		color: #999;
	}
`;

const Image = styled.div`
	background-image: url(${props => props.bgUrl})
`;

const SLink = styled(Link)``;

const Poster = ({ id, imageUrl, title, rating, year, isMovie=false }) => (
	<SLink to={ isMovie ? `/movie/${id}` : `/show/${id}`}>
		<Container>
			<div className="iamge-container">
				<Image className="image" bgUrl={ imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : require("../assets/noPosterSmall.png") } />
				<span className="rating">
					<span rold="img" aria-label="rating">⭐️</span>
					{rating}/10
				</span>
			</div>
			<span className="title">{title.length > 18 ? `${title.substring(0,15)}...` : title }</span>
			<span className="year">{year}</span>
		</Container>
	</SLink>
)

Poster.prototype = {
	id: PropTypes.number.isRequired,
	imageUrl: PropTypes.string,
	title: PropTypes.string.isRequired,
	rating: PropTypes.number,
	year: PropTypes.string,
	isMovie: PropTypes.bool
}

export default Poster;