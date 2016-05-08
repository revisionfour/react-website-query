export function changeURL(url){
	return {
		type: 'URL_CHANGED',
		url: url
	}
}

export function changeWhoIsData(url, data){
	return {
		type: 'WHOIS_DATA_CHANGED',
		url: url,
		whoIsData: data
	}
}