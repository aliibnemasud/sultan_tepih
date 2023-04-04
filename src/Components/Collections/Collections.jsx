import React from "react";

export const Collections = () => {
  return (
    <div className="d-flex flex-row flex-wrap justify-content-center col-11 p-0 m-auto">
      <div className="m-2 flex-column col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
        <div className="col-12 collection-bg-home d-flex p-0 mb-3" id="collection-1">
          <span>OPERA</span>
        </div>
        <div className="col-12 collection-bg-home d-flex p-0 " id="collection-2">
          ŠPAGASTI
        </div>
      </div>
      <div className="m-0 flex-column col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 m-lg-2 m-xl-2">
        <div className="col-12 d-flex mb-3 ps-2">
          <div className="col-6 collection-bg-home d-flex p-0" id="collection-3">
            <span>DIZAYN</span>
          </div>
          <div className="col-6 collection-bg-home d-flex ms-2" id="collection-3-1">
            <span>PLAZA</span>
          </div>
        </div>
        <div className="col-12 collection-bg-home d-flex flex-column mt-0 px-4 text-white fw-bold justify-content-start ms-2" id="collection-4">
          <h4 className="my-5">MODERN COLLECTION</h4>
          <p className="fs-5 text-secondary mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt accusamus, vel eum quas excepturi quos voluptatum culpa officiis numquam impedit.</p>
          <a href="#" className="btn btn-danger">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};
