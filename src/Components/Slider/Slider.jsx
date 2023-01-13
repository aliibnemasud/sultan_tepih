import React from "react";
import "./Slider.css";

import img3 from "../../Images/banner3.png";
import img1 from "../../Images/banner2.png";

const Slider = () => {
  return (
    <div className="bg-danger my-5">

      <div
        id="carouselExample"
        class="carousel slide" data-bs-ride="carousel"
      >
        {/* carousel indicator */}

        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* carousel indicator */}

        <div class="carousel-inner">

          <div class="carousel-item active">


            <div className="carousel-item-div">

              <h1 className="mb-2 text-white">
                Choose The Best Carpet For You
              </h1>

              <div>
                <hr className="text-light w-25 mb-2" />
                <h2 className="text-left text-white">
                  Have you seen our latest carpets? <br /> Choose a carpet by
                  your mood now!
                </h2>
              </div>

              
              <div className="my-4 me-4 d-grid gap-2 d-md-flex justify-content-md-start">
                <a href="/products" className="btn btn-light btn-lg">
                  Products
                </a>
                <a href="/contact" className="btn btn-outline-light btn-lg">
                  Contact Us
                </a>
              </div>

            </div>

          </div>

          <div class="carousel-item">
            <img src={img1} class="d-block w-100 sliderImage" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={img3} class="d-block w-100 sliderImage" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
