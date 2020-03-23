import React, { Component } from 'react';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, fetchComments, postFeedback } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Checkout from './CheckoutComponent';
import Dashboard from './DashboardComponent';
import Appointment from './AppointmentComponent';


const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
  }
}

const mapDispatchToProps = dispatch => ({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  postFeedback: (newFeedback) => (postFeedback(newFeedback)),
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
});

class Main extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchComments();
  }

  render() {

    const HomePage = () => {
      return(
        <Home />
      );
    }


  const displayHeader = () => {
    if (this.props.location.pathname ==='/signIn') {
      return "";
    }
    else if (this.props.location.pathname ==='/appointment') {
      return "";
    }
    else if (this.props.location.pathname ==='/checkout') {
      return "";
    }
    else{
      return <Header/>;
    }
}

    return (
      <div>
        { displayHeader() }
        <div>
        <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
              <Switch location={this.props.location} >
                  <Route path='/home' component={HomePage} />
                  <Route exact path='/aboutus' component={() => <About />} />} />
                  <Route exact path='/contactus' component={() => <Contact postFeedback={this.props.postFeedback} resetFeedbackForm={this.props.resetFeedbackForm} />} />
                  <Route exact path='/checkout' component={Checkout} />
                  <Route exact path='/dashboard' component={Dashboard} /> 
                  <Route exact path='/appointment' component={Appointment} />
                  <Redirect to="/home" />
              </Switch>
            </CSSTransition>
        </TransitionGroup>    
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
