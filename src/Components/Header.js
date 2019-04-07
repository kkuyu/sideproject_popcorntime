import React from "react";
import { Link, withRouter } from "react-router-dom";
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

const Item = styled.li`
	border-bottom: 5px solid ${props => props.current ? "#3498db" : "transparent"};
	transition: border-bottom 0.2s ease-out;
`

const SLink = styled(Link)``;

export default withRouter(({ location: { pathname } }) => (
	<Header>
		<ul className="gnb">
			<Item current={ pathname === "/" || pathname.includes("/movie") || pathname.includes("/collection") }>
				<SLink to="/">Movies</SLink>
			</Item>
			<Item current={ pathname.includes("/tv") || pathname.includes("/season") }>
				<SLink to="/tv">TV</SLink>
			</Item>
			<Item current={ pathname === "/search" }>
				<SLink to="/search">Search</SLink>
			</Item>
		</ul>
	</Header>
));