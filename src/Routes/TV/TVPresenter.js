import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import MainCoverList from "Components/MainCoverList";
import Message from "Components/Message";

const Container = styled.div`
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => (
	<>
		<Helmet>
			<title>TV Shows | Movieapp</title>
		</Helmet>
		{loading ? <Loader /> : (
			<Container className="main-container">
				{ topRated && topRated.length > 0 && <>
					<h2 className="sub-title">Top Rated TV Shows</h2>
					<MainCoverList align={topRated} isMovie={false} />
				</>}
				{ popular && popular.length > 0 && <>
					<h2 className="sub-title">Popular TV Shows</h2>
					<MainCoverList align={popular} isMovie={false} />
				</>}
				{ airingToday && airingToday.length > 0 && <>
					<h2 className="sub-title">Airing Today TV Shows</h2>
					<MainCoverList align={airingToday} isMovie={false} />
				</>}
				{ error && <Message text={error} color="#e74c3c" /> }
			</Container>
		)}
	</>
);

TVPresenter.propTypes = {
	topRated: PropTypes.array,
	popular: PropTypes.array,
	airingToday: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string
};

export default TVPresenter;