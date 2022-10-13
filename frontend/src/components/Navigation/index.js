import React from 'react';
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';
import Logo from '../Logo/airdnd 2.svg';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  let [showMenu, setShowMenu] = useState(false)

  const openMenu = () => {
      if (showMenu) return;
      else setShowMenu(true);
  }

  useEffect(() => {
      if (!showMenu) return;

      const closeMenu = () => {
          setShowMenu(false);
      };

      document.addEventListener('click', closeMenu);

      return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  let menuVisibility
  showMenu === true ? menuVisibility = 'menu-visible' : menuVisibility = 'menu-not-visible'

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        {/* <LoginFormModal/>
        <SignupFormModal/> */}
        <div className='dropdown-wrapper'>
                <div className='profile-button-wrapper'>
                    <button onClick={openMenu} className='profile-button'>
                      <i className="fa-solid fa-bars"></i>
                      <i className="fa-solid fa-circle-user"></i>
                    </button>
                </div>

                    <div id='profile-dropdown' className={menuVisibility}>
                        <div className='sessionlinks'>
                        <LoginFormModal />
                        <SignupFormModal />
                        </div>

                    </div>

            </div>
      </>
    );
  }

  return (
    <ul>
      <li className="nav-bar">
        <div className="nav-bar-left">
          <NavLink exact to="/"><img src={Logo} alt="logo" width="100px"/></NavLink>
        </div>
        <div className="nav-bar-middle">
          <NavLink exact to="/new-spot" className="create-spot-page">Become a Host</NavLink>
        </div>
        <div className="nav-bar-right">
          {isLoaded && sessionLinks}
        </div>
      </li>
    </ul>
  );
}

export default Navigation;
