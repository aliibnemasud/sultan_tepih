import React, { useState } from "react";
import { FaEye, FaInfoCircle, FaSearchPlus } from "react-icons/fa";
import ReactImageMagnify from "react-image-magnify";
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
    <div className="product-card col-lg-3 col-6 col-md-4 my-3">
      <div className="card-content rounded">
        <div className="card-image">
          
          {/* <img onClick={() => navigate(`/product-details/${product?.id}`)} src={product?.img[0]} className="img-fluid text-center" alt="" /> */}

          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: product?.img[0],
              },
              largeImage: {
                src: product?.img[0],
                width: 1200,
                height: 1800,
              },
            }}
          />

          <div className="card-bottom py-2 w-100 d-flex justify-content-around align-items-center">
            <button
              onClick={handleOpenModal}
              className="btn btn-lite text-danger"
            >
              <FaEye size={20} />
            </button>
            <button
              onClick={() => navigate(`/product-details/${product?.id}`)}
              className="btn btn-lite text-danger"
            >
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
        <div
          className="d-flex flex-wrap w-100 py-3 justify-content-between px-3"
          data-bs-target="#exampleModalToggle"
          data-bs-toggle="modal"
        >
          <h5 className="mobileViewText">
            <span className="fw-bold text-danger">Kolekcija:</span>{" "}
            {product?.collection}
          </h5>
          <h5 className="mobileViewText">
            <span className="fw-bold text-danger">Kod:</span> {product?.code}
          </h5>
        </div>
      </div>

      {/* product details modal */}

      <div
        class="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalToggleLabel">
                Product Details
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
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

      {/* product details modal */}

      <div onClick={handleOpenModal} className={`my-modal ${openModal}`}>
        <span onClick={handleOpenModal} class="close-btn">
          &times;
        </span>
        <img width="20%" src={product?.img[0]} className="myModal-content" />
        <div id="caption"></div>
      </div>
    </div>
  );
};

export default NewProductCard;
