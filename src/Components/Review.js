import React from "react";
import PropTypes from "prop-types";
import styled from  "styled-components";

const Container = styled.div`
	li {
		position: relative;
		padding-left: 50px;
		line-height: 1.2;
		i {
			position: absolute;
			top: 0;
			left: 0;
			font-size: 30px;
		}
		.link {
			display: inline-block;
			margin-left: 5px;
			font-size: 12px;
			text-decoration: underline;
			&:hover {
				color: #ecce40;
			}
		}
	}
	li + li {
		margin-top: 30px;
	}
	.author {
		font-size: 13px;
		font-weight: 600;
	}
	.content {
		font-size: 15px;
		margin-top: 10px;
		word-break: break-word;
	}

	@media (max-width: 768px) {
		li {
			padding-left: 35px;
			i {
				font-size: 25px;
			}
		}
		.content {
			font-size: 14px;
		}
	}
`;

const Review = ({ review  }) => (
	<Container>
		<ul className="inner">
			{review.map( (review, index) => (index < 3 && 
				<li key={index}>
					<i className="fas fa-user-circle"></i>
					<strong className="author">{review.author}</strong>
					<p className="content">{review.content.length > 400 ? <>
						{review.content.substring(0,400)}...
						<a href={review.url} target="_blank" className="link" rel="noopener noreferrer">More</a>
					</> : review.content }</p>
				</li>
			))}
		</ul>
	</Container>
)

Review.prototype = {
	review: PropTypes.array
}

export default Review;