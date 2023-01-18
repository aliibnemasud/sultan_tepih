import React, { useState } from "react";
import { FaAlgolia, FaEye } from "react-icons/fa";
import "./ProductCard.css";

const NewProductCard = ({ product }) => {
  const [openModal, setOpenModal] = useState('');


  //console.log(product);

  

  const handleOpenModla = () => { 
    
    if(openModal === 'd-block'){
      setOpenModal('')
    } else {
      setOpenModal('d-block')
    }    
  }


  return (
    <div className="product-card col-lg-3 my-3">
      <div className="card-content rounded">
        <div className="card-image">
          <img onClick={handleOpenModla} src={product.img[0]} className="img-fluid text-center" alt="" />
          <div className="card-bottom bg-primary py-2 w-100 d-flex justify-content-around">
            <button className="btn btn-lite text-white">
              <FaEye/>
            </button>
            <button className="btn btn-lite text-white">
              <FaAlgolia />
            </button>
            <button className="btn btn-lite text-white">
              <FaAlgolia />
            </button>
          </div>
        </div>
        <div className="d-flex w-100 py-3 justify-content-between px-3">
          <h5>Kolekcija: OPERA</h5>
          <h5>Kod: OW1818</h5>
        </div>
      </div>

      <div className={`my-modal ${openModal}`}>
        <span onClick={handleOpenModla} class="close-btn">&times;</span>
        <img width="20%" src={product.img[0]} className="myModal-content" />
        <div id="caption"></div>
      </div>

    </div>
  );
};

export default NewProductCard;
