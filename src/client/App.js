import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import './app.css';
// import ReactImage from './react.png';
import NavigationBar from './Navbar.js'
import Contact from './Contact.js'
import Home from './Home.js'
import Calculator from './Calculator/calculator'
import WorkoutTracker from './personal_workout_tracker/workout_app'

// This will be where I wil load all the project that i will code up to insert to the app

export default class App extends Component {
  // state = { username: null };

  // componentDidMount() {
  //   fetch('/api/getUsername')
  //     .then(res => res.json())
  //     .then(user => this.setState({ username: user.username }));
  // }


  render() {
    return (
      <Router>
        <div>
            <NavigationBar/>
            <Switch>
              // Using excat key word makes the components switch accurately
               <Route exact path="/" component={Home} />
               <Route exact path="/about" component={About} />
               <Route exact path="/calculator" component={Calculator} />
               <Route exact path="/workout" component={WorkoutTracker} />
               <Route exact path="/project/:apps" component={Projects} />
               <Route exact component={NoMatch} />
            </Switch>
            <Contact />
        </div>
      </Router>
    );
  }
}

  function Projects({match}){
    return <h1>{match.params.apps} APP</h1>
  }

  function About(){
    return <h1>This is about me</h1>
  } 

  function NoMatch(){
    return <h1>No match found</h1>
  }
