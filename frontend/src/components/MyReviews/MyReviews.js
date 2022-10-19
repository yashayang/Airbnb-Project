import { useEffect } from 'react'
import { NavLink, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getMyReviews, deleteOneReview } from '../../store/reviews'
import './MyReviews.css'

const MyReviews = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const spots = useSelector(state => state.spots.allSpots);
  const userId = useSelector(state => state.session.user.id);
  const reviews = useSelector(state => state.reviews)

  useEffect(() => {
    dispatch(getMyReviews());
  }, [dispatch])

  const currSpotReviews = Object.values(reviews).filter(review => {
    // console.log("review.spotId:", review.spotId)
    return review.userId === +userId;
  })

  const deleteReviewClickEvent = async (reviewId) => {
    await dispatch(deleteOneReview(reviewId))
    history.push("/my-reviews");
  }

  return (
    <div className="myReviews-outer-contrainer">
      {/* <div className="review-title">
      <i className="fa-sharp fa-solid fa-star"></i>
      <span>{' '}{spot.avgStarRating === "NaN" ? `No Rating` : spot.avgStarRating}{` · `}</span>
      <label>{currSpotReviews.length}{' '}reviews{' '}</label>
      </div> */}
      <div className="review-details-container">
      {currSpotReviews.length !== 0 && currSpotReviews.map(review => {
      return (
        <div className="each-review-detail" key={review.id}>
        <div>
          <div className="each-review-user">{review?.User?.firstName}{" "}{review?.User?.lastName}</div>
          <div className="each-review-date">{new Date(review?.createdAt).toString().slice(3, -42)}</div>
        </div>
          <div>{review.review}</div>
          <div>{review?.ReviewImages?.map(imageUrl => <img className="each-review-img" src={imageUrl} alt={imageUrl} key={imageUrl}></img>)}</div>
        <div className="edit-buttons-container">
          {/* <NavLink to={`/${spot.id}/edit`}><button className="user-button">Edit</button></NavLink> */}
          <button className="user-button" onClick={() => deleteReviewClickEvent(review.id)}>Delete</button>
        </div>
        </div>
      )
      })}
      </div>
    </div>
  )
}

export default MyReviews;
