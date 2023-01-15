import styles from "./ModalOverlay.module.css";
import PropTypes from "prop-types";

export function ModalOverlay({ closeModal }) {
  return <div className={styles.overlay} onClick={closeModal}></div>;
}

ModalOverlay.prototype = {
  closeModal: PropTypes.func.isRequired,
};
