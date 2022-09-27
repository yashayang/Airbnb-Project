import { csrfFetch } from './csrf';
const LOAD_ALL_REVIEWS = "reviews/setLoadAllReviews";
const LOAD_ONE_REVIEW = "reviews/setLoadOneReview";
const ADD_ONE_REVIEW = "reviews/setAddOneReview";
const ADD_REVIEW_IMG = "reviews/setAddReviewImg";
const UPDATE_REVIEW = "reviews/setUpdateReview";
const DELETE_REVIEW = "reviews/setDeleteReview";


const allReviews = (reviews) => {
  return {
    type: LOAD_ALL_REVIEWS,
    reviews
  }
}

const oneReview = (review) => {
  return {
    type: LOAD_ONE_REVIEW,
    review
  }
}

const addReview = (review) => {
  return {
    type: ADD_ONE_REVIEW,
    review
  }
}

const addReviewImg = (imgData) => {
  return {
    type: ADD_REVIEW_IMG,
    imgData
  }
}


const updateReview = (review) => {
  return {
    type: UPDATE_REVIEW,
    review
  }
}

const deleteReview = (reviewId) => {
  return {
    type: DELETE_REVIEW,
    reviewId
  }
}

export const getAllReviews = (spotId) => async (dispatch) => {
  const response = await fetch(`/api/spots/${spotId}/reviews`);
  if (response.ok) {
    const reviews = await response.json();
    dispatch(allReviews(reviews));
    return reviews;
  }
  return null;
}


const initialState = { User:{}, ReviewImages: {} }

const reviewReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_ALL_REVIEWS:
      newState = { ...state, User: {...state.User}, ReviewImages: {...state.ReviewImages} };
      action.reviews.Reviews.forEach(review => {
        newState[review.id] = review;
      })
    return newState;

    case LOAD_ONE_REVIEW:
    return newState;

    case ADD_ONE_REVIEW:
    return newState;

    case ADD_REVIEW_IMG:
    return newState;

    case UPDATE_REVIEW:
    return newState;

    case DELETE_REVIEW:
    return newState;

    default:
      return state;
  }
}

export default reviewReducer;
