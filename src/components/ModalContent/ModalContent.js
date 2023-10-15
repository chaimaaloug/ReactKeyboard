import Button from "../Button/Button";
import style from "./ModalContent.module.scss";
import { BsFillCheckCircleFill } from "react-icons/bs";

export default function ModalContent({ message, onClose }) {
  return (
    <div className={style.modal}>
      <div className={style.modalContainer}>
        {message ? 
          ( 
            <>
              <BsFillCheckCircleFill style={{ color: '#eb651c', fontSize: '40px' }} />
              <p style={{fontSize: '20px', fontWeight: 'bold' }}>{message}</p>
            </>
          ) 
          :
          (
            <>
              <BsFillCheckCircleFill style={{ color: '#eb651c', fontSize: '40px' }} />
              <p style={{fontSize: '20px', fontWeight: 'bold' }}>Code incorrect</p>
            </>
          )
        }
        <Button onClick={onClose} label="FERMER" className={style.closeButton} />
      </div>
    </div>
  );
}
