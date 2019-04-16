import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
	position: relative;
	width: 100%;
	padding: 40px 50px;
	color: #fff;
	&:after {
		content: "";
		display: block;
		clear: both;
	}

	@media (max-width: 1600px) {
		padding: 35px 30px;
	}

	@media (max-width: 768px) {
		padding: 25px 20px 35px 20px;
	}
`;

const Logo = styled.h1`
	float: left;
	font-size: 25px;
	font-weight: 600;
	a:hover i {
		color: #ecce40;
	}

	@media (max-width: 1600px) {
		font-size: 22px;
	}

	@media (max-width: 768px) {
		font-size: 18px;
	}
`;

const Gnb = styled.ul`
	float: left;
	margin-top: 2px;
	margin-left: 86px;
	font-size: 15px;
	&:after {
		content: "";
		display: block;
		clear: both;
	}
	li {
		float: left;
	}
	li + li {
		margin-left: 48px;
	}
	a {
		padding: 4px 1px;
	}

	@media (max-width: 768px) {
		float: right;
		margin-top: 0;
		margin-left: 0;
		font-size: 13px;
		li + li {
			margin-left: 20px;
		}
	}
`;

const SLink = styled(Link)`
	border-bottom: 1px solid ${props => props.current ? "#ecce40" : "transparent"};
	transition: border-bottom 0.2s ease-out;
`;

export default withRouter(({ location: { pathname } }) => (
	<Container>
		<Logo>
			<SLink to="/"><i className="fas fa-meteor" aria-label="logo"></i> POPCORN TIME</SLink>
		</Logo>
		<Gnb>
			<li>
				<SLink to="/" current={ ( pathname === "/" || pathname.indexOf("/movie") !== -1 ) ? 1 : 0 }>Movies</SLink>
			</li>
			<li>
				<SLink to="/tv" current={ ( pathname.indexOf("/tv") !== -1 ) ? 1 : 0 }>TV</SLink>
			</li>
			<li>
				<SLink to="/search" current={ ( pathname === "/search" ) ? 1 : 0 }>Search</SLink>
			</li>
		</Gnb>
	</Container>
));