import React from "react";
import ReactModal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    border: "none",
    width: "auto",
    height: "auto"
  }
};

ReactModal.setAppElement("#root");
const Modal = ({ isOpen, afterOpenModal, closeModal, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      style={customStyles}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
