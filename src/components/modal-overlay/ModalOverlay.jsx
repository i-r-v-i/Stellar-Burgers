import styles from "./ModalOverlay.module.css";

export function ModalOverlay({closeModal}) {
  return (
    <div className={styles.overlay} onClick={closeModal}></div>
  );
}
