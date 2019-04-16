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
			isPrevVideo: window.innerWidth >= 1600,
			isDesktop: window.innerWidth >= 1600
		};
		this.handleClick = this.handleClick.bind(this);
		this.updatePredicate = this.updatePredicate.bind(this);
	};

	handleClick = (event) => {
		event.preventDefault();
		this.setState(prevState => ({
			isPrevVideo: !prevState.isPrevVideo
		}), this.bodyStyle());
	}

	updatePredicate() {
		if(this.state.isDesktop && window.innerWidth < 1600){
			this.setState({ isDesktop: false, isPrevVideo: false });
			document.body.removeAttribute("style")
		}
		if(!this.state.isDesktop && window.innerWidth >= 1600){
			this.setState({ isDesktop: true , isPrevVideo: true });
		}
	}

	bodyStyle = () => {
		if(this.state.isPrevVideo){
			document.body.style.overflow = "hidden";
		}else{
			document.body.removeAttribute("style")
		}
	}

	componentWillUnmount() {
	  window.removeEventListener("resize", this.updatePredicate);
	}

	async componentDidMount(){
		window.addEventListener("resize", this.updatePredicate);
		this.updatePredicate();
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
		const { result, review, loading, isMovie, isPrevVideo, isDesktop, error } = this.state;
		console.log(this.state)
		return <DetailPresenter
			result={ result }
			review={ review }
			loading={ loading }
			isMovie={ isMovie }
			handleClick={ this.handleClick }
			isPrevVideo={ isPrevVideo }
			isDesktop={ isDesktop }
			error={ error }
		/>
	}
}