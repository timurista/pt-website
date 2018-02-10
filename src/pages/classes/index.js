import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  color:  #555;
  font-weight: bold;
  text-decoration: none;

  pointer: cursor;

  &:before {
    content: "►";
    color: #60ffa5;
    padding-right: 5px;
  }
  &:hover {
    border-bottom: 2px solid #60ffa5;
  }
`

export default function Classes(props) {
  return (
    <div>
      <h1>Courses I teach</h1>
      <Link href="https://www.udemy.com/my-course-name">My Udemy Class which isn't up yet :(</Link>
    </div>
  )
}