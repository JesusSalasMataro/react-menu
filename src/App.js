import React from 'react';
import Menu from './Menu';

class App extends React.Component {
  constructor() {
		super();
    this.elementosMenu1 = ['Menú 1 a', 'Menú 1 b', 'Menú 1 c'];
    this.elementosMenu2 = ['Menú 2 a', 'Menú 2 b', 'Menú 2 c'];
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
