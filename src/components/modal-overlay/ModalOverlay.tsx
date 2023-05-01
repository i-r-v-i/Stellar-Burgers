import styles from "./ModalOverlay.module.css";
import { FC } from 'react';

type TModalOverleyProps = {
  closeModal: () => void;
}

export const ModalOverlay: FC<TModalOverleyProps> = ({ closeModal }) => {
  return <div className={styles.overlay} onClick={closeModal}></div>;
}

