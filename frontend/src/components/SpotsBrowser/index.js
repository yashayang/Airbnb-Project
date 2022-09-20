import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { getAllSpots } from '../../store/spots';
import SpotDetails from '../SpotDetails/SpotDetails';
import "./SpotsBrowser.css";

const SpotsBrowser = () => {
  const dispatch = useDispatch();
  const spots = useSelector(state => state.spots);

  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch])

  // console.log("!!!!!SpotsBrowser spots var:", spots)
  if(!spots) return null;

  return (
    <div id="outer-container">
    {Object.values(spots).map(spot => {
      return (
        <div id="spot-card-outer">

          <Link to={`/spots/${spot.id}`}>

            <div id="spot-card-container">
              <img src={spot.prevewImage} alt={spot.id} id="spot-img"/>

              <div id="spot-info-container">

                <div id="spot-info-top">
                  <span id="spot-location">{spot.city}{`, `}{spot.state}</span>
                  <div id="spot-review">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <span>{spot.avgRating}</span>
                  </div>
                </div>

                <div id="spot-price-container">
                  <div>
                    <span id="spot-price-span">{`$${spot.price}`}</span>{' '}
                    night
                  </div>
                </div>

              </div>

            </div>

          </Link>

        </div>
      )
    })}
    <Route path="/spots/:spotId">
      <SpotDetails/>
    </Route>
    </div>
  )
}

export default SpotsBrowser;
