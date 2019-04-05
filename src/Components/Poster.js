import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from  "styled-components";

const Container = styled.div`

`;

const SLink = styled(Link)``;

const Poster = ({ id, imageUrl, title, rating, year, isMovie=false }) => (
	<SLink to={ isMovie ? `/movie/${id}` : `/show/${id}`}>
		<Container>
			<div className="iamge-container">
				<div className="image" bgUrl={imageUrl} />
				<span className="rating">
					<span rold="img" aria-label="rating">⭐️</span>
					{rating}/10
				</span>
			</div>
			<span className="title">{title}</span>
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