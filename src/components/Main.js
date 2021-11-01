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
import { addComment, fetchDishes } from '../redux/ActionCreators.js';
import { actions } from 'react-redux-form';

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  };
}

const mapDispatchToProps = dispatch => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())},
  resetFeedback: () => {dispatch(actions.reset("feedback"))}
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchDishes();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter(dish => dish.featured)[0]}
          isLoading={this.props.dishes.isLoading}
          errMsg={this.props.dishes.err}
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
          dish={this.props.dishes.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMsg={this.props.dishes.err}
          comments={this.props.comments}
          addComment={this.props.addComment}
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

    const ContactPage = () => {
      return(
        <Contact
          resetFeedback={this.props.resetFeedback}
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
          <Route exact path="/contact" component={ContactPage} />
          <Redirect to="/home" />
        </Switch>
        {/* <br/> */}
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));