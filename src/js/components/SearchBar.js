import React from "react";

export default class SearchBar extends React.Component {
	constructor(){
		super();

		this.handleChange = this.handleChange.bind(this);
		this.handleEnter = this.handleEnter.bind(this);
	}


	handleChange(e){
		let address = e.target.value;
		this.props.changeURL(address);
	}

	handleEnter(e){
		let val = e.which || e.keyCode;

		var url = this.props.url;

		if(val == 13){
			var self = this.props;

			$.ajax({
				url: 'sendURL',
				method: 'POST',
				dataType: 'json',
				// dataType: 'text',
				data: {
					address: url
				},
				success: function(data){
					// console.log(data);
					var i=0;

					data.forEach(function(obj){
						obj.key = i++;
					});

					self.changeWhoIsData(data);
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
		console.log('Rendering SearchBar');


		return (
			<div>
				<input 
				value={this.props.url}
				onChange={this.handleChange} 
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

// <button type="button" style={styles}>Search</button>