import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	margin-bottom: 20px;
	.imageContainer {
		display: flex;
		align-items: center;
	}
	.thumImage {
		height: 200px;
		width: 400px;
	}
	.name {
		display: block;
		font-size: 14px;
		opacity: 0.8;
	}
`;
const ThumImage = styled.div`
	background-image: url(${props => props.imageUrl});
`;

const SLink = styled(Link)``;

const Production = ({ companies }) => (
	<Container>
		<div className="data">
			{ companies.map((company, index) => (<>
					<div className="companyContainer" key={index}>
						<ThumImage className="thumImage" imageUrl={ company.logo_path ? `https://image.tmdb.org/t/p/original${company.logo_path}` : require("../assets/noPosterSmall.png") } />
						<div className="info" key={index}>{company.name}</div>
					</div>
				</>)
			)}
		</div>
	</Container>
);

Production.propTypes = {
	companies: PropTypes.array
};

export default Production;