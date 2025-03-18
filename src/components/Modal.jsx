import React from "react";

const Modal = ({  children, onClose, onSave }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h5 className="modal-title">Edit User Details</h5>
         
        </div>

        <div className="modal-body">
          {children}
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary mx-2" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary mx-2" onClick={onSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
