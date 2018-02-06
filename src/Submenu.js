import React from 'react';
import MenuItem from './MenuItem';

class Submenu extends React.Component {
	render() {
		return (
			<ul>
				<MenuItem text="Pescado" />
				<MenuItem text="Ensalada"/>
				<MenuItem text="Sopa"/>			
			</ul>
		);
	}
}

export default Submenu;