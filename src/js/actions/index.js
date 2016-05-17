export const URL_CHANGED = 'URL_CHANGED';

export const WHOIS_DATA_CHANGED = 'WHOIS_DATA_CHANGED';
export const WHOIS_DATA_LOADING = 'WHOIS_DATA_LOADING';

export const TRACEROUTE_DATA_CHANGED = 'TRACEROUTE_DATA_CHANGED';
export const TRACEROUTE_DATA_LOADING = 'TRACEROUTE_DATA_LOADING';

export function changeURL(url){
	return {
		type: URL_CHANGED,
		url: url
	}
}

export function changeWhoIsData(data){
	return {
		type: WHOIS_DATA_CHANGED,
		whoIsData: data,
		loading: false
	}
}

export function loadingWhoIsData(){
	return {
		type: WHOIS_DATA_LOADING,
		// whoIsData: data,
		loading: true
	}
}

export function changeTraceRoute(data, isLoading = false){
	return {
		type: TRACEROUTE_DATA_CHANGED,
		traceroute: data,
		loading: isLoading
	}
}

export function loadingTraceRoute(){
	return {
		type: TRACEROUTE_DATA_LOADING,
		loading: true
	}
}