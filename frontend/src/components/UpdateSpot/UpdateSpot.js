import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateOneSpot, getOneSpot } from '../../store/spots';
import { useHistory, useParams } from "react-router-dom";

import "./UpdateSpot.css";

const UpdateSpotForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {spotId} = useParams();

  // const user = useSelector(state => state.session.user);
  const spot = useSelector(state => state.spots.singleSpot);

  const [errors, setErrors] = useState([]);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  // const [url, setUrl] = useState('');

  useEffect(() => {
    dispatch(getOneSpot(+spotId));
}, [dispatch, spotId]);

useEffect(() => {
    if (spot) {
        setAddress(spot.address);
        setCity(spot.city);
        setState(spot.state);
        setCountry(spot.country);
        setLat(spot.lat);
        setLng(spot.lng);
        setName(spot.name);
        setDescription(spot.description);
        setPrice(spot.price);
        // setUrl(spot.url);
    }
}, [spot]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const spotInfo = { name, description, address, city, state, country, lat, lng, price }

    await dispatch(updateOneSpot(spotInfo, +spotId));
    history.push(`/my-spots`);
  };


  return (
    <div className="createSpot-outer-container">
      <form onSubmit={handleSubmit}>
        <div id='createSpotTitle'>Spot Edit</div>
        <div id='fieldContainer'>
          <div id='welcomeDiv'>Update your spot</div>
          <ul>
            {errors && errors.map((error, idx) => <li key={idx} className="errors-li">{error}</li>)}
          </ul>

          <div className="inputContainer" id="top-label">
            <label className="create-spot-label">Address
              <input
                type="text"
                required
                value={address}
                onChange={e => setAddress(e.target.value)}
                className="updateSpot-inputField"
                />
            </label>
          </div>

          <div className="inputContainer" id="middle-label">
            <label className="create-spot-label">City
              <input
                type="text"
                required
                value={city}
                onChange={e => setCity(e.target.value)}
                className="createSpot-inputField"
              />
            </label>
          </div>

          <div className="inputContainer" id="middle-label">
          <label className="create-spot-label">State
            <input
              type="text"
              required
              value={state}
              onChange={e => setState(e.target.value)}
              className="createSpot-inputField"
              />
          </label>
          </div>

          <div className="inputContainer" id="middle-label">
          <label className="create-spot-label">Country
            <input
              type="text"
              required
              value={country}
              onChange={e => setCountry(e.target.value)}
              className="createSpot-inputField"
              />
          </label>
          </div>

          <div className="inputContainer" id="middle-label">
          <label className="create-spot-label">lat
            <input
              type="number"
              min="-90"
              max="90"
              value={lat}
              onChange={e => setLat(e.target.value)}
              className="createSpot-inputField"
              />
          </label>
          </div>

          <div className="inputContainer" id="middle-label">
          <label className="create-spot-label">lng
            <input
              type="number"
              min='-180'
              max='180'
              value={lng}
              onChange={e => setLng(e.target.value)}
              className="createSpot-inputField"
              />
          </label>
          </div>

          <div className="inputContainer" id="middle-label">
          <label className="create-spot-label">Spot name
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="createSpot-inputField"
              />
          </label>
          </div>

          <div className="inputContainer" id="middle-label">
          <label className="create-spot-label">Description
            <input
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="createSpot-inputField"
              />
          </label>
          </div>

          <div className="inputContainer" id="middle-label">
          <label className="create-spot-label">Price per night
            <input
              type="number"
              value={price}
              onChange={e => setPrice(e.target.value)}
              className="createSpot-inputField"
              />
          </label>
          </div>

          {/* <div className="inputContainer" id="middle-label">
          <label className="create-spot-label">Img url
            <input
              type="text"
              required
              value={url}
              onChange={e => setUrl(e.target.value)}
              className="createSpot-inputField"
              />
          </label>
          </div> */}

          <div>
            <button type="submit" className="styledButton">Update spot</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default UpdateSpotForm;
