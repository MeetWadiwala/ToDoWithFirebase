import "./App.css";
import Login from "./components/Login";
import { Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
import AddPosts from "./components/AddPosts";

function App() {
	return (
		<>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Login} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/add" component={AddPosts} />
				</Switch>
			</div>
		</>
	);
}

export default App;
