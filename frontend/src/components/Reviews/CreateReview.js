import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import {createOneReview} from '../../store/reviews';
import {getAllReviews} from '../../store/reviews';
import "./CreateReview.css";

const CreateReview = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { spotId } = useParams()

  const [errors, setErrors] = useState([]);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(5);
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ratingNum = parseInt(rating)
    const newReview = {
      review,
      stars: ratingNum,
      url
    };
    // console.log("CreateReview-newReview:", newReview)

    dispatch(createOneReview(newReview, spotId, url))
    .then(res => history.push(`/spots/${spotId}`))
    .catch(async (res) => {
      console.log("CreateReview-dispatch-res:", res)
      if (res === undefined) return null;
      const message = await res.json();
      if (message && message.errors) setErrors(message.errors);
      // if (message.status === 200) history.push(`/spots/${spotId}`);
      console.log("!!!!!!!!!", message)
    });
    await dispatch(getAllReviews(spotId));

  }

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push(`/spots/${spotId}`);
  }

  return (
    <div className="create-review-outer-container">
      <ul>
        {errors && errors.map((error, idx) => <li key={idx} className="errors-li">{error}</li>)}
      </ul>
      <form onSubmit={handleSubmit}>
      <label>Review:</label>
      <div>
        <textarea
            id='review'
            placeholder='Providing your review here..'
            value={review}
            required
            onChange={e => setReview(e.target.value)}>
        </textarea>
      </div>
      <label>Rating(1 - 5):</label>
      <div>
        <input
            type='decimel'
            min='1'
            max='5'
            placeholder='5'
            value={rating}
            required
            onChange={e => setRating(e.target.value)}>
        </input>
      </div>
      <label>Add a picture:</label>
      <div>
        <input
          type='text'
          placeholder='https://...'
          value={url}
          // required
          onChange={e => setUrl(e.target.value)}>
        </input>
      </div>
      <div>
        <button>Create Review</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </div>
      </form>
    </div>
  )
}

export default CreateReview;
