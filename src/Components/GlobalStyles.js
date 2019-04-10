import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
	${reset};
	body {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 14px;
		background-color: #131313;
		color: #fff;
	}
	* {
		box-sizing: border-box;
	}
	a {
		display: block;
		color: inherit;
		text-decoration: none;
	}

	.main-container {
		padding: 20px 50px;
	}
	.sub-container {
		padding: 50px 50px 50px 400px;
	}
	.main-detail {
		.cover {
			position: absolute;
			top: 170px;
			left: 50px;
			width: 300px;
		}
		.overview {
			margin-top: 25px;
			line-height: 1.4;
			.story {
				font-size: 16px;
			}
			.genre:before {
				content: "[ "
			}
			.genre:after {
				content: " ]"
			}
			.genre + .story {
				margin-top: 8px;
			}
		}
	}
	.sub-detail {
		&.fixed {
			position: fixed;
			top: 0;
			right: 0;
			width: 30%;
			height: 100%;
			margin-top: 0;
			padding: 150px 50px 50px;
			color: #222;
			background: #fff;
		}
		&.fixed.open {
			width: 57.6%;
		}
		.more {
			width: 55px;
			padding: 5px;
			text-align: center;
			border: 1px solid #222;
			border-radius: 5px;
			&:hover {
				padding: 4px;
				border-width: 2px;
				font-weight: 600;
			}
		}
	}
	* + .sub-detail {
		margin-top: 85px;
	}

	.main-title {
		font-size: 75px;
		font-weight: 600;
	}
	.sub-title {
		font-size: 22px;
		font-weight: 600;
		& + * {
			margin-top: 35px;
		}
	}
	* + .sub-title {
		margin-top: 85px;
	}
	.info-list {
		a {
			display: inline-block;
			vertical-align: bottom;
			text-decoration: underline;
			&:hover {
				color: #ecce40;
			}
		}
		& > * {
			float: left;
		}
		& > * + *:before {
			content: "";
			margin: 0 10px;
			display: inline-block;
			width: 2px;
			height: 2px;
			background-color: #fff;
			vertical-align: super;
		}
		&:after {
			content: "";
			display: block;
			clear: both;
		}
	}
	* + .info-list {
		margin-top: 20px;
	}
`;

export default globalStyles;