import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import MainCoverList from "Components/MainCoverList";
import Message from "Components/Message";

const Container = styled.div`
`;

const SearchForm = styled.form`
	position: relative;
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

	@media (max-width: 1600px) {
		input{
			font-size: 20px;
		}
	}

	@media (max-width: 768px) {
		input{
			font-size: 18px;
		}
	}
`;

const SearchPresenter = ({ movieResults, tvResults, error, loading, searchTerm, handleSubmit, updateTerm }) => (
	<>
		<Helmet>
			<title>Search | Movieapp</title>
		</Helmet>
		<Container className="search-container">
			<SearchForm onSubmit={handleSubmit}>
				<input type="text" placeholder="Search Movie or TV Show..." value={searchTerm} onChange={updateTerm} />
				<em className="inputLine" aria-hidden="true" />
			</SearchForm>
			</Container>
		<Container className="main-container">
			{ loading ? <Loader /> : <>
				{ movieResults && movieResults.length > 0 && <>
					<h2 className="sub-title">Movie Results</h2>
					<MainCoverList align={movieResults} isMovie={true} />
				</>}
				{ tvResults && tvResults.length > 0 && <>
					<h2 className="sub-title">TV Show Results</h2>
					<MainCoverList align={tvResults} isMovie={false} />
				</>}
				{ error && <Message text={error} color="#e74c3c" /> }
				{ movieResults && movieResults.length === 0 && tvResults && tvResults.length === 0 && <Message text="Nothing found" color="#95a5a6" /> }
			</> }
		</Container>
	</>
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