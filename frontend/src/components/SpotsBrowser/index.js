import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getAllSpots } from '../../store/spots';
import "./SpotsBrowser.css";

const SpotsBrowser = () => {
  const dispatch = useDispatch();
  const spots = useSelector(state => state.spots.allSpots);
  // console.log("!!!!!SpotsBrowser spots var:", spots)

  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch])

  if(!spots) return null;

  return (
    <div id="outer-container">
    {Object.values(spots).map(spot => {
      return (
        <div id="spot-card-outer" key={spot.id}>

          <NavLink to={`/spots/${spot.id}`} style={{ textDecoration: 'none'}}>

              <div className='spot-img-div'><img src={spot.prevewImage} alt={spot.id} id="spot-img"/></div>

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


          </NavLink>

        </div>
      )
    })}
    </div>
  )
}

export default SpotsBrowser;
