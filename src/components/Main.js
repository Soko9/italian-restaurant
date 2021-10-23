import React, { Component } from 'react';
import Menu from './Menu.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Dish from './Dish.js';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  };
}

class Main extends Component {
  render() {
    const HomePage = () => {
      return (
        <Home
        dish={this.props.dishes.filter(dish => dish.featured)[0]}
        promotion={this.props.promotions.filter(promo => promo.featured)[0]}
        leader={this.props.leaders.filter(leader => leader.featured)[0]} 
        />
      );
    }

    const MenuPage = () => {
      return (
        <Menu
        dishes={this.props.dishes}
        />
      );
    }

    const DishPage = ({ match }) => {
      return (
        <Dish
        dish={this.props.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]}
        comments={this.props.comments}
        />
      );
    }

    const AboutPage = () => {
      return (
        <About
        leaders={this.props.leaders}
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

export default withRouter(connect(mapStateToProps)(Main));