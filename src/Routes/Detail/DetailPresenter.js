import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import { request } from "https";

const Container = styled.div`
	position: relative;
	width: 100%;
	height: calc(100vh - 50px);
	padding: 50px;
	.contnet {
		position: relative;
		display:flex;
		width: 100%;
		height: 100%;
		z-index: 1;
	}
	.cover {
		width: 30%;
		height: 100%;
		border-radius: 5px;
		background-size: cover;
		background-position: center center;
	}
	.backDrop {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-size: cover;
		background-position: center center;
		filter: blur(3px);
		opacity: 0.5;
		z-index: 0;
	}
`;

const BackDrop = styled.div`
	background-image: url(${props => props.bgUrl});
`;

const Cover = styled.div`
	background-image: url(${props => props.bgUrl});
`;

const DetailPresenter = ({ result, loading, error }) => (
	loading ? <Loader /> : (
		<Container>
			<BackDrop className="backDrop" bgUrl={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
			<div className="contnet">
				<Cover className="cover" bgUrl={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : require("../../assets/noPosterSmall.png")} />
			</div>
		</Container>
	)
);

DetailPresenter.propTypes = {
	result: PropTypes.object,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string
};

export default DetailPresenter;