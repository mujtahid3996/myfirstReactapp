import React,{ Component } from 'react';
import Cardlist from '../Components/Cardlist';

import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll'
import ErrorBoundary from '../Components/ErrorBoundary';
class App extends Component{

	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}
componentDidMount()
{
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(users => this.setState({ robots: users}))
}

onsearchchange=(event) =>
{
	this.setState({ searchfield: event.target.value });
}
render()
{
	const filteredRobots =this.state.robots.filter(robots =>{
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
	})
	return(
		<div className='tc'>
			<h1> RoboFriends </h1>
			<SearchBox searchchange={this.onsearchchange} />
			<Scroll>
				<ErrorBoundary>
					<Cardlist robots= {filteredRobots} />
				</ErrorBoundary>	
			</Scroll>
		</div>
		)
}
}
export default App; 