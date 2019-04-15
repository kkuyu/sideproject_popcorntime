import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Cover from "Components/Cover";

const Container = styled.ul`
	position: relative;
	li {
		display: inline-block;
		margin-right: 10px;
		width: 100px;
		border: 3px solid transparent;
		border-radius: 10px;
		transition: border 0.1s ease-in-out;
		vertical-align: middle;
		overflow: hidden;
		&:hover {
			border-color: #ecce40;
		}
	}
`;

const SLink = styled(Link)``;

const SubCoverList = ({ collection, tvId, seasons, isMovie }) => (<>
		<Container className="sub-cover-list">
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
		</Container>
	</>
);

SubCoverList.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	imageUrl: PropTypes.string,
	seasons: PropTypes.array,
	isMovie: PropTypes.bool
};

export default SubCoverList;