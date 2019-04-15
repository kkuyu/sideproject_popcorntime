import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import MainCoverList from "Components/MainCoverList";
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
				{ nowPlaying && nowPlaying.length > 0 && <>
					<h2 className="sub-title">Now Playing</h2>
					<MainCoverList align={nowPlaying} isMovie={true} />
				</>}
				{ upcoming && upcoming.length > 0 && <>
					<h2 className="sub-title">Upcomfing Movies</h2>
					<MainCoverList align={upcoming} isMovie={true} />
				</>}
				{ popular && popular.length > 0 && <>
					<h2 className="sub-title">Popular Movies</h2>
					<MainCoverList align={popular} isMovie={true} />
				</>}
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