import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const TopNav= styled.nav`
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  background-color: #ebebeb;
  top: 0;
  margin-top: 0;

  .main-logo {
    float: left;
  }

  ul {
    display: flex;
    margin: 0;
  }
  ul li {
    display: inline-block;
    float: left;
  }
  ul li:not(:first-child) {
    margin-left: 25px;
  }
  ul li a {
    display: inline-block;
    outline: none;
    color: #1f2227;
    font-size: 16px;
    text-decoration: none;
    letter-spacing: 0.04em;
  }
  ul li a:hover {
    color: #808080;
    text-decoration: none;
  }
`
const TopNavLink = styled(NavLink)`
  &.is-active {
    transition: color, font-weight 500ms;
    font-weight: bold;
    color: #555;
    border-bottom: 2px solid #60ffa5;
  }
`

const MainLogo = styled.span`
  border-radius: 50%;
  border: 5px solid #60ffa5;
  color: #444;
  padding: 2px;
  transform: rotate(2deg);
  font-family: Comic-sans;
`
const MainHeaderText = styled.span`
  font-size: 12px;
  color: #888;
  letter-spacing: .125rem;
  flex: 1;
  padding-left: 16px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`

export default function Nav(props) {
  return (
  <TopNav>
    <MainLogo>CB</MainLogo>
    <MainHeaderText>
      Cristina Baracmonte,
      DPT
      </MainHeaderText>
    <ul>
      <li><TopNavLink to="/reviews" activeClassName='is-active'>Reviews</TopNavLink></li>
      <li><TopNavLink to="/about" activeClassName='is-active'>About</TopNavLink></li>
      <li><TopNavLink to="/classes" activeClassName='is-active'>Classes</TopNavLink></li>
    </ul>
  </TopNav>
  )
}