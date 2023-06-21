import React from "react";
import "./Modal.css";

const Modal = ({ title, onClose, email }) => {
  return (
    <div className="modal">
      <div className="modal-content model-content__tray">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2 className="text-bold">{title}</h2>
        <p>
          Thank you, the email address {email} has been added to our newsletter
          mailing list. You will be redirected shortly.
        </p>
      </div>
    </div>
  );
};

export default Modal;
