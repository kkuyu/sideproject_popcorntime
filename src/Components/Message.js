import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
	width: 100vw;
	display: flex;
	justify-content: center;
	.text {
		color: ${props => props.color};
	}
`;

const Message = ({ text, color }) => (
	<Container color={color}>{text}</Container>
);

Message.propTypes = {
	text: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired
}

export default Message;