import React, { useState } from 'react';
import style from './Keyboard.module.scss';
import { createPortal } from 'react-dom';
import ModalContent from '../ModalContent/ModalContent';

const Keyboard = () => {
  const [inputFieldValue, setInputValue] = useState('');
  const [showModal, setShowModal] = useState(false);

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

  const handleClear = () => {
    setInputValue('');
  };

  const validateText = () => {
    const validatedCodes = ["WELCOME", "IMHUNGRY23", "JAIDESCONTACTS"];
    if(validatedCodes.includes(inputFieldValue)) {
      setShowModal(true)
    }
    else {
      alert("Code incorrecte")
    }
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
        <button onClick={deleteText} className={style.button}>Supprimer</button>
        <button onClick={handleClear} className={style.button}>Vider</button>
        <button onClick={validateText} className={style.button}>Valider</button>
        {showModal && createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
      )}
      </div>
    </div>
  );
};

export default Keyboard;
