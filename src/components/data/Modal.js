import React from "react";

const Modal = ({ isOpen, toggleModal }) => {
  return (
    <>
      {isOpen && (
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggleModal}
                  aria-label="Close"></button>
              </div>
              <div class="modal-body">...</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
