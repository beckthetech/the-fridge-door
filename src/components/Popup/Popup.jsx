import React from "react";
import Popup from "reactjs-popup";
import PostDetailPopUp from '../../pages/PostDetailPopUp/PostDetailPopUp'

const Modal = ({ props }) => (
  <Popup
    trigger={<button className="button"> Open Modal </button>}
    modal
  >
    {close => (
      <>
        <PostDetailPopUp props={props} />
        <button
          className="button"
          onClick={() => {
            close();
          }}
        >
          Close
          </button>
      </>
    )}
  </Popup>
);

export default Modal;