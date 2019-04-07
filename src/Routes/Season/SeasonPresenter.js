import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";


const Container = styled.div `
	position: relative;
	height: calc(100vh - 50px);
	width: 100vw;
	padding: 50px;
	.content {
		overflow: hidden;
		z-index: 1;
		width: 100%;
		height: 100%;
		display: flex;
		position: relative;
	}
	.cover {
		width: 30%;
		height: 100%;
		border-radius: 5px;
		background-size: cover;
		background-position: center center;
	}
	.data {
		width: 70%;
		margin-left: 10px;
		.title {
			font-size: 32px;
		}
		.infoContainer {
			margin: 20px 0;
		}
		.info {
			&:not(:last-child):after {
				content:"";
				display: inline-block;
				width: 2px;
				height: 2px;
				margin: 5px 10px 0;
				background: #fff;
				vertical-align: top;
			}
		}
		.link {
			padding: 0 3px;
			color: #222;
			font-weight: 600;
		}
		.overview {
			font-size: 12px;
			line-height: 1.5;
			opacity: 0.7;
		}
		.listContainer {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			width: 100%;
			height: 100%;
		}
		.list {
			display: flex;
			width: 100%;
			min-height: 25%;
			margin-bottom: 20px;
		}
		.thumImage {
			height: 100px;
			width: 100px;
			background-size: cover;
			background-position: center center;
			border-radius: 10px;
			margin-right: 20px;
		}
	}
	.backDrop {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-size: cover;
		background-position: center center;
		filter: blur(3px);
		opacity: 0.5;
		z-index: 0;
	}
`;

const BackDrop = styled.div`
	background-image: url(${props => props.bgUrl});
`;

const Cover = styled.div`
	background-image: url(${props => props.bgUrl});
`;

const SLink = styled(Link)`
`;
const ThumImage = styled.div `
  background-image: url(${props => props.bgUrl});
`;

const SubPoster = styled.div`
background-image: url(${props => props.bgUrl});
background-size: cover;
background-position: center center;
border-radius: 5px;
height: 100%;
width: 100%;
`;

const SeasonPresenter = ({ result, error, loading }) =>
	loading ? <>
	<Helmet>
		<title>Loading | Movieapp</title>
	</Helmet>
	<Loader />
	</> : (
	<Container>
		<Helmet>
			<title>Season | Movieapp</title>
		</Helmet>
		<BackDrop className="backDrop" bgUrl={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
		<div className="content">
			<Cover className="cover" bgUrl={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : require("../../assets/noPosterSmall.png")} />
			<div className="data">
				<h3 className="title">{result.name}</h3>
				<p className="overview">{result.overview}</p>
				<div className="listContainer">
					{result.episodes && result.episodes.length > 0 && result.episodes.map((episode, index) => <>
						<ThumImage className="thumImage" bgUrl={ episode.still_path ? `https://image.tmdb.org/t/p/w300${episode.still_path}` : require("../../assets/noPosterSmall.png") } />
						<div className="subInfo">
							<strong className="name">{episode.episode_number}. {episode.name} {episode.air_date && `(${episode.air_date.substr(0, 4)})`}</strong>
							<p className="SubOverView">
								{episode.overview.length > 350 ? `${episode.overview.substr(0, 350)}...` : episode.overview}
							</p>
						</div>
					</>)}
				</div>
			</div>
		</div>
	</Container>
);

export default SeasonPresenter;