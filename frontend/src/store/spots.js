const LOAD_ALLSPOT = "spots/setLoadAllSpot";
// const LOAD_ONESPOT = "spots/setLoadOneSpot";

const allSpots = (spots) => {
  return {
    type: LOAD_ALLSPOT,
    payload: spots
  }
}

// const oneSpot = (spot) => {
//   return {
//     type: LOAD_ONESPOT,
//     payload: spot
//   }
// }

export const getAllSpots = (spots) => async (dispatch) => {
  const response = await fetch(`api/spots`);
  // console.log("store/spots - getAllSpots thunk:", response)
  if (response.ok) {
    const spots = await response.json();
    // console.log("store/spots - getAllSpots thunk/spots var:", spots)
    dispatch(allSpots(spots))
  }
  return null;
}

// export const getOneSpot = (spot) => async (dispatch) => {

// }

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
        ...allSpots,
        ...state,
      };
    default:
      return state;
  }
};

export default spotsReducer;
