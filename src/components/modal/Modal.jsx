import { useEffect } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { ModalOverlay } from "../modal-overlay/ModalOverlay";
import styles from "./Modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.querySelector("#root-modal");

export function Modal({ children, title, closePopup, modalForOrder }) {
  
  useEffect(() => {
    const handleEscClose = (evt) => {
      evt.key === "Escape" && closePopup(evt);
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [closePopup]);

  return ReactDOM.createPortal(
    <>
      <div className={modalForOrder ? styles.modal : styles.modal_center}>
        <div className={styles.head}>
          <h1
            className={
              modalForOrder
                ? `${styles.title} text text_type_digits-default`
                : `${styles.title} text text_type_main-large`
            }
          >
            {title}
          </h1>
          <button className={styles.closeButton} onClick={closePopup}>
            <CloseIcon type="primary" />
          </button>
        </div>
        {children}
      </div>
      <ModalOverlay closeModal={closePopup} />
    </>,
    modalRoot
  );
}

Modal.prototype = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  closePopup: PropTypes.func.isRequired,
  modalForOrder: PropTypes.bool,
};
