import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
	:not(:last-child){
		margin-bottom: 50px;
	}
	.title {
		font-size: 14px;
		font-weight: 600;
	}
	.grid {
		margin-top: 25px
	}
`;

const Section = ({ title, children }) => (
	<Container>
		<span className="title">{title}</span>
		<div className="grid">{children}</div>
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