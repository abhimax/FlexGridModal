import React, { useEffect, useRef, useState } from "react";
import {
  lineItems5,
  lineItems20,
  lineItems60,
  lineItems100,
} from "./data/lineItems";

const ModalOverlay = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);
  const [modalSize, setModalSize] = useState("col-2");
  useEffect(() => {
    const ticketModal = modalRef.current;
    if (ticketModal?.scrollWidth > ticketModal?.clientWidth) {
      console.log("Overflow detected");
      if (modalSize === "col-2") {
        setModalSize("col-4");
      } else if (modalSize === "col-4") {
        setModalSize("col-6");
      }
    } else {
      console.log("No overflow");
    }
  }, [isModalOpen, modalSize]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalSize("col-2");
  };

  return (
    <>
      {/* Modal Trigger Button */}
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className={`modal ${modalSize}`}
            ref={modalRef}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h1>Modal Name</h1>
              <button className="header-btn">05</button>
              <button className="header-btn">20</button>
              <button className="header-btn">60</button>
              <button className="header-btn">100</button>
            </div>
            <div className="modal-content-container">
              {lineItems100.map((item, index) => (
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
