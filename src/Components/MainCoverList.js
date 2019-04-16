import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from  "styled-components";
import Cover from "Components/Cover";

const Container = styled.div`
	.inner {
		margin: -26px -20px;
		&:after {
			content: "";
			display: block;
			clear: both;
		}
	}
	li {
		float: left;
		width: 10%;
		padding: 26px 20px;
		&:nth-child(10n+1) {
			clear: both;
		}
	}

	@media (max-width: 1600px) {
		.inner {
			margin: -15px -13px;
		}
		li {
			width: 16.6%;
			padding: 15px 10px;
			&:nth-child(6n+1) {
				clear: both;
			}
			&:nth-child(10n+1) {
				clear: none;
			}
		}
	}

	@media (max-width: 768px) {
		.inner {
			margin: -10px;
		}
		li {
			width: 50%;
			padding: 10px 10px;
			&:nth-child(2n+1) {
				clear: both;
			}
		}
	}
`;

const SLink = styled(Link)`
	.thum {
		position: relative;
		border: 3px solid rgba(0, 0, 0, 0.25);
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
	&:hover {
		.thum {
			border-color: #ecce40;
		}
		.name {
			text-decoration: underline;
		}
	}

	@media (max-width: 1600px) {
		.year {
			margin-top: 8px;
		}
		.name {
			font-size: 16px;
		}
	}

	@media (max-width: 768px) {
		
	}
`;

const MainCoverList = ({ align, isMovie=false }) => (
	<Container>
		<ul className="inner">
			{ align.map((item, index) => ( 
				<li key={index}>
					<SLink to={ isMovie ? `/movie/${item.id}` : `/tv/${item.id}`}>
						<div className="thum">
							<Cover url={item.poster_path ? `https://image.tmdb.org/t/p/w342${item.poster_path}` : require("../assets/noPoster_780.jpg")} alt="" />
							<em className="rating">{item.vote_average}</em>
						</div>
						<div className="info">
							<span className="year">{isMovie ? item.release_date && item.release_date.substring(0,4) : item.first_air_date && item.first_air_date.substring(0,4) }</span>
							<span className="name">{isMovie ? item.original_title : item.original_name}</span>
						</div>
					</SLink>
				</li>
			))}
		</ul>
	</Container>
)

MainCoverList.prototype = {
	id: PropTypes.number.isRequired,
	imageUrl: PropTypes.string,
	title: PropTypes.string.isRequired,
	rating: PropTypes.number,
	year: PropTypes.string,
	isMovie: PropTypes.bool
}

export default MainCoverList;