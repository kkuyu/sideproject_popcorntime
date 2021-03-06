import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";
import Collection from "Routes/Collection";
import Season from "Routes/Season";

export default () => (
	<Router>
		<Header />
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/tv" exact component={TV} />
			<Route path="/search" component={Search} />
			<Route path="/movie/:id" exact component={Detail} />
			<Route path="/movie/collection/:id" component={Collection} />
			<Route path="/tv/:id" exact component={Detail} />
			<Route path="/tv/:id/season/:seasonNumber" component={Season} />
			<Redirect from="*" to="/" />
		</Switch>
	</Router>
);