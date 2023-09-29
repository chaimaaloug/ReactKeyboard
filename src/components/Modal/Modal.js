import React from 'react';
import style from './Modal.module.scssss';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent.js';

export default function PortalExample() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <button onClick={() => setShowModal(true)}>
            test modal
        </button>
        {showModal && createPortal(
            <ModalContent onClose={() => setShowModal(false)} />,
            document.body
        )}
        </>
    );
}