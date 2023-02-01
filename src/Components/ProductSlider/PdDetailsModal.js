import React from "react";

const PdDetailsModal = ({product}) => {
  return (
    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalToggleLabel">
              Product Details
            </h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-center">
            <img width="80%" src={product?.img[0]} alt="" />
            <div className="text-left">
              <h3 className="fw-bold my-2">Boje</h3>
              {product.colors.map((color) => {
                return <p key={color}>&ensp;-{color}</p>;
              })}
            </div>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default PdDetailsModal;
