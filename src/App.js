import React from 'react';
import Menu from './Menu';

class App extends React.Component {
  constructor() {
		super();
    this.elementosMenu1 = ['Menú vegetariano', 'Menú pizza', 'Carta'];
    this.elementosMenu2 = ['Menú 2 a', 'Menú 2 b', 'Carta 2'];
  }
  
  render() {
    return (
        <div>
    		    <Menu elementos={this.elementosMenu1}/>
            <Menu elementos={this.elementosMenu2}/>
        </div>
    );
  }
}

export default App;
