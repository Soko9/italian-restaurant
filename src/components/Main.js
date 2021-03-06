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
import { postComment, postFeedback, fetchFeedbacks, fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators.js';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
    feedbacks: state.feedbacks
  };
}

const mapDispatchToProps = dispatch => ({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  postFeedback: (firstName, lastName, email, telNum, agree, contactType, message) => dispatch(postFeedback(firstName, lastName, email, telNum, agree, contactType, message)),
  fetchDishes: () => {dispatch(fetchDishes())},
  resetFeedback: () => {dispatch(actions.reset("feedback"))},
  fetchComments: () => {dispatch(fetchComments())},
  fetchPromos: () => {dispatch(fetchPromos())},
  fetchLeaders: () => {dispatch(fetchLeaders())},
  fetchFeedbacks: () => {dispatch(fetchFeedbacks())}
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
    this.props.fetchFeedbacks();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter(dish => dish.featured)[0]}
          isLoading={this.props.dishes.isLoading}
          errMsg={this.props.dishes.err}
          promotion={this.props.promotions.promotions.filter(promo => promo.featured)[0]}
          isLoadingPromo={this.props.promotions.isLoading}
          errMsgPromo={this.props.promotions.err}
          leader={this.props.leaders.leaders.filter(leader => leader.featured)[0]}
          isLoadingLeader={this.props.leaders.isLoading}
          errMsgLeader={this.props.leaders.err} 
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
          comments={this.props.comments.comments}
          errMsgComments={this.props.comments.err}
          postComment={this.props.postComment}
        />
      );
    }

    const AboutPage = () => {
      return (
        <About
          leaders={this.props.leaders.leaders}
        />
      );
    }

    const ContactPage = () => {
      return(
        <Contact
          feedbacks={this.props.feedbacks.feedbacks}
          postFeedback={this.props.postFeedback}
          resetFeedback={this.props.resetFeedback}
        />
      );
    }

    return (
      <div>
        <Header />
        <br/>
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={1500}>
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route exact path="/menu" component={MenuPage} />
              <Route path="/menu/:dishId" component={DishPage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/contact" component={ContactPage} />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <br/>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));