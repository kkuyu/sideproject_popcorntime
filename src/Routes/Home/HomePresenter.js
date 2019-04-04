import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HomePresenter = ({ nowPlaying, upcomfing, popular, loading, error }) => null;

HomePresenter.propTypes = {
	nowPlaying: PropTypes.array,
	upcomfing: PropTypes.array,
	popular: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string
};

export default HomePresenter;