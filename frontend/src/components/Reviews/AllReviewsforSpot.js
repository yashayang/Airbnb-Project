import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';

import {getAllReviews} from '../../store/reviews';
import './AllReviewsforSpot.css';

const AllReviewsforSpot = () => {
  const dispatch = useDispatch();
  const { spotId } = useParams();
  const reviews = useSelector(state => state.reviews)
  const spot = useSelector(state => state.spots.singleSpot);
  const userId = useSelector(state => state.session.user.id)
  // console.log("reviews state from All Reviews for Spot:", reviews)

  const currSpotReviews = Object.values(reviews).filter(review => {
    // console.log("review.spotId:", review.spotId)
    return review.spotId === +spotId;
  })

  // console.log("currSpotReviews from All Reviews for Spot:", currSpotReviews)

  useEffect(() => {
    dispatch(getAllReviews(spotId))
  }, [dispatch, spotId])

  return (
    <div>
      <div className="review-title">
        <i className="fa-sharp fa-solid fa-star"></i>
        <span>{' '}{spot.avgStarRating === "NaN" ? `No Rating` : spot.avgStarRating}{` · `}</span>
        <label>{currSpotReviews.length}{' '}reviews{' '}</label>
      </div>
      <div className="create-review">{
        currSpotReviews.length === 0
        && spot.ownerid !== userId
        && <NavLink to={`/${spot.id}/create-reviews`} style={{ textDecoration: 'none', color: 'rgb(207, 99, 117)'}}>
          Review this Spot...
          </NavLink>
          }
      </div>
      <div className="review-details-container">
        {currSpotReviews.map(review => {
        return (
          <div className="each-review-detail" key={review.id}>
          <div>
            <div className="each-review-user">{review.User.firstName}{" "}{review.User.lastName}</div>
            <div className="each-review-date">{new Date(review.createdAt).toString().slice(3, -42)}</div>
          </div>
            <div>{review.review}</div>
            <div>{review.ReviewImages.map(image => <img className="each-review-img" src={image.url} alt={image.url} key={image.url}></img>)}</div>
          </div>
        )
        })}
      </div>
    </div>
  )
}

export default AllReviewsforSpot;
