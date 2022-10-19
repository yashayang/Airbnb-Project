import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useSelector } from 'react-redux';
import CreateSpotForm from './CreateSpotForm';

function CreateSpotFormModal() {
  const sessionUser = useSelector(state => state.session.user);
  const [showModal, setShowModal] = useState(false);

  // function onCreation() {
  //   setShowModal(false);
  //   if (afterSubmission) {
  //     afterSubmission();
  //   }
  // }

  return (
    <>
      {sessionUser &&
        <>
        <span onClick={() => setShowModal(true)} className="create-spot">Become a Host</span>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <CreateSpotForm setModal={setShowModal}/>
            {/* onCreation={onCreation} */}
          </Modal>
          )}
        </>
      }
    </>
  );
}

export default CreateSpotFormModal;
