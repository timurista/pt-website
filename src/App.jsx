import React, { Component } from 'react';
import classes from './css/main.css';
import profileImg from './images/cristina-bracamonte.jpg';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1>Dr Cristina Baracmonte</h1>
        </div>
        <div className="body-container">
          <div className="sidebar">
            <img className="main" src={profileImg} />
          </div>
          <div className="subbanner">
            <h1>Schedule A Visit</h1>
            <form id="form" enctype="text/plain">
              <label for="firstname">First Name</label>
              <input type="text" name="firstname" placeholder="First Name" type="required" />
              <label for="lastname" >Last Name</label>
              <input type="text" name="lastname" placeholder="Last Name" type="required" />
              <label for="date">Date & Time</label>
              <input id="date" type="date" step="1" placeholder="5:30 AM" />
              <input type="submit" value="Schedule Now" />
            </form>
          </div>
        </div>
      </div>
    );
  }
};
