import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useSelector } from 'react-redux';
import UpdateSpotForm from './UpdateSpotForm';

function UpdateSpotFormModal({spotId}) {
  const sessionUser = useSelector(state => state.session.user);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {sessionUser &&
        <>
        <button onClick={() => setShowModal(true)} className="user-button">Edit</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <UpdateSpotForm setModal={setShowModal} spotId={spotId}/>
          </Modal>
          )}
        </>
      }
    </>
  );
}

export default UpdateSpotFormModal;
