import React, { useState } from 'react';
import style from './Keyboard.module.scss';
import { createPortal } from 'react-dom';
import ModalContent from '../ModalContent/ModalContent';
import Button from '../Button/Button'

const Keyboard = () => {
  const [inputFieldValue, setInputValue] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  const keyPress = (key) => {
    setInputValue((prevValue) => prevValue + key);
  };

  const displayKeyboard = (keys) => (
    <div>
      {keys.map((key) => (
        <button key={key} onClick={() => keyPress(key)} className={style.keyPress}>
          {key}
        </button>
      ))}
    </div>
  );

  const deleteText = () => {
    setInputValue((prevValue) => prevValue.slice(0, -1));
  };

  const clearText = () => {
    setInputValue('');
  };

  const validateText = () => {
    const validatedCodes = {
      WELCOME: "Vous bénéficiez de -20% sur votre commande",
      IMHUNGRY23: "Une petite frite vous est offerte",
      JAIDESCONTACTS: "La commande est gratuite (pensez au pourboire)"
    };
    const message = validatedCodes[inputFieldValue] || "Code incorrect";
    setShowModal(true);
    setMessage(message);
  };
  

  return (
    <div className={style.keyboardContainer}>
      <input type="text" value={inputFieldValue} className={style.inputField}/>
      <div className={style.keysContainer}>
        {displayKeyboard(['0','1', '2', '3', '4', '5', '6', '7', '8', '9'])}
        {displayKeyboard(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'])}
        {displayKeyboard(['K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'])}
        {displayKeyboard(['U', 'V', 'W', 'X', 'Y', 'Z'])}
      </div>
      <div className={style.buttonsContainer}>
        <Button onClick={deleteText} label="Supprimer" className={style.button} />
        <Button onClick={clearText} label="Vider" className={style.button} />
        <Button onClick={validateText} label="Valider" className={style.button} />
        {showModal && createPortal(
          <ModalContent message={message} onClose={() => setShowModal(false)} />,
          document.body
        )}
      </div>
    </div>
  );
};

export default Keyboard;
