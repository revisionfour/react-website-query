export const URL_CHANGED = 'URL_CHANGED';
export const WHOIS_DATA_CHANGED = 'WHOIS_DATA_CHANGED';
export const TRACEROUTE_DATA_CHANGED = 'TRACEROUTE_DATA_CHANGED';

export function changeURL(url){
	return {
		type: 'URL_CHANGED',
		url: url
	}
}

export function changeWhoIsData(data){
	return {
		type: 'WHOIS_DATA_CHANGED',
		whoIsData: data
	}
}

export function changeTraceRoute(data){
	return {
		type: 'TRACEROUTE_DATA_CHANGED',
		traceroute: data
	}
}