import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createOneSpot } from '../../store/spots';
import { getAllSpots } from '../../store/spots';
import "./CreateSpot.css";

const CreateSpot = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const spots = useSelector(state => state.spots.allSpots);

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


  // const spotIdArr = Object.keys(spots);
  // // console.log("From CreateSpot - spotIdArr:", spotIdArr)
  // const spotIdArrSorted = spotIdArr.sort(function (a, b) {
  //   return b - a;
  // });
  // // console.log("From CreateSpot - spotIdArr:", spotIdArrSorted)
  // const newSpotId = spotIdArrSorted[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { address, city, state, country, lat, lng, name, description, price };

   dispatch(createOneSpot(data))
    .then(newSpot => history.push(`/spots/${newSpot.id}`))
    .catch(async (res) => {
      const message = await res.json();
      console.log("From CreateSpot - res.message:", message)
      if (message && message.errors) setErrors(message.errors);
     });

    //  return history.push(`/spots/${newSpotId}`);
  }

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push(`/`);
  }

  return (
    <section className="new-form-holder centered middled">
      <ul>
        {errors && errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <form className="create-pokemon-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Address"
          required
          value={address}
          onChange={e => setAddress(e.target.value)} />
        <input
          type="text"
          placeholder="City"
          max="100"
          required
          value={city}
          onChange={e => setCity(e.target.value)} />
        <input
          type="text"
          placeholder="state"
          min="0"
          max="100"
          required
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

        <button type="submit">Create new Spot</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>
    </section>
  );
}


export default CreateSpot;
