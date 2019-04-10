import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from  "styled-components";
import Cover from "Components/Cover";

const SLink = styled(Link)`
	.thum {
		position: relative;
		border: 3px solid transparent;
		border-radius: 8px;
		transition: border 0.1s ease-in-out;
		overflow: hidden;
		&:after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: rgb(0,0,0);
			background: -moz-linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);
			background: -webkit-linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);
			background: linear-gradient(0deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);
			filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
		}
		.rating {
			position: absolute;
			bottom: 15px;
			right: 15px;
			width: 34px;
			height: 34px;
			color: #fff;
			line-height: 34px;
			text-align: center;
			border: 1px solid #fff;
			border-radius: 50%;
			z-index: 1;
		}
	}
	.year {
		display: block;
		margin-top: 12px;
		font-size: 12px;
		color: #999;
	}
	.name {
		display: block;
		margin-top: 6px;
		font-size: 18px;
		text-overflow:ellipsis;
		white-space:nowrap;
		word-wrap:normal;
		overflow:hidden;
	}
	&:hover .thum {
		border-color: #ecce40;
	}
`;

const MainPoster = ({ id, imageUrl, title, rating, year, isMovie=false }) => (
	<SLink to={ isMovie ? `/movie/${id}` : `/tv/${id}`}>
		<div className="thum">
			<Cover url={imageUrl ? `https://image.tmdb.org/t/p/w342${imageUrl}` : require("../assets/noPoster_780.jpg")} alt="" />
			<em className="rating">{rating}</em>
		</div>
		<div className="info">
			<span className="year">{year}</span>
			<span className="name">{title}</span>
		</div>
	</SLink>
)

MainPoster.prototype = {
	id: PropTypes.number.isRequired,
	imageUrl: PropTypes.string,
	title: PropTypes.string.isRequired,
	rating: PropTypes.number,
	year: PropTypes.string,
	isMovie: PropTypes.bool
}

export default MainPoster;