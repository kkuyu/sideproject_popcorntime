import React from "react";
import SeasonPresenter from "./SeasonPresenter";
import { tvApi } from "api";

export default class extends React.Component{
	state = {
		result: null,
		error: null,
		loading: true,
		backdrop: null
	};

	async componentDidMount() {
		const {
			match: { params: { id, seasonNumber } },
			history: { push }
		} = this.props;
		const parsedId = parseInt(id);
		const parsedSeasonNumber = parseInt(seasonNumber);
		if (isNaN(parsedId) || isNaN(parsedSeasonNumber)) {
			return push("/");
		}
		let result = null;
		let backdrop = null;
		try{
			({ data: result } = await tvApi.seasonDetail( parsedId, parsedSeasonNumber ));
			({ data: { backdrop_path: backdrop } } = await tvApi.tvDetail(parsedId));
		}catch(error){
			this.setState({ error: "Can't find anything" });
		}finally{
			this.setState({ loading: false, result, backdrop });
		}
	}

	render() {
		const { result, error, loading, backdrop } = this.state;
		console.log(this.state)
		return <SeasonPresenter
			result={result}
			error={error}
			loading={loading}
			backdrop={backdrop}
		/>;
	}

}