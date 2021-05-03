import Modal from 'react-modal';

import EventForm from './EventForm';

const customStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)'
};

Modal.setAppElement('#root');

const EventModal = (props) => {
const { isOpen, closeModal, eventDetails, colors} = props

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      contentLabel="Event Modal"
    >
      <p className="close" onClick={closeModal}>
        X
      </p>
      <EventForm
        key="main"
        eventDetails = {eventDetails}
        colors = {colors}
      />

    </Modal>
  );
};

export default EventModal;
