import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";

import BackDrop from "Components/BackDrop";
import Cover from "Components/Cover";
import ThumList from "../../Components/ThumList";

const Container = styled.div `
`;

const MainDetail = styled.div `
`;

const SubDetail = styled.div `
	.sub-title + .thum-list {
		margin-top: 15px;
	}
`;

const SeasonPresenter = ({ result, error, loading, backdrop }) => (
	loading ? <>
		<Helmet>
			<title>Loading | Movieapp</title>
		</Helmet>
		<Loader />
	</> : <>
		<Helmet>
			<title>Season | Movieapp</title>
		</Helmet>
		<Container className="sub-container">
			<MainDetail className="main-detail">
				<Cover className="cover" url={result.poster_path ? `https://image.tmdb.org/t/p/w342${result.poster_path}` : require("../../assets/noPoster_780.jpg")} alt={result.name} />
				<h2 className="main-title">{result.name}</h2>
				{ result.overview && <div className="overview"><p className="story">{result.overview}</p></div> }
			</MainDetail>

			<SubDetail className="sub-detail">
				<h3 className="sub-title">Parts</h3>
				<ThumList result={result} />
			</SubDetail>
		</Container>
		<BackDrop className="backdrop" bgurl={backdrop} />
	</>
);

export default SeasonPresenter;