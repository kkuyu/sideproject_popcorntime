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
	img {
		max-width: 100%;
	}
	a {
		display: block;
		color: inherit;
		text-decoration: none;
	}
	button {
		display: block;
		padding: 0;
		text-align: left;
		border: none;
		background: transparent;
	}

	// container
	.main-container {
		padding: 20px 50px;
		.main-cover-list {
			margin-top: 15px;
		}
	}
	.sub-container {
		position: relative;
		padding: 50px 50px 50px 400px;
		&.column-left {
			width: 70%;
		}
		&[class*="column-right"] {
			position: fixed;
			top: 0px;
			right: 0px;
			width: 30%;
			height: 100%;
			margin-top: 0px;
			color: rgb(34, 34, 34);
			padding: 160px 50px 50px;
			background: rgb(255, 255, 255);
			overflow-y: auto;
		}
		&.column-right__open {
			width: 57.6%;
		}
		&.column-right__open:after {
			content: "";
			position: fixed;
			top: 0px;
			left: 0;
			width: 42.4%;
			height: 100%;
			background: rgba(0, 0, 0, 0.65);
		}
	}

	// detail
	.main-detail {
		.cover {
			position: absolute;
			top: 60px;
			left: 50px;
			width: 300px;
		}
		.overview {
			margin-top: 25px;
			line-height: 1.4;
			.story {
				font-size: 16px;
			}
			.genre + .story {
				margin-top: 8px;
			}
		}
	}
	.sub-detail {
	}
	* + .sub-detail {
		margin-top: 85px;
	}

	// title
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