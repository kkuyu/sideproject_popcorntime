import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from  "styled-components";

import Cover from "Components/Cover";
import Star from "Components/Star";

const Container = styled.ul`
	margin: -20px;
	li {
		float: left;
		width: 50%;
		padding: 20px;
		&:nth-child(2n+1) {
			clear: both;
		}
	}
	.thum {
		float:left;
		width: 100px;
	}
	.info {
		float: left;
		width: calc(100% - 100px);
		padding-left: 20px;
	}
	.name {
		font-size: 16px;
	}
	.overview {
		margin-top: 10px;
		line-height: 1.3;
	}
	a:hover .name {
		text-decoration: underline;
	}
	&:after {
		content: "";
		display: block;
		clear: both;
	}
`;

const SLink = styled(Link)`
`;

const ThumList = ({ result, isMovie  }) => (
	<Container className="thum-list">
		{ result.parts && result.parts.length > 0 && result.parts.map((part, index) => <>
			<li>
				<SLink to={`/movie/${part.id}`}>
					<div className="thum">
						<Cover url={part.poster_path ? `https://image.tmdb.org/t/p/w342${part.poster_path}` : require("../assets/noPoster_300.jpg")} alt={part.title} />
					</div>
					<div className="info">
						<strong className="name">{part.title} <em className="year">{part.release_date && `(${part.release_date.substr(0, 4)})`}</em></strong>
						<p className="overview">{part.overview.length > 350 ? `${part.overview.substr(0, 350)}...` : part.overview}</p>
					</div>
				</SLink>
			</li>
		</>)}

		{result.episodes && result.episodes.length > 0 && result.episodes.map((episode, index) => <>
			<li>
				<div className="thum">
					<Cover url={episode.still_path ? `https://image.tmdb.org/t/p/w342${episode.still_path}` : require("../assets/noPicture_300.jpg")} alt={episode.name} />
				</div>
				<div className="info">
					<strong className="name">{episode.episode_number}. {episode.name} <em className="year">{episode.air_date && `(${episode.air_date.substr(0, 4)})`}</em></strong>
					<p className="overview">{episode.overview.length > 350 ? `${episode.overview.substr(0, 350)}...` : episode.overview}</p>
				</div>
			</li>
		</>)}
	</Container>
)

ThumList.prototype = {
	result: PropTypes.object
}

export default ThumList;