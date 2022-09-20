import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal/>
        <SignupFormModal/>
      </>
    );
  }

  return (
    <ul>
      <li className="nav-bar">
        <NavLink exact to="/" style={{ 'text-decoration': 'none', 'color': '#45454599' }}>Home</NavLink>
        <NavLink exact to="/" style={{ 'text-decoration': 'none', 'color': '#45454599' }}>Become a Host</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
