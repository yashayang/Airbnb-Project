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
  showMenu === true ? menuVisibility = 'visible' : menuVisibility = 'not-visible'

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <div className='dropdown-outer-container'>
          <button onClick={openMenu} className='profile-button'>
            <i className="fa-solid fa-bars"></i>
            <i className="fa-solid fa-circle-user"></i>
          </button>

          <div>
            <div id='profile-dropdown' className={menuVisibility}>
              <div className='profile-btm-wrap'>
                <div className="profile-btm-div">
                  <LoginFormModal />
                </div>
                <div className="profile-btm-div">
                  <SignupFormModal />
                </div>
              </div>
            </div>
          </div>

        </div>

      </>
    );
  }

  return (
    <>
    <ul className="nav-ul">
      <li className="nav-bar">
        <div className="logo">
          <NavLink exact to="/"><img src={Logo} alt="logo"/></NavLink>
        </div>
        <div className="nav-bar-right-group">
        <div className="nav-bar-middle">
          {sessionUser && <NavLink exact to="/new-spot" className="create-spot">Become a Host</NavLink>}
        </div>
        <div className="nav-bar-right">
          {isLoaded && sessionLinks}
        </div>
        </div>
      </li>
    </ul>
    <div className='break'></div>
    </>
  );
}

export default Navigation;
