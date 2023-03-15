import React from "react";

const ImageModal = ({changeState,openModal, img}) => {
    let active = openModal;

  return (
    <div className={`my-modal ${active}`}>
      <span onClick={changeState} className="close-btn">
        &times;
      </span>
      <img width="20%" src={img} className="myModal-content" />
      <div id="caption"></div>
    </div>
  );
};

export default ImageModal;
