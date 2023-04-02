import React from "react";

const PdDetailsModal = ({product}) => {
  return (
    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
              Product Details
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center">
            <img width="80%" src={product?.img[0]} alt="" />
            <div className="text-left">
              <h3 className="fw-bold my-2">Boje</h3>
              {product.colors.map((color) => {
                return <p key={color}>&ensp;-{color}</p>;
              })}
            </div>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default PdDetailsModal;
