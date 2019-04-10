import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";

import BackDrop from "Components/BackDrop";
import Cover from "Components/Cover";
import Star from "Components/Star";
import Series from "Components/Series";
import Review from "Components/Review";

import VideoList from "Components/VideoList";

const Container = styled.div`
	width: 70%;
	.backdrop {
		width: 70%;
	}
`;

const MainDetail = styled.div`
`;

const SubDetail = styled.div`
	.more {
		position: absolute;
		top: 150px;
		right: 50px;
	}
	&.fixed.open .video-list {
		& {
			margin: 15px -20px -20px -20px;
		}
		&:after {
			content: "";
			display: block;
			clear: both;
		}
		li {
			margin-top: 0;
			float: left;
			width: 50%;
			padding: 20px;
		}
		li:nth-child(2n+1) {
			clear: both;
		}
	}
`;

const DetailPresenter = ({ result, review, loading, isMovie=true, handleClick, isToggleOn, error }) => (
	loading ? <>
		<Helmet>
			<title>Loading | Movieapp</title>
		</Helmet>
		<Loader />
		</> : (
		<Container className="sub-container" isMovie={isMovie}>
			<Helmet>
				<title>{isMovie ? result.original_title : result.original_name} | Movieapp</title>
			</Helmet>

			<MainDetail className="main-detail">
				<Cover url={result.poster_path ? `https://image.tmdb.org/t/p/w342${result.poster_path}` : require("../../assets/noPoster_780.jpg")} alt={isMovie ? result.original_title : result.original_name} />
				<h2 className="main-title">{isMovie ? result.original_title : result.original_name}</h2>
				<div className="info-list">
					<Star average={result.vote_average} averageFloor={Math.floor(result.vote_average)} />
					<span className="date">{isMovie ? (result.release_date && result.release_date.substring(0,4)) : (result.first_air_date && result.first_air_date.substring(0,4))}</span>
					<span className="time">{isMovie ? result.runtime : (result.episode_run_time && result.episode_run_time[0])} min</span>
					{result.imdb_id && <span className="link"><a href={`https://www.imdb.com/title/${result.imdb_id}`} target="_blank">imdb</a></span> }
					{result.homepage && <span className="link"><a href={result.homepage} target="_blank">homepage</a></span> }
				</div>
				<div className="overview">
					{ result.genres && <span className="genre">{result.genres.map((genre, index) => index === result.genres.length - 1 ? genre.name : `${genre.name} / `)}</span> }
					{ result.overview && <p className="story">{result.overview}</p> }
				</div>
			</MainDetail>
			
			<SubDetail className="sub-detail">
				{isMovie ? (<>
					<h3 className="sub-title">Collection</h3>
					{ result.belongs_to_collection ? <Series collection={result.belongs_to_collection} isMovie={isMovie} /> : <p>No registered content.</p> }
				</>) : (<>
					<h3 className="sub-title">Season</h3>
					{ result.seasons.length ? <Series seasons={result.seasons} tvId={result.id} isMovie={isMovie} /> : <p>No registered content.</p> }
				</>)}
				<h3 className="sub-title">Review</h3>
				{review.length ? <Review review={review} /> : <p>No registered content.</p> }
			</SubDetail>

			
			
			<SubDetail className={ isToggleOn ? "sub-detail fixed" : "sub-detail fixed open"}>
				<h3 className="sub-title">Videos</h3>

				{result.videos.results.length && <>
					<VideoList videos={result.videos.results} max={ isToggleOn ? 2 : result.videos.results.length } />
					<button className="more" onClick={handleClick}>{ isToggleOn ? 'More' : 'Close' }</button>
				</> }

				{!result.videos.results.length && <p>No registered content.</p>}
			</SubDetail>

			<BackDrop className="backdrop" bgurl={result.backdrop_path} />
		</Container>
	)
);

DetailPresenter.propTypes = {
	result: PropTypes.object,
	review: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	isMovie: PropTypes.bool.isRequired,
	handleClick: PropTypes.func,
	isToggleOn: PropTypes.bool,
	error: PropTypes.string
};

export default DetailPresenter;