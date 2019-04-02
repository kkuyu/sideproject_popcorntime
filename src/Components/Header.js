import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
	color: white;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	background-color: rgba(20, 20, 20, 0.8);
	z-index: 10;
	box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
		ul.gnb {
			display: flex;
			li {
				width: 80px;
				height: 50px;
				text-align: center;
			}
			a {
				height: 50px;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
`;

const SLink = styled(Link)``;

export default () => (
	<Header>
		<ul className="gnb">
			<li>
				<SLink to="/">Movies</SLink>
			</li>
			<li>
				<SLink to="/tv">TV</SLink>
			</li>
			<li>
				<SLink to="/search">Search</SLink>
			</li>
		</ul>
	</Header>
);