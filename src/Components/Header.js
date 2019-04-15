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
`;

const Logo = styled.h1`
	float: left;
	font-size: 20px;
	font-weight: 600;
`;

const Gnb = styled.ul`
	float: left;
	margin-left: 86px;
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
		font-size: 15px;
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