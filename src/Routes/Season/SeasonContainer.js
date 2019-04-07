import React from "react";
import SeasonPresenter from "./SeasonPresenter";
import { tvApi } from "api";

export default class extends React.Component{
	state = {
		result: null,
		error: "",
		loading: true
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
		try{
			({ data: result } = await tvApi.seasonDetail( parsedId, parsedSeasonNumber ));
		}catch(error){
			this.setState({ error: "Can't find anything" });
		}finally{
			this.setState({ loading: false, result });
		}
	}

	render() {
		const { result, error, loading } = this.state;
		console.log(this.state)
		return <SeasonPresenter
			result={result}
			error={error}
			loading={loading}
		/>;
	}

}