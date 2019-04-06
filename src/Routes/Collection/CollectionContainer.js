import React from "react";
import CollectionPresenter from "./CollectionPresenter";
import { collectionApi } from "api";

export default class extends React.Component {
	state = {
		result: null,
		error: "",
		loading: true
	};

	async componentDidMount() {
		const {
			match: { params: { id } },
			history: { push }
		} = this.props;
		const parsedId = parseInt(id);
		if(isNaN(parsedId)){
			return push("/");
		}
		let result = null;
		try{
			({ data: result } = await collectionApi.collectionDetail(parsedId));
		}catch(error){
			this.setState({ error: "Can't find anything" });
		}finally{
			this.setState({ loading: false, result });
		}
	}

	render() {
		const { result, error, loading } = this.state;
		return <CollectionPresenter
			result={ result }
			loading={ loading }
			error={ error }
		/>
	}
}