import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "api";

export default class extends React.Component{
	constructor(props){
		super(props);
		const { location: { hash } } = props;
		this.state = {
			movieResults: null,
			tvResults: null,
			searchTerm: ( hash ? hash.substring(1) : ""),
			error: null,
			loading: false
		}
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const { searchTerm } = this.state;
		if (searchTerm !== "") {
			this.searchByTerm();
		}
	};
	
	searchByTerm = async () => {
		const { searchTerm } = this.state;
		this.setState({ loading: true });
		try {
			const { data: { results: movieResults } } = await movieApi.search(searchTerm);
			const { data: { results: tvResults } } = await tvApi.search(searchTerm);
			this.setState({ movieResults, tvResults });
		} catch {
			this.setState({ error: "Can't find results." });
		} finally {
			window.location.hash = searchTerm;
			this.setState({ loading: false });
		}
	};

	updateTerm = (event) => {
		const { target: { value } } = event;
		this.setState({
			searchTerm: value
		})
	}
	
	async componentDidMount(){
		const { searchTerm } = this.state;
		if (searchTerm !== "") {
			this.searchByTerm();
		}
	}

	render(){
		const { movieResults, tvResults, loading, error, searchTerm } = this.state;
		return <SearchPresenter 
			movieResults={ movieResults }
			tvResults={ tvResults }
			loading={ loading }
			error={ error }
			searchTerm={searchTerm}
			handleSubmit={this.handleSubmit}
			updateTerm={this.updateTerm}
		/>
	}
}