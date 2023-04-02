import axios from "axios";
import React, { Component } from "react";
import { FaEye, FaInfoCircle } from "react-icons/fa";
import Slider from "react-slick";
import ImageModal from "./ImageModal";
import "./Slider.css";


class NewProductSliderProDetails extends Component {
  state = { products: [], openModal: "", pdImg: "" };

  navigate = (prop) => {
    window.location.href = `/product-details/${prop}`;
  };

  async componentDidMount() {
    await axios.get("/data/products.json").then((res) => {
      this.setState({ products: res.data });
    });
  }

  changeState = (props) => {
    this.setState({ openModal: props });
  };

  render() {
     var settings = {
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 2,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,     
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="text-center container mt-5">        
        <Slider {...settings} className="row">
          {this.state.products.map((product) => {
            return (
              <div key={product?.id} className="product-card col-lg-3 my-3">
                <div className="card-content rounded">
                  <div className="card-image">
                    <img src={product.img[0]} alt="" height="400px" style={{ objectFit: "cover" }} className="w-100" />
                    <div className="card-bottom py-2 w-100 d-flex justify-content-around align-items-center">
                      <button
                        onClick={() => {
                          if (this.state.openModal === "d-block") {
                            this.setState({ openModal: "" });
                          } else {
                            this.setState({
                              openModal: "d-block",
                              pdImg: product.img[0],
                            });
                          }
                        }}
                        className="btn btn-lite text-danger"
                      >
                        <FaEye size={20} />
                      </button>
                      <button onClick={() => this.navigate(`${product?.id}`)} className="btn btn-lite text-danger">
                        <FaInfoCircle size={20} />
                      </button>

                      <span className="d-flex flex-row flex-wrap fs-5 align-items-end">
                        Boje:
                        {product?.colors?.map((color, index) => {
                          return <span key={index} className="rounded-circle ms-1 mb-2" style={{ color: color, background: color, width: "15px", height: "15px" }}></span>;
                        })}
                      </span>
                    </div>
                  </div>
                  <div onClick={() => this.navigate(`${product?.id}`)} className="py-3">
                    <h6>
                      <span className="fw-bold text-danger">Collections:</span>
                    </h6>
                    <div className="my-2">
                      {product?.category?.map((cat) => {
                        return <span className="badge text-bg-info mx-1">{cat}</span>;
                      })}
                    </div>
                    <h6>
                      <span className="fw-bold text-danger">Kod: </span> {product?.code}
                    </h6>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>

        {this.state.openModal === "d-block" && <ImageModal changeState={this.changeState} openModal={this.state.openModal} img={this.state.pdImg} />}
      </div>
    );
  }
}

export default NewProductSliderProDetails;
