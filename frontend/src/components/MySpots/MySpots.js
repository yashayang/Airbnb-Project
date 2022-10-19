import { useEffect } from 'react'
import { NavLink, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getAllSpots, deleteOneSpot } from '../../store/spots'


import './MySpots.css'

const MySpots = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const spots = useSelector(state => state.spots.allSpots);
  const userId = useSelector(state => state.session.user.id);
  const spotsArr = Object.values(spots).filter(spot => spot.ownerId === userId)

  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch])

  const deleteSpotClickEvent = async (spotId) => {
    await dispatch(deleteOneSpot(spotId))
    history.push("/my-spots");
  }

  if(!spots) return null;

  return (
    <>
      <div id="mySpot-title">
        <h1>My Spots</h1>
      </div>
      <div id="outer-container">
          {spotsArr.length > 0 ? spotsArr.map(spot => {
        return (
          <div id="spot-card-outer" key={spot.id}>

            <NavLink to={`/spots/${spot.id}`} style={{ textDecoration: 'none'}}>

                <div className='spot-img-div'><img src={spot.prevewImage} alt={spot.id} id="spot-img"/></div>

                <div id="spot-info-container">
                  <div id="spot-info-top">
                    <span id="spot-location">{spot.city}{`, `}{spot.state}</span>
                    <div id="spot-review">
                      <i className="fa-sharp fa-solid fa-star" style={{ color: 'black'}}></i>
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

            <div className="edit-buttons-container">
                <NavLink to={`/${spot.id}/edit`}><button className="user-button">Edit</button></NavLink>
                <button className="user-button" onClick={() => deleteSpotClickEvent(spot.id)}>Delete</button>
            </div>

          </div>
        )
      })
      : <div className="no-spots">You're not currently hosting any spots...</div>
    }
      </div>
  </>
  )
}

export default MySpots;
