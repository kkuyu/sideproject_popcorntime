import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Cover from "Components/Cover";

const Container = styled.div`
	.inner {
		position: relative;
		margin: -5px;
	}
	li {
		display: inline-block;
		padding: 5px;
		width: 100px;
		vertical-align: middle;
	}

	@media (max-width: 768px) {
		.inner {
			margin: -3px;
		}
		li {
			padding: 3px;
			width: 82px;
		}
	}
`;

const SLink = styled(Link)`
	border: 3px solid rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	transition: border 0.1s ease-in-out;
	overflow: hidden;
	&:hover {
		border-color: #ecce40;
	}
`;

const SubCoverList = ({ collection, tvId, seasons, isMovie }) => (
	<Container>
		<ul className="inner">
			{ isMovie ? (
				<li>
					<SLink to={`/movie/collection/${collection.id}`}>
						<Cover url={ collection.poster_path ? `https://image.tmdb.org/t/p/w342${collection.poster_path}` : require("../assets/noPoster_780.jpg") } alt={ collection.name } />
					</SLink>
				</li>
			) : <>
				{ seasons.map((season, index) => (
					<li key={index}>
						<SLink to={`/tv/${tvId}/season/${season.season_number}`}>
							<Cover url={ season.poster_path ? `https://image.tmdb.org/t/p/w342${season.poster_path}` : require("../assets/noPoster_780.jpg") } alt={ season.name } />
						</SLink>
					</li>
				)) }
			</>}
		</ul>
	</Container>
);

SubCoverList.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	imageUrl: PropTypes.string,
	seasons: PropTypes.array,
	isMovie: PropTypes.bool
};

export default SubCoverList;