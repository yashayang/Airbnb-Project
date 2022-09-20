const LOAD_ALLSPOT = "spots/setLoadAllSpot";
const LOAD_ONESPOT = "spots/setLoadOneSpot";

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

export const getAllSpots = (spots) => async (dispatch) => {
  const response = await fetch(`/api/spots`);
  console.log("store/spots - getAllSpots thunk:", response)
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
        // ...state,
        ...state
      };
    default:
      return state;
  }
};

export default spotsReducer;
