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

}

export const getOneSpot = (spot) => async (dispatch) => {

}

const initialState = {};

const spotsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_ALLSPOT:
      return newState;
    default:
      return state;
  }
};

export default spotsReducer;
