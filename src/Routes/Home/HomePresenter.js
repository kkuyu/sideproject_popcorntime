import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import MainSection from "Components/MainSection";
import MainPoster from "Components/MainPoster";
import Message from "Components/Message";

const Container = styled.div`
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, loading, error }) => (
	<>
		<Helmet>
			<title>Movies | Movieapp</title>
		</Helmet>
		{loading ? <Loader /> : (
			<Container className="main-container">
				{ nowPlaying && nowPlaying.length > 0 && <MainSection title="Now Playing"> { nowPlaying.map(movie => (
					<MainPoster key={movie.id} id={movie.id} imageUrl={movie.poster_path} title={movie.original_title} rating={movie.vote_average} year={movie.release_date && movie.release_date.substring(0,4)} isMovie={true} />
				)) } </MainSection> }
				{ upcoming && upcoming.length > 0 && <MainSection title="Upcomfing Movies"> { upcoming.map(movie => (
					<MainPoster key={movie.id} id={movie.id} imageUrl={movie.poster_path} title={movie.original_title} rating={movie.vote_average} year={movie.release_date && movie.release_date.substring(0,4)} isMovie={true} />
				)) } </MainSection> }
				{ popular && popular.length > 0 && <MainSection title="Popular Movies"> { popular.map(movie => (
					<MainPoster key={movie.id} id={movie.id} imageUrl={movie.poster_path} title={movie.original_title} rating={movie.vote_average} year={movie.release_date && movie.release_date.substring(0,4)} isMovie={true} />
				)) } </MainSection> }
				{ error && <Message text={error} color="#e74c3c" /> }
			</Container>
		)}
	</>
);

HomePresenter.propTypes = {
	nowPlaying: PropTypes.array,
	upcomfing: PropTypes.array,
	popular: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string
};

export default HomePresenter;