import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import EditSpot from '';
import { getOneSpot } from '../../store/spots';
import "./SpotDetails.css"

const SpotDetails = () => {
  const dispatch = useDispatch();
  const { spotId } = useParams();
  const spotIdNum = Number(spotId);
  const spot = useSelector(state => state.spots.singleSpot)
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
      <span>{spot.avgStarRating}{` · `}</span>
      <span>reviews{` · `}</span>
      <span>{spot.city}{`, `}</span>
      <span>{spot.state}{`, `}</span>
      <span>{spot.country}</span>
     </div>
     <div id="spot-img-container">
       {spot.SpotImages.map(img => <img src={img.url} alt={img.id} id="spot-detal-img" key={img.id}/>)}
     </div>
     <div id="spot-lower-title">
      <h2>Entire place hosted by {spot.Owner.firstName}</h2>
     </div>
     <div id="spot-description">
      <p>{spot.description}</p>
     </div>
    </div>
  )
}

export default SpotDetails;
