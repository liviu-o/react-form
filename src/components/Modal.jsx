import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const Modal = ({ title, email, onClose }) => {
  return (
    <div className="modal">
      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="2xl">
          <h2>{title}</h2>
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          <p>
            Thank you, the email address {email} has been added to our
            newsletter mailing list. You will be redirected shortly.
          </p>
        </AlertDescription>
      </Alert>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default Modal;
