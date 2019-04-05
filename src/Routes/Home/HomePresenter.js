import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Sections";
import Poster from "Components/Poster";
import Message from "Components/Message";

const Container = styled.div`
	padding: 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, loading, error }) => (
	loading ? <Loader /> : (
		<Container>
			{ nowPlaying && nowPlaying.length > 0 && <Section title="Now Playing"> { nowPlaying.map(movie => <>
				<Poster key={movie.id} id={movie.id} imageUrl={movie.poster_path} title={movie.original_title} rating={movie.vote_average} year={movie.release_date && movie.release_date.substring(0,4)} isMovie={true} />
			</>) } </Section> }
			{ upcoming && upcoming.length > 0 && <Section title="Upcomfing Movies"> { upcoming.map(movie => <>
				<Poster key={movie.id} id={movie.id} imageUrl={movie.poster_path} title={movie.original_title} rating={movie.vote_average} year={movie.release_date && movie.release_date.substring(0,4)} isMovie={true} />
			</>) } </Section> }
			{ popular && popular.length > 0 && <Section title="Popular Movies"> { popular.map(movie => <>
				<Poster key={movie.id} id={movie.id} imageUrl={movie.poster_path} title={movie.original_title} rating={movie.vote_average} year={movie.release_date && movie.release_date.substring(0,4)} isMovie={true} />
			</>) } </Section> }
			{ error && <Message text={error} color="#e74c3c" /> }
		</Container>
	)
);

HomePresenter.propTypes = {
	nowPlaying: PropTypes.array,
	upcomfing: PropTypes.array,
	popular: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string
};

export default HomePresenter;