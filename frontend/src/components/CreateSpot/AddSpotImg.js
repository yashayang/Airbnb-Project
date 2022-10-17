import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { addImages } from '../../store/spots';
import { getOneSpot } from '../../store/spots';

const AddSpotImgForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { spotId } = useParams();
  // console.log("From /components/AddSpotImg - spotId:", spotId)
  const spot = useSelector(state => state.spots.singleSpot);
  const currUserId = useSelector(state => state.session.user.id);
  // console.log("!!!!!!", spot, currUserId)
  const [url, setUrl] = useState('');
  const [preview, setPreview] = useState(true);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
   const errorArr = [];
   if (!url.includes('https://')) {
    errorArr.push('Please enter a valid url for the image.')
   }
  //  console.log("!!!!!!", errorArr)
   setErrors(errorArr)
  }, [url])

  useEffect(() => {
    dispatch(getOneSpot(spotId));
  }, [dispatch, spotId])

  const handleSubmit = (e) => {
    e.preventDefault();
    const imgData = { url, preview };
    // console.log("From /components/AddSpotImg - formInput:", imgData)

    if (spot.Owner.id !== currUserId) {
      const errors= []
      errors.push('You can only add images to the spot as a owner.')
      setErrors(errors)
      return null;
    }

    dispatch(addImages(imgData, spotId))
    .catch(async (res) => {
      const message = await res.json();
      if (message && message.errors) setErrors(message.errors);
    });

    return history.push(`/spots/${spotId}`)
  }

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push(`/spots/${spotId}`);
  }

  return (
    <div className="img-outter-container" onSubmit={handleSubmit}>
      <ul>
        {errors && errors.map((error, idx) => <li key={idx} className="errors-li">{error}</li>)}
      </ul>
      <form className="img-form">

        <label>Image url:</label>
        <input
          type="text"
          // placeholder="url"
          required
          value={url}
          onChange={e => setUrl(e.target.value)} />
        <label>Set as Preview Image:</label>
        <select onChange={e => setPreview(e.target.value)} value={preview}>
            <option key='true'>true</option>
            <option key='false'>false</option>
        </select>

        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>

      </form>
    </div>
  )
}

export default AddSpotImgForm;
