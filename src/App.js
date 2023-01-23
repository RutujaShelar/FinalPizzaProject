import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import OrderPizza from './OrderPizza';
import BuildPizza from './BuildPizza';
import Navbar1 from './Navbar1';


function App() {
return (
	<Router>
	<Navbar1 />
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/OrderPizza' component={OrderPizza} />
		<Route path='/BuildPizza' component={BuildPizza} />
		
	</Switch>
	</Router>
);
}

export default App;
