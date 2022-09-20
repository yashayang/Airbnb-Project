import { csrfFetch } from './csrf';
const LOAD_ALLSPOT = "spots/setLoadAllSpot";
const LOAD_ONESPOT = "spots/setLoadOneSpot";
const ADD_ONESPOT = "spots/setADDONESPOT";


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
    dispatch(addSpot(newSpot));
    return newSpot;
  } catch(error) {
    throw error;
  }
}

const initialState = {};

const spotsReducer = (state = initialState, action) => {
  // let newState;
  switch (action.type) {
    case LOAD_ALLSPOT:
      const allSpots = {};
      action.payload.Spots.forEach(spot => {
        allSpots[spot.id] = spot;
      })
      // console.log("allSpots from spotsReducer:", allSpots)
      return {
        ...state,
        ...allSpots,
      };
    case LOAD_ONESPOT:
      // const theSpot = {...action.payload};
      state.singleSpot = action.payload
      // console.log("singleSpot from spotsReducer:", state)
      return {
        ...state
      };
      case ADD_ONESPOT:
        // console.log("spotreducer:", action.payload)
        return {
          ...state,
          allSpots: {
            ...state.allSpots,
            [action.payload.id]: action.payload }
        };
    default:
      return state;
  }
};

export default spotsReducer;
