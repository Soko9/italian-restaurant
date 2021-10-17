import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/Menu.js';
import { DISHES } from './shared/dishes.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    }
  }

  render() {
    return (
      <div>
        <Navbar light color="warning">
          <div className="container">
            <NavbarBrand href="/">Restorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;