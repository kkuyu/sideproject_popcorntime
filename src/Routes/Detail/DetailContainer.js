import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "api";

export default class extends React.Component{
	constructor(props){
		super(props);
		const { location: { pathname } } = props;
		this.state = {
			result: null,
			review: null,
			error: null,
			loading: true,
			isMovie: ( pathname.indexOf("/movie/") !== -1 ),
			isToggleOn: true
		};
		this.handleClick = this.handleClick.bind(this);
	};

	handleClick = (event) => {
	  this.setState(prevState => ({
		isToggleOn: !prevState.isToggleOn
	  }));
	}

	async componentDidMount(){
		const {
			match: { params: { id } },
			history: { push }
		} = this.props;
		const { isMovie } = this.state;
		const parsedId = parseInt(id);
		if(isNaN(parsedId)){
			return push("/");
		}
		let detailId = parsedId;
		let result = null;
		let review = null;
		try{
			if (isMovie) {
				({ data: result } = await movieApi.movieDetail(parsedId));
				({ data: { results: review } } = await movieApi.movieReview(parsedId));
			} else {
				({ data: result } = await tvApi.tvDetail(parsedId));
				({ data: { results: review } } = await tvApi.tvReview(parsedId));
			}
		}catch(error){
			this.setState({ error: "Can't find anything." });
		}finally{
			this.setState({ loading: false, result, review, detailId });
		}
	}

	render() {
		const { result, review, loading, isMovie, isToggleOn, error } = this.state;
		console.log(this.state)
		return <DetailPresenter
			result={ result }
			review={ review }
			loading={ loading }
			isMovie={ isMovie }
			handleClick={ this.handleClick }
			isToggleOn={ isToggleOn }
			error={ error }
		/>
	}
}