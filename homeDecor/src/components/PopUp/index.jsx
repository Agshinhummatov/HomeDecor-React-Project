import "../PopUp/popUp.css";
import ButtonPrimary from "../ButtonPrimary";
import Overlay from "../Overlay";
import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";

function PopUp({ message, description }) {
  const [showPopUp, setShowPopUp] = useState(true);

  const closePopUp = () => setShowPopUp(false);

  return (
    <>
      {showPopUp && <Overlay />}
      <section className="popup">
        <Toast show={showPopUp}>
          <Toast.Header>
            <div className="close__btn" onClick={closePopUp}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M20.8878 19.7377C20.9633 19.8132 21.0232 19.9028 21.064 20.0014C21.1049 20.1001 21.1259 20.2058 21.1259 20.3125C21.1259 20.4193 21.1049 20.525 21.064 20.6236C21.0232 20.7223 20.9633 20.8119 20.8878 20.8874C20.8123 20.9629 20.7227 21.0227 20.6241 21.0636C20.5254 21.1045 20.4197 21.1255 20.313 21.1255C20.2062 21.1255 20.1005 21.1045 20.0019 21.0636C19.9032 21.0227 19.8136 20.9629 19.7381 20.8874L13.0005 14.1487L6.2628 20.8874C6.11034 21.0398 5.90356 21.1255 5.68795 21.1255C5.47234 21.1255 5.26557 21.0398 5.11311 20.8874C4.96065 20.7349 4.875 20.5281 4.875 20.3125C4.875 20.0969 4.96065 19.8901 5.11311 19.7377L11.8518 13L5.11311 6.26237C4.96065 6.10991 4.875 5.90313 4.875 5.68752C4.875 5.47192 4.96065 5.26514 5.11311 5.11268C5.26557 4.96022 5.47234 4.87457 5.68795 4.87457C5.90356 4.87457 6.11034 4.96022 6.2628 5.11268L13.0005 11.8514L19.7381 5.11268C19.8906 4.96022 20.0973 4.87457 20.313 4.87457C20.5286 4.87457 20.7353 4.96022 20.8878 5.11268C21.0403 5.26514 21.1259 5.47192 21.1259 5.68752C21.1259 5.90313 21.0403 6.10991 20.8878 6.26237L14.1491 13L20.8878 19.7377Z"
                  fill="#2D2D2B"
                />
              </svg>
            </div>
            <h2 className="popup__title"> {message}</h2>
          </Toast.Header>
          <Toast.Body>
            <p className="popup__msg">{description}</p>
          </Toast.Body>
          <div onClick={() => setShowPopUp(false)}>
            <ButtonPrimary href="/">Home Page</ButtonPrimary>
          </div>
        </Toast>
      </section>
    </>
  );
}

export default PopUp;
