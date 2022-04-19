import React from "react";
import { Switch } from "react-router-dom";
import { Route} from "react-router-dom";
import Catalog from "../views/Catalog";
import Detail from "../views/Detail";
import Home from "../views/Home";

const Router = () => {
	return (
		 <Switch>
			  <Route
					path='/:category/search/:keyword'
					component={Catalog}
			  />
			  <Route
					path='/:category/:id'
					component={Detail}
			  />
			  <Route
					path='/:category'
					component={Catalog}
			  />
			  <Route
					path='/'
					exact
					component={Home}
			  />
		 </Switch>
	);
}

export default Router;

