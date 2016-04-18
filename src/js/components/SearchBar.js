import React from "react";

export default class SearchBar extends React.Component {


	handleChange(e){
		let address = e.target.value;
		this.props.changeURL(address);
	}

	handleEnter(e){
		let val = e.which || e.keyCode;

		var url = this.props.url;

		if(val == 13){
			$.ajax({
				url: 'sendURL',
				method: 'POST',
				// dataType: 'json',
				dataType: 'text',
				data: {
					address: url
				},
				success: function(data){
					console.log(data);

					document.getElementById('whois-output').innerHTML = data;
				},
				error: function(xhr, status, err){
					// console.log(xhr);
					// console.log(status);

					console.error('There was an error!');
				}
			});

		}
	}


	render() {
		return (
			<div>
				<input 
				value={this.props.url}
				onChange={this.handleChange.bind(this)} 
				onKeyUp={this.handleEnter.bind(this)} 
				style={{
					display: 'block',
					marginLeft: 'auto', 
					marginRight: 'auto'
					}} 
				/>
			</div>
		)
	}
}

