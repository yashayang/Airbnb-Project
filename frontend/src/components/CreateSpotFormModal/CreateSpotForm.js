import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createOneSpot } from '../../store/spots';
import "./CreateSpotForm.css";

const CreateSpotForm = ({setModal}) => {
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
    .then(newSpot => setModal(false))
    .catch(async (res) => {
      // console.log("createOneSpot dispatch from create spot component:", res)
      if(res === undefined) return null;
      const message = await res.json();
      // console.log("From CreateSpot - res.message:", message)
      if (message && message.errors) setErrors(message.errors);
      // console.log("From CreateSpot - setErrors:", errors)
     });


  }


  // const handleCancelClick = (e) => {
  //   e.preventDefault();
  //   history.push(`/`);
  // }

  return (
    <div className="createSpot-outer-container">
      <form onSubmit={handleSubmit}>
        <div id='createSpotTitle'>Become a Host</div>
        <div id='fieldContainer'>
          <div id='welcomeDiv'>Create your spot</div>
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
                className="createSpot-inputField"
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
              type="decimel"
              min="-90"
              max="90"
              placeholder='37.788523'
              value={lat}
              onChange={e => setLat(e.target.value)}
              className="createSpot-inputField"
              />
          </label>
          </div>

          <div className="inputContainer" id="middle-label">
          <label className="create-spot-label">lng
            <input
              type="decimel"
              min='-180'
              max='180'
              placeholder='154.377514'
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

          <div className="inputContainer" id="middle-label">
          <label className="create-spot-label">Img url
            <input
              type="text"
              placeholder="http://..."
              required
              value={url}
              onChange={e => setUrl(e.target.value)}
              className="createSpot-inputField"
              />
          </label>
          </div>


          <div className="inputContainer" id="bottom-label">
          <label className="create-spot-label">Set as Preview Image
            <select onChange={e => setPreview(e.target.value)} value={preview} className="createSpot-inputField">
                <option key='true'>true</option>
                <option key='false'>false</option>
            </select>
          </label>
          </div>
          <div>
            <button type="submit" className="styledButton">Create new Spot</button>
          </div>
          {/* <button type="button" onClick={handleCancelClick}>Cancel</button> */}

        </div>
      </form>
    </div>
  );
}


export default CreateSpotForm;
