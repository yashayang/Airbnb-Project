// import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteOneSpot } from '../../store/spots';
import './DeleteSpot.css';


const DeleteSpotForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { spotId } = useParams();
  const spot = useSelector(state => state.spots.singleSpot);
  // const currUserId = useSelector(state => state.session.user.id);

  if (!spot) return null;

  const deleteSpotClickEvent = async () => {
    await dispatch(deleteOneSpot(+spotId))
    history.push("/");
  }

  return (
  <div id="delete-spot-container">
    <button onClick={deleteSpotClickEvent}>DELETE!!!</button>
    {/* <label>DELETE THE SPOT...</label>
    <i className="fa-solid fa-trash-xmark"></i> */}
  </div>
  )
}

export default DeleteSpotForm;
