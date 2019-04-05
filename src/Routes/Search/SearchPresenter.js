import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Sections";
import Poster from "Components/Poster";
import Message from "Components/Message";

const Container = styled.div`
	padding: 0 20px;
	form {
		margin-bottom: 50px;
		width: 100%;
	}
	input {
		all: unset;
		font-size: 22px;
		width: 100%;
	}
`;

const SearchPresenter = ({ movieResults, tvResults, error, loading, searchTerm, handleSubmit, updateTerm }) => (
	<Container>
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="Search Movie or TV Show..." value={searchTerm} onChange={updateTerm} />
		</form>
		{ loading ? <Loader /> : <>
			{ movieResults && movieResults.length > 0 && <Section title="Movie Results"> { movieResults.map(movie => <>
				<Poster key={movie.id} id={movie.id} imageUrl={movie.poster_path} title={movie.original_title} rating={movie.vote_average} year={movie.release_date && movie.release_date.substring(0,4)} isMovie={true} />
			</>) } </Section> }
			{ tvResults && tvResults.length > 0 && <Section title="TV Show Results"> { tvResults.map(show => <>
				<Poster key={show.id} id={show.id} imageUrl={show.poster_path} title={show.original_name} rating={show.vote_average} year={show.first_air_date && show.first_air_date.substring(0,4)} />
			</>) } </Section> }
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