import style from "./ModalContent.module.scss";
import { BsFillCheckCircleFill } from 'react-icons/bs';

export default function ModalContent({ onClose }) {
    return (
      <div className={style.modal}>
        <div className={style.modalContainer}>
          <BsFillCheckCircleFill style={{ color: '#eb651c', fontSize: '40px' }}/>
          <p>VOUS BÉNÉFICIER DE -20% SUR VOTRE COMMANDE</p>
          <button onClick={onClose} className={style.closeButton}>FERMER</button>
        </div>
      </div>
    );
  }