import React from 'react';

class MenuItem extends React.Component {
	render() {
		return (
			<li>{this.props.text}</li>
		);
	}
}

export default MenuItem;