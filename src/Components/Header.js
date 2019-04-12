import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
	position: relative;
	width: 100%;
	padding: 40px 50px;
	color: #fff;
	&:after {
		content: "";
		display: block;
		clear: both;
	}
	.logo {
		float: left;
		font-size: 20px;
		font-weight: 600;
	}
	.gnb {
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
	}
`;

const SLink = styled(Link)`
	border-bottom: 1px solid ${props => props.current ? "#ecce40" : "transparent"};
	transition: border-bottom 0.2s ease-out;
`;

export default withRouter(({ location: { pathname } }) => (
	<Header className="header">
		<h1 className="logo">
			<SLink to="/"><i className="fas fa-meteor" aria-label="logo"></i> POPCORN TIME</SLink>
		</h1>
		<ul className="gnb">
			<li>
				<SLink to="/" current={ ( pathname === "/" || pathname.indexOf("/movie") !== -1 ) ? 1 : 0 }>Movies</SLink>
			</li>
			<li>
				<SLink to="/tv" current={ ( pathname.indexOf("/tv") !== -1 ) ? 1 : 0 }>TV</SLink>
			</li>
			<li>
				<SLink to="/search" current={ ( pathname === "/search" ) ? 1 : 0 }>Search</SLink>
			</li>
		</ul>
	</Header>
));