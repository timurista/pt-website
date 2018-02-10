import React, { Component } from 'react';
import classes from './css/main.css';
// import profileImg from './images/cristina-bracamonte.jpg';
import DatePicker from './lib/DatePicker';
import { Route, Redirect } from 'react-router-dom';
import Nav from './lib/nav';
import Reviews from './pages/reviews';
import About from './pages/about';
import Classes from './pages/classes';

import {PageSection, Container} from './lib/section';

export default class App extends Component {
  render() {
    return (
    <div>
      <Nav />
      <PageSection>
        <Container>
          <Route exact path="/">
            <Redirect to="/reviews"/>
          </Route>
          <Route path="/reviews" component={Reviews}/>
          <Route path="/about" component={About}/>
          <Route path="/classes" component={Classes}/>
        </Container>
      </PageSection>
    </div>      
    );
  }
};
