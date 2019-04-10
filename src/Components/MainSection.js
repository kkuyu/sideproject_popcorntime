import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
	& + & {
		margin-top: 50px;
	}
	.poster-list {
		margin: 12px -20px 0 -20px;
		&:after {
			content: "";
			display: block;
			clear: both;
		}
		li {
			float: left;
			width: 10%;
			padding: 26px 20px;
			&:nth-child(10n+1) {
				clear: both;
			}
		}
	}
`;

const Section = ({ title, children }) => (
	<Container className="main-section">
		<h2 className="sub-title">{title}</h2>
		<ul className="poster-list">
			{children[1].map((child, index) => <li key={index}>{child}</li>)}
		</ul>
	</Container>
);

Section.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	])
};

export default Section;