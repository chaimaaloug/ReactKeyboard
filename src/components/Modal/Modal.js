import React from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent.js';

export default function PortalExample() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {showModal && createPortal(
                <ModalContent onClose={() => setShowModal(false)} />,
                document.body
            )}
        </>
    );
}