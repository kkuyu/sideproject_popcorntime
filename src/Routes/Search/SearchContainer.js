import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component{
	state = {
		movieResults: null,
		tvResults: null,
		searchTerm: "",
		error: null,
		loading: false
	}

	render(){
		const { error, loading, movieResults, tvResults } = this.state;
		return <SearchPresenter 
			movieResults={ movieResults }
			tvResults={ tvResults }
			error={ error }
			loading={ loading }
		/>
	}
}