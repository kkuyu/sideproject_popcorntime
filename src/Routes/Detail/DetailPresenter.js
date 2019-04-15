import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";

import BackDrop from "Components/BackDrop";
import Cover from "Components/Cover";
import Star from "Components/Star";
import SubCoverList from "Components/SubCoverList";
import Review from "Components/Review";
import VideoList from "Components/VideoList";

const Container = styled.div`
	.more {
		position: absolute;
		top: 168px;
		right: 50px;
		padding-bottom: 1px;
		border-bottom: 1px solid transparent;
		cursor: pointer;
		&:hover {
			font-weight: 600;
			border-color: #ecce40;
		}
	}
`;

const MainDetail = styled.div`
`;

const SubDetail = styled.div`
`;

const DetailPresenter = ({ result, review, loading, isMovie=true, handleClick, isToggleOn, error }) => (
	loading ? <>
		<Helmet>
			<title>Loading | Movieapp</title>
		</Helmet>
		<Loader />
	</> : <>
		<Helmet>
			<title>{isMovie ? result.original_title : result.original_name} | Movieapp</title>
		</Helmet>
		<Container className="sub-container column-left">
			<MainDetail className="main-detail">
				<Cover url={result.poster_path ? `https://image.tmdb.org/t/p/w342${result.poster_path}` : require("../../assets/noPoster_780.jpg")} alt={isMovie ? result.original_title : result.original_name} />
				<h2 className="main-title">{isMovie ? result.original_title : result.original_name}</h2>
				<div className="info-list">
					<Star average={result.vote_average} averageFloor={Math.floor(result.vote_average)} />
					<span className="date">{isMovie ? (result.release_date && result.release_date.substring(0,4)) : (result.first_air_date && result.first_air_date.substring(0,4))}</span>
					<span className="time">{isMovie ? result.runtime : (result.episode_run_time && result.episode_run_time[0])} min</span>
					{result.imdb_id && <span className="link"><a href={`https://www.imdb.com/title/${result.imdb_id}`} target="_blank" rel="noopener noreferrer">imdb</a></span> }
					{result.homepage && <span className="link"><a href={result.homepage} target="_blank" rel="noopener noreferrer">homepage</a></span> }
				</div>
				<div className="overview">
					{ result.genres && <span className="genre">[ {result.genres.map((genre, index) => index === result.genres.length - 1 ? genre.name : `${genre.name} / `)} ]</span> }
					{ result.overview && <p className="story">{result.overview}</p> }
				</div>
			</MainDetail>
			<SubDetail className="sub-detail">
				{isMovie ? (<>
					<h3 className="sub-title">Collection</h3>
					{ result.belongs_to_collection ? <SubCoverList collection={result.belongs_to_collection} isMovie={isMovie} /> : <p>No registered content.</p> }
				</>) : (<>
					<h3 className="sub-title">Season</h3>
					{ result.seasons.length ? <SubCoverList seasons={result.seasons} tvId={result.id} isMovie={isMovie} /> : <p>No registered content.</p> }
				</>)}

				<h3 className="sub-title">Review</h3>
				{review.length ? <Review review={review} /> : <p>No registered content.</p> }
			</SubDetail>
		</Container>
		<Container className={ isToggleOn ? "sub-container column-right" : "sub-container column-right__open" }>
			<h3 className="sub-title">Videos</h3>
			{result.videos.results.length ? <VideoList videos={result.videos.results} isToggleOn={isToggleOn} /> : <p>No registered content.</p>}
			{result.videos.results.length > 2 && <button className="more" onClick={handleClick}>{ isToggleOn ? 'More' : 'Close' }</button>}
		</Container>
		<BackDrop className="backdrop" bgurl={result.backdrop_path} />
	</>
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