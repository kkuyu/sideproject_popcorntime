import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import MainSection from "Components/MainSection";
import PosterList from "Components/PosterList";
import Message from "Components/Message";

const Container = styled.div`
	.form-section {
		position: relative;
		margin-bottom: 50px;
		width: 100%;
		input {
			all: unset;
			font-size: 22px;
			width: 100%;
			padding-bottom: 8px;
			border-bottom: 1px solid #6f6f6f;
			&:focus + .inputLine {
				width: 100%;
				transition: width 0.3s ease-in-out;
			}
		}
		.inputLine {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 0%;
			height: 1px;
			background: #ecce40;
		}
	}
`;

const SearchPresenter = ({ movieResults, tvResults, error, loading, searchTerm, handleSubmit, updateTerm }) => (
	<Container className="main-container">
		<Helmet>
			<title>Search | Movieapp</title>
		</Helmet>
		<form onSubmit={handleSubmit} className="form-section">
			<input type="text" placeholder="Search Movie or TV Show..." value={searchTerm} onChange={updateTerm} />
			<em className="inputLine" aria-hidden="true" />
		</form>
		{ loading ? <Loader /> : <>
			{ movieResults && movieResults.length > 0 && <MainSection title="Movie Results"> { movieResults.map(movie => <>
				<PosterList key={movie.id} id={movie.id} imageUrl={movie.poster_path} title={movie.original_title} rating={movie.vote_average} year={movie.release_date && movie.release_date.substring(0,4)} isMovie={true} />
			</>) } </MainSection> }
			{ tvResults && tvResults.length > 0 && <MainSection title="TV Show Results"> { tvResults.map(show => <>
				<PosterList key={show.id} id={show.id} imageUrl={show.poster_path} title={show.original_name} rating={show.vote_average} year={show.first_air_date && show.first_air_date.substring(0,4)} />
			</>) } </MainSection> }
			{ error && <Message text={error} color="#e74c3c" /> }
			{ movieResults && movieResults.length === 0 && tvResults && tvResults.length === 0 && <Message text="Nothing found" color="#95a5a6" /> }
		</> }
	</Container>
);

SearchPresenter.propTypes = {
	movieResults: PropTypes.array,
	tvResults: PropTypes.array,
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired,
	searchTerm: PropTypes.string,
	handleSubmit: PropTypes.func.isRequired,
	updateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;