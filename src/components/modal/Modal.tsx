import ReactDOM from "react-dom";
import { ModalOverlay } from "../modal-overlay/ModalOverlay";
import styles from "./Modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC, PropsWithChildren, useEffect } from "react";

const modalRoot = document.querySelector("#root-modal");

type TModalProps = PropsWithChildren<{
  title?: string;
  closePopup: () => void;
  modalForOrder?: boolean;
}>;

export const Modal: FC<TModalProps> = ({
  children,
  title,
  closePopup,
  modalForOrder,
}) => {
 
  useEffect(() => {
    const handleEscClose = (evt: KeyboardEvent) => {
      evt.key === "Escape" && closePopup();
    };
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [closePopup]);

  return ReactDOM.createPortal(
    <>
      <div className={modalForOrder ? styles.modal : styles.modal_center}>
        <div className={styles.head} onClick={(evt) => evt.stopPropagation()}>
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
    modalRoot as Element
  );
};
