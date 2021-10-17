import React, { Component } from 'react';
import Menu from './Menu.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Dish from './Dish.js';
import { DISHES } from '../shared/dishes.js';
import { COMMENTS } from '../shared/comments.js';
import { PROMOTIONS } from '../shared/promotions.js';
import { LEADERS } from '../shared/leaders.js';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    }
  }

  render() {
    const HomePage = () => {
      return (
        <Home
        dish={this.state.dishes.filter(dish => dish.featured)[0]}
        promotion={this.state.promotions.filter(promo => promo.featured)[0]}
        leader={this.state.leaders.filter(leader => leader.featured)[0]} 
        />
      );
    }

    const MenuPage = () => {
      return (
        <Menu
        dishes={this.state.dishes}
        />
      );
    }

    const DishPage = ({ match }) => {
      return (
        <Dish
        dish={this.state.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]}
        comments={this.state.comments}
        />
      );
    }

    const AboutPage = () => {
      return (
        <About
        leaders={this.state.leaders}
        />
      );
    }

    return (
      <div>
        <Header />
        <br/>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={MenuPage} />
          <Route path="/menu/:dishId" component={DishPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <br/>
        <Footer />
      </div>
    );
  }
}

export default Main;