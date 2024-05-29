// Modal.js
import React from 'react';
import '../Styles/Modal.css'; // Assuming you will style the Modal in a separate CSS file

const Modal = ({ onClose }) => {
  return (
    <div className="Modal-overlay">
      <div className="Modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <p>Enter the Amount</p>
        <form style={{display:'flex',flexDirection:'column'}}>
                <input type="text" name="amount" placeholder="Amount"/>
                <div style={{backgroundColor:'black',color:'white'}}>Add Funds</div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
