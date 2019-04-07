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

const Season = ({ id, seasons }) => (
	<Container>
		{seasons.map((season, index) => (
			<SLink to={`/tv/${id}/season/${season.season_number}`} key={index}>
				<div className="ImageContainer">
					<ThumImage className="thumImage" imageUrl={ season.poster_path ? `https://image.tmdb.org/t/p/w300${season.poster_path}` : require("../assets/noPosterSmall.png") } />
					<div className="name">{season.name}</div>
				</div>
			</SLink>
		))}
	</Container>
);

Season.propTypes = {
	id: PropTypes.number,
	seasons: PropTypes.array
};

export default Season;