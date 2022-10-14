import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import {getAllReviews} from '../../store/reviews';
import './AllReviewsforSpot.css';

const AllReviewsforSpot = () => {
  const dispatch = useDispatch();
  const { spotId } = useParams();
  const reviews = useSelector(state => state.reviews)
  const spot = useSelector(state => state.spots.singleSpot);
  console.log("reviews state from All Reviews for Spot:", reviews)

  const currSpotReviews = Object.values(reviews).filter(review => {
    console.log("review.spotId:", review.spotId)
    return review.spotId === +spotId;
  })

  console.log("currSpotReviews from All Reviews for Spot:", currSpotReviews)

  useEffect(() => {
    dispatch(getAllReviews(spotId))
  }, [dispatch, spotId])

  return (
    <>
      <div>
        <div>
        <i className="fa-sharp fa-solid fa-star"></i>
        <span>{' '}{spot.avgStarRating === "NaN" ? `No Rating` : spot.avgStarRating}{` · `}</span>
        <label>reviews</label>
        </div>
        {Object.values(currSpotReviews).map(review => {
        return (
           <h4>{review.review}</h4>
        )
        })}
      </div>

      <div>

      </div>

    </>
  )
}

export default AllReviewsforSpot;
