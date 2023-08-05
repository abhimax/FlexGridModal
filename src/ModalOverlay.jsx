import React, { useState } from "react";
import { lineItems5, lineItems20, lineItems60 } from "./data/lineItems";

const ModalOverlay = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {/* Modal Trigger Button */}
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal col-2" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content-container">
              {lineItems5.map((item, index) => (
                <div className="modal-content" key={index}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalOverlay;
