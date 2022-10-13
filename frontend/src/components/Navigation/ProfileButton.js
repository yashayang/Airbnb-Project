import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

import * as sessionActions from '../../store/session';

import './Navigation.css';

function ProfileButton({ user }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <div className="dropdown-outer-container">
      <button onClick={openMenu} className="profile-button">
        <i className="fa-solid fa-bars"></i>
        <i className="fa-solid fa-circle-user"></i>
      </button>

      <div>
        {showMenu && (
          <div className="profile-dropdown">
            <div className="curr-user">{user.username}</div>
            <div className="curr-user">{user.email}</div>

            <div className='break'></div>

            <div className="profile-btm-wrap">
              <div onClick={() => history.push('/my-spots')} className="profile-btm-div">My Spots</div>
              <div onClick={() => history.push('/my-reviews')} className="profile-btm-div">My Reviews</div>
              <div onClick={logout} className="profile-btm-div">Log Out</div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

export default ProfileButton;
