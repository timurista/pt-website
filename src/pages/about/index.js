import React from 'react';
import picture from '../../images/cristina-bracamonte.jpg';

export default function About(props) {
  return (
    <div>
      <h1>About</h1>
      <img alt="Cristina Bracamonte" src={picture} />
      <p>Some history about me...</p>
    </div>
  )
}