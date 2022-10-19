import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createOneSpot } from '../../store/spots';
import "./CreateSpotForm.css";

const CreateSpotForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

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
  const [url, setUrl] = useState('');
  const [preview, setPreview] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { address, city, state, country, lat, lng, name, description, price, url };
    const imgData = { url, preview };

    dispatch(createOneSpot(data, imgData))
    .then(newSpot => history.push(`/spots/${newSpot.id}`))
    .catch(async (res) => {
      console.log("createOneSpot dispatch from create spot component:", res)
      if(res === undefined) return null;
      const message = await res.json();
      console.log("From CreateSpot - res.message:", message)
      if (message && message.errors) setErrors(message.errors);
      console.log("From CreateSpot - setErrors:", errors)
     });
  }

  const handleCancelClick = (e) => {
    e.preventDefault();
    history.push(`/`);
  }

  return (
    <div className="form-outer-container">
      <ul>
        {errors && errors.map((error, idx) => <li key={idx} className="errors-li">{error}</li>)}
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
        <label>Image url:</label>
        <input
          type="text"
          placeholder="http://..."
          required
          value={url}
          onChange={e => setUrl(e.target.value)} />
        <label>Set as Preview Image:</label>
        <select onChange={e => setPreview(e.target.value)} value={preview}>
            <option key='true'>true</option>
            <option key='false'>false</option>
        </select>

        <button type="submit">Create new Spot</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </form>
    </div>
  );
}


export default CreateSpotForm;
