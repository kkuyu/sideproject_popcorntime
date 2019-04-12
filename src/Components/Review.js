import React from "react";
import PropTypes from "prop-types";
import styled from  "styled-components";

const Container = styled.ul`
	li {
		position: relative;
		padding-left: 50px;
		font-size: 15px;
		line-height: 1.2;
		.fa-user-circle {
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
	.content {
		margin-top: 10px;
	}
`;

const Review = ({ review  }) => (
	<Container>
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
	</Container>
)

Review.prototype = {
	review: PropTypes.array
}

export default Review;