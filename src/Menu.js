import React from 'react';
import MenuItem from './MenuItem';

class Menu extends React.Component {

	render() {
		const elementos = this.props.elementos.map((e) => 
			<MenuItem text={e}/>			
		);

		return (
			<ul>
				{elementos}			
			</ul>
		)
	}
}

export default Menu;