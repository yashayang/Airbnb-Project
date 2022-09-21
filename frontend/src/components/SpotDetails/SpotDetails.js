import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOneSpot } from '../../store/spots';
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

  if (!spot) return null;

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
        ? <NavLink to={`/${spot.id}/images`}>
            <i className="fa-sharp fa-solid fa-circle-plus" style={{fontSize: 4 + 'em', color:'rgb(207, 99, 117)'}}></i>
          </NavLink>
        //   <NavLink to={`/${spot.id}/images`}>
        //   <i className="fa-light fa-pen-circle"></i>
        // </NavLink></>
        : null
      }
      {/* </div>
      <div>
      {spot.ownerId === currUserId
        ? <NavLink to={`/${spot.id}/images`}>
        <i className="fa-sharp fa-solid fa-pen-circle" style={{fontSize: 4 + 'em', color:'rgb(207, 99, 117)'}}></i>
      </NavLink>
        : null
      } */}
        <div>
        {spot.SpotImages.map(img => <img src={img.url} alt={img.id} id="spot-detal-img" key={img.id}/>)}
        </div>
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
