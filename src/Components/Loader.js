import React from "react";
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
    text-align: center;
	font-size: 22px;
	margin-top: 80px;
	i {
		font-size: 40px;
		color: rgba(255, 255, 255, 0.1);
		-webkit-animation: loading 2s infinite ease-in-out;
		animation: loading 2s infinite ease-in-out
		&:last-child {
			margin-left: -40px;
			-webkit-animation-delay: -1s;
			animation-delay: -1s;
		}
	}

	@-webkit-keyframes loading {
		0%,100% {
			transform: scale(0);
			-webkit-transform: scale(0)
		}
		50% {
			transform: scale(1);
			-webkit-transform: scale(1)
		}
	}

	@keyframes loading {
		0%,100% {
			transform: scale(0);
			-webkit-transform: scale(0)
		}
		50% {
			transform: scale(1);
			-webkit-transform: scale(1)
		}
	}
`;

export default () => (
	<Container aria-label="Loading">
		<i className="fas fa-circle" aria-hidden="true"></i>
		<i className="fas fa-circle" aria-hidden="true"></i>
	</Container>
);