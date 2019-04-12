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

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => (
	<>
		<Helmet>
			<title>TV Shows | Movieapp</title>
		</Helmet>
		{loading ? <Loader /> : (
			<Container className="main-container">
				{ topRated && topRated.length > 0 && <MainSection title="Top Rated Shows"> { topRated.map(show => (
					<MainPoster key={show.id} id={show.id} imageUrl={show.poster_path} title={show.original_name} rating={show.vote_average} year={show.first_air_date && show.first_air_date.substring(0,4)} />
				)) } </MainSection> }
				{ popular && popular.length > 0 && <MainSection title="Popular Shows"> { popular.map(show => (
					<MainPoster key={show.id} id={show.id} imageUrl={show.poster_path} title={show.original_name} rating={show.vote_average} year={show.first_air_date && show.first_air_date.substring(0,4)} />
				)) } </MainSection> }
				{ airingToday && airingToday.length > 0 && <MainSection title="Airing Today"> { airingToday.map(show => (
					<MainPoster key={show.id} id={show.id} imageUrl={show.poster_path} title={show.original_name} rating={show.vote_average} year={show.first_air_date && show.first_air_date.substring(0,4)} />
				)) } </MainSection> }
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