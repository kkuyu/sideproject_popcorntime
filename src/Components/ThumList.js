import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from  "styled-components";

import Cover from "Components/Cover";
import Star from "Components/Star";

const Container = styled.div`
	.inner {
		margin: -20px;
		&:after {
			content: "";
			display: block;
			clear: both;
		}
	}
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
		width: 110px;
	}
	.info {
		float: left;
		width: calc(100% - 110px);
		padding-left: 20px;
		.name {
			font-size: 16px;
			font-weight: 600;
		}
		.star {
			display: block;
			margin-top: 10px;
		}
		.overview {
			margin-top: 10px;
			line-height: 1.3;
		}
	}

	@media (max-width: 1600px) {
		.inner {
			margin: -10px 0;
		}
		li {
			width: 100%;
			padding: 10px 0;
		}
	}

	@media (max-width: 768px) {
		li + li {
			margin-top: 20px;
		}
		.thum {
			width: 82px;
		}
		.info {
			width: calc(100% - 82px);
		}
	}
`;

const SLink = styled(Link)`
	&:hover .name {
		text-decoration: underline;
	}
`;

const ThumList = ({ result, isMovie  }) => (
	<Container>
		<ul className="inner">
			{ result.parts && result.parts.length > 0 && result.parts.map((part, index) =>
				<li key={index}>
					<SLink to={`/movie/${part.id}`}>
						<div className="thum">
							<Cover url={part.poster_path ? `https://image.tmdb.org/t/p/w342${part.poster_path}` : require("../assets/noPoster_300.jpg")} alt={part.title} />
						</div>
						<div className="info">
							<strong className="name">{part.title} <em className="year">{part.release_date && `(${part.release_date.substr(0, 4)})`}</em></strong>
							<Star average={part.vote_average} averageFloor={Math.floor(part.vote_average)} />
							<p className="overview">{part.overview.length > 350 ? `${part.overview.substr(0, 350)}...` : part.overview}</p>
						</div>
					</SLink>
				</li>
			)}

			{result.episodes && result.episodes.length > 0 && result.episodes.map((episode, index) =>
				<li key={index}>
					<div className="thum">
						<Cover url={episode.still_path ? `https://image.tmdb.org/t/p/w342${episode.still_path}` : require("../assets/noPicture_300.jpg")} alt={episode.name} />
					</div>
					<div className="info">
						<strong className="name">{episode.episode_number}. {episode.name} <em className="year">{episode.air_date && `(${episode.air_date.substr(0, 4)})`}</em></strong>
						<Star average={episode.vote_average} averageFloor={Math.floor(episode.vote_average)} />
						<p className="overview">{episode.overview.length > 350 ? `${episode.overview.substr(0, 350)}...` : episode.overview}</p>
					</div>
				</li>
			)}
		</ul>
	</Container>
)

ThumList.prototype = {
	result: PropTypes.object
}

export default ThumList;