import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROOBOTS_PENDING,
	REQUEST_ROOBOTS_SUCCESS,
	REQUEST_ROOBOTS_FAILED 

 } from './constants.js'

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

export const requestRobots = () => ( dispatch ) => {
	dispatch({ type :REQUEST_ROOBOTS_PENDING});
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(data => dispatch({ type : REQUEST_ROOBOTS_SUCCESS,payload:data}))
	.catch( error => dispatch({ type :REQUEST_ROOBOTS_FAILED,payload:error }))
}