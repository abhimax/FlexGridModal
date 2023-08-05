import React, { useState } from "react";
//import "./ModalOverlay.css"; // Import your CSS file for styling

const ModalOverlay = () => {
  // Sample line items (you can replace this with your data)
  const lineItems = [
    "Short item",
    "This is a longer item that will span multiple lines",
    "Another short item",
    "An item with a little more content",
    "An item with a little more content An item with a little more content",
    "An item with a little more content An item with a little more content An item with a little more content An item with a little more content",
    "An item with a little more content An item with a little more content An item with a little more content",
    "An item with a little more content An item with a little more content",
    "An item with a little more content",
    // Add more line items as needed
  ];

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

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {/* Line items will be dynamically added here */}
            <div className="modal-content-container">
              {lineItems.map((item, index) => (
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
