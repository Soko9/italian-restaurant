import React, { Component } from 'react';
import Menu from './Menu.js';
import Header from './Header.js';
import Footer from './Footer.js';
import { DISHES } from '../shared/dishes.js';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Menu dishes={this.state.dishes} />
        <Footer />
      </div>
    );
  }
}

export default Main;