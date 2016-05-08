const initialState = {
	url: 'engadget.com',
	whoIsData: []
}

// export default function(state, action){

export default function(state = initialState, action){
	switch(action.type){
		case 'URL_CHANGED':
			return {
				url: action.url,
				whoIsData: state.whoIsData
			}
		case 'WHOIS_DATA_CHANGED':
			return {
				url: action.url,
				whoIsData: action.whoIsData
			}
		default:
			return state;
	}
}