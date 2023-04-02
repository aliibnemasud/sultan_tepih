import React, { useState } from "react";
import { FaEye, FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const NewProductCard = ({ product }) => {
  const [openModal, setOpenModal] = useState("");
  const navigate = useNavigate();
  const handleOpenModal = () => {
    if (openModal === "d-block") {
      setOpenModal("");
    } else {
      setOpenModal("d-block");
    }
  };

  return (
    <div className="product-card col-lg-3 col-12 col-md-4 my-3">
      <div className="card-content rounded">
        <div className="card-image">
          <img onClick={() => navigate(`/product-details/${product?.id}`)} style={{objectFit: 'cover'}} height="500px" src={product?.img[0]} className=" w-100 text-center" alt="" />

          <div className="card-bottom py-2 w-100 d-flex justify-content-around align-items-center">
            <button onClick={handleOpenModal} className="btn btn-lite text-danger">
              <FaEye size={20} />
            </button>
            <button onClick={() => navigate(`/product-details/${product?.id}`)} className="btn btn-lite text-danger">
              <FaInfoCircle size={20} />
            </button>
            <span className="d-flex flex-row flex-wrap fs-5 align-items-end">
              Boje:{" "}
              {product?.colors?.map((color, index) => {
                return (
                  <span
                    key={index}
                    className="rounded-circle ms-1 mb-2"
                    style={{
                      color: color,
                      background: color,
                      width: "15px",
                      height: "15px",
                    }}
                  ></span>
                );
              })}
            </span>
          </div>
        </div>
        <div className="d-flex flex-wrap w-100 py-3 justify-content-between px-3" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
          <h5 className="mobileViewText">
            <span className="fw-bold text-danger">Collections:</span> {product?.collection}
          </h5>
          <h5 className="mobileViewText">
            <span className="fw-bold text-danger">Kod:</span> {product?.code}
          </h5>
        </div>
      </div>

      {/* product details modal */}

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
              <img width="80%" src={product?.img} alt="" />
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

      {/* product details modal end */}

      {/* light box modal start */}

      <div onClick={handleOpenModal} className={`my-modal ${openModal}`}>
        <span onClick={handleOpenModal} className="close-btn">
          &times;
        </span>
        <img width="20%" src={product?.img} className="myModal-content" />
        <div id="caption"></div>
      </div>
      {/* light box modal start */}
    </div>
  );
};

export default NewProductCard;
