import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import './app.css';
import NavigationBar from './Navbar.js'
import Contact from './Contact.js'
import Home from './Home.js'
import Calculator from './Calculator/calculator'
import WorkoutTracker from './personal_workout_tracker/workout_app'
import MTG from './mtg_card_collection/mtg_app'
import News from './news_search/news_search_app'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <NavigationBar/>
            <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/about" component={About} />
               <Route path="/calculator" component={Calculator} />
               <Route path="/workout" component={WorkoutTracker} />
               <Route path="/mtg" component={MTG} />
               <Route path="/news" component={News} />
               <Route component={NoMatch} />
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
