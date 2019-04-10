import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from  "styled-components";

const Container = styled.ul`
	li {
		position: relative;
		padding-left: 50px;
		font-size: 15px;
		i {
			position: absolute;
			top: 0;
			left: 0;
			font-size: 30px;
		}
		a:hover .author {
			text-decoration: underline;
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
		{review.map( (review, index) => (index < 3 && <>
			<li>
				<a href={review.url} target="_blank">
					<i className="fas fa-user-circle"></i>
					<strong className="author">{review.author}</strong>
					<p className="content">{review.content.length > 400 ? `${review.content.substring(0,400)}...` : review.content }</p>
				</a>
			</li>
		</>))}
	</Container>
)

Review.prototype = {
	review: PropTypes.array
}

export default Review;