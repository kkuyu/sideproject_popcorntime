import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";

const Container = styled.div`
	position: relative;
	width: 100%;
	height: calc(100vh - 50px);
	padding: 50px;
	.contnet {
		position: relative;
		display:flex;
		width: 100%;
		height: 100%;
		z-index: 1;
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
		.itemContainer {
			margin: 20px 0;
		}
		.item {
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
		.overview {
			font-size: 12px;
			line-height: 1.5;
			opacity: 0.7;
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

const DetailPresenter = ({ result, loading, error }) => (
	loading ? <Loader /> : (
		<Container>
			<BackDrop className="backDrop" bgUrl={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
			<div className="contnet">
				<Cover className="cover" bgUrl={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : require("../../assets/noPosterSmall.png")} />
				<div className="data">
					<h3 className="title">{result.original_title ? result.original_title : result.original_name}</h3>
					<div className="itemContainer">
						<span className="item">{result.release_date ? result.release_date.substring(0,4) : result.first_air_date.substring(0,4)}</span>
						<span className="item">{result.runtime ? result.runtime : result.episode_run_time[0]} min</span>
						<span className="item">{result.genres && result.genres.map((genre, index) => index === result.genres.length - 1 ? genre.name : `${genre.name} / `)}</span>
					</div>
					<p className="overview">{result.overview}</p>
				</div>
			</div>
		</Container>
	)
);

DetailPresenter.propTypes = {
	result: PropTypes.object,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string
};

export default DetailPresenter;