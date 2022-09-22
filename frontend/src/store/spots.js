import { csrfFetch } from './csrf';
const LOAD_ALLSPOT = "spots/setLoadAllSpot";
const LOAD_ONESPOT = "spots/setLoadOneSpot";
const ADD_ONESPOT = "spots/setADDONESPOT";
const ADD_IMG = "spots/setADDIMG";
const UPDATE_SPOT = "spots/setUPDATESPOT";
const DELETE_SPOT = 'spots/setDELETESPOT';


const allSpots = (spots) => {
  return {
    type: LOAD_ALLSPOT,
    payload: spots
  }
}

const oneSpot = (spot) => {
  return {
    type: LOAD_ONESPOT,
    payload: spot
  }
}

const addSpot = (spot) => {
  return {
    type: ADD_ONESPOT,
    payload: spot
  }
}

const addImg = (imgData) => {
  return {
    type: ADD_IMG,
    payload: imgData
  }
}

const updateSpot = (spot) => {
  return {
    type: UPDATE_SPOT,
    payload: spot
  }
}

const deleteSpot = (spotId) => {
  return {
    type: DELETE_SPOT,
    payload: spotId
  }
}

export const getAllSpots = (spots) => async (dispatch) => {
  const response = await fetch(`/api/spots`);
  // console.log("store/spots - getAllSpots thunk:", response)
  if (response.ok) {
    const spots = await response.json();
    // console.log("store/spots - getAllSpots thunk/spots var:", spots)
    dispatch(allSpots(spots))
  }
  return null;
}

export const getOneSpot = (spotId) => async (dispatch) => {
  const response = await fetch(`/api/spots/${spotId}`);
  // console.log("getOneSpot thunk:", spotId)
  if (response.ok) {
    const spot = await response.json();
    // console.log("getOneSpot thunk:", spot)
    dispatch(oneSpot(spot));
    return spot;
  }
  return null;
}

export const createOneSpot = (data) => async (dispatch) => {
  // let { address, city, state, country, lat, lng, name, description, price } = data
  try {
    const response = await csrfFetch(`/api/spots`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      let error;
      if (response.status === 404) {
        error = await response.json();
        // throw new ValidationError(error.errors, response.statusText);
        return error;
      } else {
        let errorJSON;
        error = await response.text();
        try {
          errorJSON = JSON.parse(error);
        } catch {
          throw new Error(error);
        }
        throw new Error(`${errorJSON.title}: ${errorJSON.message}`)
      }
    }

    const newSpot = await response.json();
    // console.log("createOneSpot Thunk - res spot data:", newSpot)
    dispatch(addSpot(newSpot));
    return newSpot;
  } catch(error) {
    throw error;
  }
}

export const addImages = (imgData, spotId) => async (dispatch) => {
  const { url, preview } = imgData;
  // console.log("From store/spot/addImg Thunk - url/preview", imgData)
  const response = await csrfFetch(`/api/spots/${spotId}/images`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({url, preview})
  });

  if (response.ok) {
    const img = await response.json()
    // console.log("From store/spot/addImg Thunk - img res", img)
    dispatch(addImg(img))
    return img;
  }
  return null;
}

export const updateOneSpot = (spotInfo, spotId) => async (dispatch) => {
  // console.log("updateOneSpot Thunk-SpotId", spotId)
  const response = await csrfFetch(`/api/spots/${spotId}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(spotInfo)
  });

  if (response.ok) {
    const spot = await response.json();
    // console.log("updateOneSpot Thunk-resSpot", spot)
    dispatch(updateSpot(spot));
    return spot;
  }
  return null;
}

export const deleteOneSpot = (spotId) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${spotId}`, {
    method: "delete"
  });
  console.log("delevtOneSpot thunk - res:", spotId)
  if (response.ok) {
    dispatch(deleteSpot(spotId));
  }
}

const initialState = {
    allSpots: {},
    singleSpot: {}
  };

const spotsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_ALLSPOT:
      newState = { ...state, allSpots: {...state.allSpots}};
      action.payload.Spots.forEach(spot => {
        newState.allSpots[spot.id] = spot;
      })
      // console.log("allSpots from spotsReducer:", allSpots)
      return newState;

    case LOAD_ONESPOT:
      newState = { ...state, singleSpot: { ...state.singleSpot } };
      newState.singleSpot = action.payload
      // console.log("singleSpot from spotsReducer:", state)
      return newState;

    case ADD_ONESPOT:
        // console.log("spotreducer:", action.payload)
        return {
          singleSpot: null,
          allSpots: {
            ...state.allSpots,
            [action.payload.id]: action.payload }
        };
    case ADD_IMG:
      // console.log("From store/spot/addImg Thunk - SpotImages", action.payload)
      return {
        ...state,
        singleSpot: { ...state.singleSpot, SpotImages: [action.payload]}
      }
    case UPDATE_SPOT:
      newState = { ...state };
      // newState.singleSpot[action.payload.id] = { ...action.payload };
      newState.singleSpot = action.payload
      // console.log("spotReducer-UPDATE-SPOT", newState)
      return newState;

    case DELETE_SPOT:
      console.log("delevtOneSpot reducer - newState:", state)
      newState = { ...state, singleSpot: {...state.singleSpot} };
      delete newState.singleSpot;
      // delete newState.singleSpot[action.payload];
      return newState;

    default:
      return state;
  }
};

export default spotsReducer;
