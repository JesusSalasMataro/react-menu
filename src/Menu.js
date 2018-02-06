import React from 'react';
import MenuItem from './MenuItem';
import Submenu from './Submenu';

class Menu extends React.Component {
	render() {
		return (
			<ul>
				<MenuItem text="Menú vegetariano"/>
				<MenuItem text="Menú pizza"/>
				<MenuItem text="Carta"/>
				<Submenu/>			
			</ul>
		);
	}
}

export default Menu;