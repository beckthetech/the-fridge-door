import React from "react";
import Popup from "reactjs-popup";
import PostDetailPopUp from '../../pages/PostDetailPopUp/PostDetailPopUp'

const Modal = ({ props }) => (
  <Popup
    trigger={<button className="button"> Open Modal </button>}
    modal
    closeOnDocumentClick
  >
    <span> <PostDetailPopUp props={props} /> </span>
  </Popup>
);

export default Modal;