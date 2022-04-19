import React from "react";
import { Switch } from "react-router-dom";
import { Route} from "react-router-dom";
import Catalog from "../views/Catalog";
import Detail from "../views/Detail";
import Home from "../views/Home";
const Router = () => {
	return (
		<Switch>
			<Route path="/:category/search/:keyword"><Catalog/></Route>
			<Route path="/:category/:id"><Detail/></Route>
			<Route exact path="/"><Home/></Route>
			<Route  path="/:category"><Catalog/></Route>
			
		</Switch>
	)
}

export default Router;