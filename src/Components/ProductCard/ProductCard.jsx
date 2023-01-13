import React from 'react'
import "./ProductCard.css"

export const ProductCard = ({id, price, title, desc, img, colors, category, collection, featured, discount, discountPrice, code}) => {
    
  return (
      <div className="col-12 col-md-4 col-lg-3 mb-3">
          <a href={`/product-details/${id}`} className="cards d-flex shadow">
              <img src={img[0]} className="img-fluid" alt="" />
              <div className="card-details d-flex flex-row flex-wrap align-content-center">
                  <a href={`/product-details/${id}`} className="px-3 m-0"><i className="fa fa-info-circle"></i></a>
                  <a href={img[0]} target="_blank" rel="noopener" className="px-3 ms-auto"><i className="fa fa-search-plus"></i></a>
                  <span className="d-flex flex-row flex-wrap fs-5 align-items-end">Boje: {colors?.map((color, index) =>{
                    return (<span key={index} className="rounded-circle ms-1 mb-2" style={{"color": color,"background": color, "width": "15px", "height": "15px"}}></span>);
                  })}</span>
              </div>
          </a>
          <div className="name-code d-flex justify-content-between card-info w-100">
              <a href={`/products/collection/${collection}`} className="fw-bold fs-6">Kolekcija:<p className="fw-light">{collection}</p></a>
              <span className="text-end fw-bold ms-auto justify-self-end ps-2 text-center" style={{"fontSize": "14px"}}>Kod: {code}</span>
          </div>
      </div>
  )
}
