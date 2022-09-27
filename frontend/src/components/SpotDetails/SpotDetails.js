import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOneSpot } from '../../store/spots';
import DeleteSpotForm from '../DeleteSpot/DeleteSpot';
import AllReviewsforSpot from "../../components/Reviews/AllReviewsforSpot";
import "./SpotDetails.css"

const SpotDetails = () => {
  const dispatch = useDispatch();
  const { spotId } = useParams();
  const spotIdNum = Number(spotId);
  const spot = useSelector(state => state.spots.singleSpot);
  const currUser = useSelector(state => state.session.user);
  // console.log("spot from component/singleSpot", spot)

  useEffect(() => {
    dispatch(getOneSpot(spotIdNum));
    // return (
    //   () => {

    //   }
    // )
  }, [dispatch, spotIdNum])
  // console.log("!!!!!!!!!!!!", spot)

  if (!spot.Owner) return null;
  if (!Object.keys(spot).length) return null;

  return (
    <div id="spot-details-outter-container">
     <h1>{spot.name}</h1>
     <div id="spot-subtitle">
      <i className="fa-sharp fa-solid fa-star"></i>
      <span>{spot.avgStarRating === "NaN" ? `No Rating` : spot.avgStarRating}{` · `}</span>
      <span>
        {spot.avgStarRating === "NaN" ? `No Reviews`
         : <NavLink to={`/${spot.id}/reviews`}>
             {/* <AllReviewsforSpot/> */}
             <label>reviews</label>
           </NavLink>
         }
        <label>{` · `}</label>
        </span>
      <span>{spot.city}{`, `}</span>
      <span>{spot.state}{`, `}</span>
      <span>{spot.country}</span>
     </div>
     <div id="spot-img-container">
        {spot !== undefined && spot.SpotImages.map(img => <img src={img.url} alt={img.id} id="spot-detal-img" key={img.id}/>)}
     </div>
     <div id="add-img-container">
      {currUser && spot.ownerId === currUser.id
        ? <NavLink to={`/${spot.id}/images`} style={{ textDecoration: 'none'}}>
            <i className="fa-sharp fa-solid fa-circle-plus" style={{fontSize: 4 + 'em', color:'rgb(207, 99, 117)'}}></i>
            <label>Add more images...</label>
          </NavLink>
        : null
      }
      </div>
      <div id="edit-spot-container">
      {currUser && spot.ownerId === currUser.id
        ? <NavLink to={`/${spotIdNum}/edit`} style={{ textDecoration: 'none'}}>
          <i className="fa-sharp fa-solid fa-circle-plus" style={{fontSize: 4 + 'em', color:'black'}}></i>
          <label>Edit the spot...</label>
        </NavLink>
        : null
        }
      </div>
      <div>
      {currUser && spot.ownerId === currUser.id
        ? <DeleteSpotForm />
        : null
        }
      </div>

     <div id="spot-lower-title">
      <h2>Entire place hosted by {spot.Owner.firstName}</h2>
      {/* currUser && currUser.firstName */}
     </div>
     <div id="spot-description">
      <p>{spot.description}</p>
     </div>
    </div>
  )
}

export default SpotDetails;
