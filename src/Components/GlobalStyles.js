import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
	// reset
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
		padding: 20px 50px 50px;
	}
	.search-container {
		padding: 20px 50px 40px;
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
			.genre {
				font-size: 13px;
				font-weight: 600;
			}
			.story {
				margin-top: 8px;
				font-size: 16px;
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

	@media (max-width: 1600px) {
		// container
		.main-container {
			padding: 20px 30px;
		}
		.search-container {
			padding: 10px 30px 30px;
		}
		.sub-container {
			position: relative;
			padding: 30px 30px 60px 320px;
			&.column-left {
				width: 100%;
			}
			&[class*="column-right"] {
				position: relative;
				width: 100%;
				height: auto;
				margin-top: 0px;
				padding: 60px 30px 30px;
			}
			&.column-right__open {
				width: 100%;
			}
			&.column-right__open:after {
				content: none;
			}
		}

		// detail
		.main-detail {
			.cover {
				top: 40px;
				left: 30px;
				width: 250px;
			}
			.overview {
			}
		}
		.sub-detail {
		}
		* + .sub-detail {
			margin-top: 70px;
		}
	
		// title
		.main-title {
			font-size: 62px;
		}
		.sub-title {
			font-size: 20px;
			& + * {
				margin-top: 30px;
			}
		}
		* + .sub-title {
			margin-top: 70px;
		}
	}

	@media (max-width: 768px) {
		body {
			min-width: 375px;
			font-size: 13px;
		}

		// container
		.main-container {
			padding: 0 20px 20px;
		}
		.search-container {
			padding: 0 20px 20px;
		}
		.sub-container {
			position: relative;
			padding: 0 20px 40px;
			&.column-left {
				width: 100%;
			}
			&[class*="column-right"] {
				position: relative;
				width: 100%;
				height: auto;
				margin-top: 0px;
				padding: 40px 20px 30px;
			}
			&.column-right__open {
				width: 100%;
			}
			&.column-right__open:after {
				content: none;
			}
		}

		// detail
		.main-detail {
			.cover {
				position: relative;
				top: auto;
				left: auto;
				margin: 0 auto;
				width: 38%;
				max-width: 190px;
			}
			.overview {
				.story {
					margin-top: 6px;
					font-size: 15px;
				}
			}
		}
		.sub-detail {
		}
		* + .sub-detail {
			margin-top: 55px;
		}
	
		// title
		.main-title {
			margin-top: 18px;
			font-size: 42px;
		}
		.sub-title {
			font-size: 18px;
			& + * {
				margin-top: 20px;
			}
		}
		* + .sub-title {
			margin-top: 55px;
		}
	}
`;

export default globalStyles;