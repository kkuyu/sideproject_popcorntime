import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Sections";

const Container = styled.div`
	padding: 0 10px;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, loading, error }) => (
	loading ? null : (
		<Container>
			{ nowPlaying && nowPlaying.length > 0 && <Section title="Now Playing"> { nowPlaying.map(movie => movie.title) } </Section> }
			{ upcoming && upcoming.length > 0 && <Section title="Upcomfing Movies"> { upcoming.map(movie => movie.title) } </Section> }
			{ popular && popular.length > 0 && <Section title="Popular Movies"> { popular.map(movie => movie.title) } </Section> }
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