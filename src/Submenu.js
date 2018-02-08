import React from 'react';
import MenuItem from './MenuItem';

class Submenu extends React.Component {
	render() {
		return (
			<li>
				<span>Platos principales</span>
				<ul>
					<MenuItem text="Pescado" />
					<MenuItem text="Ensalada"/>
					<MenuItem text="Sopa"/>
				</ul>	
			</li>
		);
	}
}

export default Submenu;