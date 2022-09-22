import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateOneSpot, getOneSpot } from '../../store/spots';
import { useHistory, useParams } from "react-router-dom";

import "./UpdateSpot.css";

const UpdateSpotForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {spotId} = useParams();

  const user = useSelector(state => state.session.user);
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
    }
}, [spot]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const spotInfo = { name, description, address, city, state, country, lat, lng, price }

    await dispatch(updateOneSpot(spotInfo, +spotId));
    history.push(`/spots/${+spotId}`);
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push(`/`);
  }

  return (
    <div className="new-form-holder centered middled">
      <div className="body-header">
        Update a spot
      </div>
      <ul>
        {errors && errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <form className="create-pokemon-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={e => setAddress(e.target.value)} />
        <input
          type="text"
          placeholder="City"
          max="100"
          value={city}
          onChange={e => setCity(e.target.value)} />
        <input
          type="text"
          placeholder="state"
          min="0"
          max="100"
          value={state}
          onChange={e => setState(e.target.value)} />
        <input
          type="text"
          placeholder="country"
          value={country}
          onChange={e => setCountry(e.target.value)} />
        <input
          type="number"
          placeholder="lat"
          value={lat}
          onChange={e => setLat(e.target.value)} />
        <input
          type="number"
          placeholder="lng"
          value={lng}
          onChange={e => setLng(e.target.value)} />
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={e => setName(e.target.value)} />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={e => setDescription(e.target.value)} />
        <input
          type="number"
          placeholder="price"
          value={price}
          onChange={e => setPrice(e.target.value)} />
        <button type="submit">Update Spot</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>
    </div>
  )
}

export default UpdateSpotForm;
