import React from "react";
import ReactModal from "react-modal";
import "./modal.css";

ReactModal.setAppElement("#root");
const Modal = ({ isOpen, afterOpenModal, closeModal, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={"modal"}
      overlayClassName={"overlay"}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
