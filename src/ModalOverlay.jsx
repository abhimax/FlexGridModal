import React, { useEffect, useRef, useState } from "react";
import { lineItems5, lineItems20, lineItems60 } from "./data/lineItems";

const ModalOverlay = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);
  useEffect(() => {
    const ticketModal = modalRef.current;
    if (ticketModal?.scrollWidth > ticketModal?.clientWidth) {
      console.log("Overflow detected");
    } else {
      console.log("No overflow");
    }
  }, [isModalOpen]);

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
          <div
            className="modal col-2"
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content-container">
              {lineItems60.map((item, index) => (
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
