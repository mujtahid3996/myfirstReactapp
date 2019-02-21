import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROOBOTS_PENDING,
	REQUEST_ROOBOTS_SUCCESS,
	REQUEST_ROOBOTS_FAILED 
 } from './constants'

const initialState = {
	searchField: ''
}

export const searchRobots = (state=initialState,action={})=>
{
	switch (action.type) {
		
		case CHANGE_SEARCH_FIELD:
		  return Object.assign({},state,{ searchField:action.payload })
		default:
		  return state;
	}
}
const initialStateRobots = {
	ispending : false,
	robots : [],
	error: ''
}
export const requestRobots = (state = initialStateRobots,action={}) => {
	switch (action.type) {
		case REQUEST_ROOBOTS_PENDING:
			return Object.assign({},state, { ispending : true})
		case REQUEST_ROOBOTS_SUCCESS:
			return Object.assign( {} , state ,{ robots: action.payload, ispending :false })
			
		case REQUEST_ROOBOTS_FAILED:
			return Object.assign( {} , state ,{ error: action.payload, ispending : false })
			
		default:
			return state;
			
	}
}