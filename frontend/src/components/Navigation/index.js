import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';
import Logo from '../Logo/Airdnd Logo.svg';

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
        <div className="nav-bar-left">
          <NavLink exact to="/" style={{ textDecoration: 'none', 'color': '#45454599' }}><img src={Logo} alt="logo" width="100px" marginleft="50px"/></NavLink>
        </div>
        <div className="nav-bar-middle">
          <NavLink exact to="/new-spot" style={{ textDecoration: 'none', 'color': '#45454599' }}>Become a Host</NavLink>
        </div>
        <div className="nav-bar-right">
          {isLoaded && sessionLinks}
        </div>
      </li>
    </ul>
  );
}

export default Navigation;
