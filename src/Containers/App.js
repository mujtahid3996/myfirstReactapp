import React,{ Component } from 'react';
import Cardlist from '../Components/Cardlist';
import { connect } from 'react-redux'
import SearchBox from '../Components/SearchBox';

import Scroll from '../Components/Scroll'
import ErrorBoundary from '../Components/ErrorBoundary';
import { setSearchField,requestRobots }  from '../actions'
const mapStateToProps = ( state ) =>{
	
	return	{
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}
const mapDispatchToProps = ( dispatch ) =>{

	return {
		onsearchchange: ( event ) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}



class App extends Component{


componentDidMount()
{
	
	this.props.onRequestRobots();
}


render()
{
	const {searchField,onsearchchange,robots,isPending} = this.props;
	const filteredRobots =robots.filter(robots =>{
		return robots.name.toLowerCase().includes(searchField.toLowerCase())
	})
	return isPending ?<h1>loading </h1>
	: (
		<div className='tc'>
			<h1> RoboFriends </h1>
			<SearchBox searchchange={onsearchchange} />
			<Scroll>
				<ErrorBoundary>
					<Cardlist robots= {filteredRobots} />
				</ErrorBoundary>	
			</Scroll>
		</div>
		)
}
}
export default connect(mapStateToProps,mapDispatchToProps)(App); 