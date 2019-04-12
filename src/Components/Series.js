import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Cover from "Components/Cover";

const Container = styled.div`
	position: relative;
	a {
		display: inline-block;
		margin-right: 10px;
		width: 100px;
		vertical-align: middle;
		overflow: hidden;
		border: 3px solid transparent;
		border-radius: 10px;
		transition: border 0.1s ease-in-out;
		&:hover {
			border-color: #ecce40;
		}
	}
`;

const SLink = styled(Link)``;

const Series = ({ collection, tvId, seasons, isMovie }) => (<>
		<Container className="series">
			{ isMovie ? <>
				<SLink to={`/movie/collection/${collection.id}`}>
					<Cover url={ collection.poster_path ? `https://image.tmdb.org/t/p/w342${collection.poster_path}` : require("../assets/noPoster_780.jpg") } alt={ collection.name } />
				</SLink>
			</> : <>
				{seasons.map((season, index) => (
					<SLink to={`/tv/${tvId}/season/${season.season_number}`} key={index}>
						<Cover url={ season.poster_path ? `https://image.tmdb.org/t/p/w342${season.poster_path}` : require("../assets/noPoster_780.jpg") } alt={ season.name } />
					</SLink>
				))}
			</>}
		</Container>
	</>
);

Series.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	imageUrl: PropTypes.string,
	seasons: PropTypes.array,
	isMovie: PropTypes.bool
};

export default Series;