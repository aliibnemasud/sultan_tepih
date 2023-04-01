import React from "react";
import Select from "react-select";
import { categoryOption, collectionOption, colourOptions as colorOptions, priceOption, sizeOption } from "./addProductData";

const PostProducts = () => {
  return (
    <div className="container my-5">
      <h1 className="fw-bold text-center text-primary my-4">Add Products</h1>

      <div className="d-flex gap-4 my-3">
        <div className="w-100">
          <label for="exampleFormControlInput1" className="form-label">
            Product title
          </label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="product title" />
        </div>
        <div className="w-100">
          <label className="form-label">Product Code</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="1471A" />
        </div>
      </div>

      <div className="d-flex gap-4 my-3">
        <div className="w-100">
          <label htmlFor="" className="form-label">
            Product Color
          </label>
          <Select isMulti name="colors" options={colorOptions} className="basic-multi-select" classNamePrefix="select" />
        </div>
        <div className="w-100">
          <label htmlFor="" className="form-label">
            Price
          </label>
          <Select defaultValue={[priceOption[0]]} isMulti name="colors" options={priceOption} className="basic-multi-select" classNamePrefix="select" />
        </div>
      </div>
      <div className="d-flex gap-4 my-3">
        <div className="w-100">
          <label htmlFor="" className="form-label">
            Category
          </label>
          <Select defaultValue={[categoryOption[0]]} isMulti name="colors" options={categoryOption} className="basic-multi-select" classNamePrefix="select" />
        </div>
        <div className="w-100">
          <label htmlFor="" className="form-label">
            Collection
          </label>
          <Select defaultValue={[colorOptions[2], colorOptions[3]]} isMulti name="colors" options={collectionOption} className="basic-multi-select" classNamePrefix="select" />
        </div>
      </div>

      <div className="d-flex gap-4 my-3">
        <div className="w-100">
          <label htmlFor="" className="form-label">
            Size
          </label>
          <Select defaultValue={[sizeOption[0]]} isMulti name="colors" options={sizeOption} className="basic-multi-select" classNamePrefix="select" />
        </div>
        <div className="w-100">
          <label htmlFor="" className="form-label">
            Color Options
          </label>
          <Select defaultValue={[colorOptions[2], colorOptions[3]]} isMulti name="colors" options={colorOptions} className="basic-multi-select" classNamePrefix="select" />
        </div>
      </div>

      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Description
        </label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>

      <div>
        <label className="form-label">Add product images</label>
        <input className="form-control form-control-lg" id="formFileSm" type="file" />
      </div>

      <button className="btn btn-primary btn-lg my-5 w-50 mx-auto d-block">Add Products</button>
    </div>
  );
};

export default PostProducts;
