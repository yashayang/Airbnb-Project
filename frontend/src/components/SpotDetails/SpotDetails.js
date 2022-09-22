import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOneSpot } from '../../store/spots';
import DeleteSpotForm from '../DeleteSpot/DeleteSpot';
import "./SpotDetails.css"

const SpotDetails = () => {
  const dispatch = useDispatch();
  const { spotId } = useParams();
  const spotIdNum = Number(spotId);
  const spot = useSelector(state => state.spots.singleSpot);
  const currUserId = useSelector(state => state.session.user.id);
  // console.log("spot from component/singleSpot", spot)

  useEffect(() => {
    dispatch(getOneSpot(spotIdNum));
  }, [dispatch, spotIdNum])
  // console.log("!!!!!!!!!!!!", spot)

  if (!spot) return null;
  if (!Object.keys(spot).length) return null;

  return (
    <div id="spot-details-outter-container">
     <h1>{spot.name}</h1>
     <div id="spot-subtitle">
      <i className="fa-sharp fa-solid fa-star"></i>
      <span>{spot.avgStarRating === "NaN" ? `No Rating` : spot.avgStarRating}{` · `}</span>
      <span>reviews{` · `}</span>
      <span>{spot.city}{`, `}</span>
      <span>{spot.state}{`, `}</span>
      <span>{spot.country}</span>
     </div>
     <div id="spot-img-container">
      {spot.ownerId === currUserId
        ? <span>
          <NavLink to={`/${spot.id}/images`}>
            <i className="fa-sharp fa-solid fa-circle-plus" style={{fontSize: 4 + 'em', color:'rgb(207, 99, 117)'}}></i>
          </NavLink>
          </span>
        : null
      }
      </div>
      <div>
      {spot.ownerId === currUserId
        ? <NavLink to={`/${spotIdNum}/edit`}>
        <i className="fa-sharp fa-solid fa-circle-plus" style={{fontSize: 4 + 'em', color:'black'}}></i>
        </NavLink>
        : null
        }
      </div>
      <div>
      {spot.ownerId === currUserId
        ? <DeleteSpotForm />
        // <NavLink to={`/${spot.id}/delete`}>
        // <button>Delete the spot</button>
        // </NavLink>
        : null
        }
      </div>
        <div>
        {spot !== undefined && spot.SpotImages.map(img => <img src={img.url} alt={img.id} id="spot-detal-img" key={img.id}/>)}
        </div>
     <div id="spot-lower-title">
      <h2>Entire place hosted by {spot.Owner.firstName}</h2>
     </div>
     <div id="spot-description">
      <p>{spot.description}</p>
     </div>
     {/* <Route path="/:spotId/images">
      <SpotDetails/>
    </Route> */}
    </div>
  )
}

export default SpotDetails;
