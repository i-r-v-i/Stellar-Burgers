import styles from "./ModalOverlay.module.css";
import { FC } from 'react';

interface IModalOverleyProps {
  closeModal: () => void;
}

const ModalOverlay: FC<IModalOverleyProps> = ({ closeModal }) => {
  return <div className={styles.overlay} onClick={closeModal}></div>;
}

export default ModalOverlay;