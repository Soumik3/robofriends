import React, {Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css';
import ErrorBoundry from '../Components/ErrorBoundry'
class  App extends Component{
	constructor(){
		super()
		this.state={

		robots:[],
		searchfield: ''

		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=>this.setState({robots:users}) );
	}

	OnSearchChange=(event)=>{
		this.setState({searchfield: event.target.value})

	}
	render(){
		const{robots,searchfield}=this.state;
		const filteredRobots=robots.filter(robot =>{
			return robot.name.includes(searchfield);
		})

		if(robots.length===0)
		{
			return<h1>Loading</h1>
		}
		else{
		return(
		<div className='tc'>
			<h1 className='f1'>RoboFriends</h1>
			 <SearchBox searchchange={this.OnSearchChange}/>
		     <Scroll>
		     <ErrorBoundry>
		     <CardList robots={filteredRobots}/>
		     </ErrorBoundry>
		     </Scroll>
		</div>
		);
	}
}
}
export default App