// import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteOneSpot } from '../../store/spots';


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
  <>
    <button onClick={deleteSpotClickEvent}>Delete spot</button>
  </>
  )
}

export default DeleteSpotForm;
