import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useSelector } from 'react-redux';
import CreateReviewForm from './CreateReviewForm';

function CreateReviewFormModal() {
  const sessionUser = useSelector(state => state.session.user);
  const [showModal, setShowModal] = useState(false);


  return (
    <>
      {sessionUser &&
        <>
        <button onClick={() => setShowModal(true)} className="user-button">Add Review</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <CreateReviewForm setModal={setShowModal}/>
          </Modal>
          )}
        </>
      }
    </>
  );
}

export default CreateReviewFormModal;
