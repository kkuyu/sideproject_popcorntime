import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Sections";
import Message from "Components/Message";

const Container = styled.div`
	padding: 0 20px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, loading, error }) => (
	loading ? <Loader /> : (
		<Container>
			{ nowPlaying && nowPlaying.length > 0 && <Section title="Now Playing"> { nowPlaying.map(movie => <span key={movie.id}>{movie.title}</span>) } </Section> }
			{ upcoming && upcoming.length > 0 && <Section title="Upcomfing Movies"> { upcoming.map(movie => <span key={movie.id}>{movie.title}</span>) } </Section> }
			{ popular && popular.length > 0 && <Section title="Popular Movies"> { popular.map(movie => <span key={movie.id}>{movie.title}</span>) } </Section> }
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