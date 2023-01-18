import axios from "axios";
import React, { Component } from "react";
import { FaAlgolia, FaArrowCircleLeft, FaArrowCircleRight, FaEye } from "react-icons/fa";
import Slider from "react-slick";
import ImageModal from "./ImageModal";
// import '../../Pages/Products/ProductCard.css';

/* function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: 'block', color: "red" }} onClick={onClick}>
    <h1 className="ml-5"><FaArrowCircleRight /></h1>
  </div>;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "block", color: "green" }} onClick={onClick}>
    <h1><FaArrowCircleLeft /></h1>
  </div>;
} */

class NewProductSlider extends Component {
  /* loadProducts = () => {
    const { isLoading, error, data } = useQuery("productData", () => axios.get("/data/products.json"));
    const products = data?.data;
  }; */

  state = { products: [], openModal: "", pdImg: '' };

  componentDidMount() {
    axios.get("/data/products.json").then((res) => this.setState({ products: res.data }));
  }

  /* handleOpenModal = () => {
    if (this.state.openModal === "d-block") {
      this.setState({ openModal: "" });
    } else {
      this.setState({ openModal: "d-block" });
    }
  }; */

  changeState = (props) => {
    this.setState({ openModal: props })
  }

  render() {
    var settings = {
      dots: true,
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
            dots: true,
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
      <div className="text-center container">
        <h2>Products</h2>
        <Slider {...settings} className="row">
          {this.state.products.map((product) => {
            return (
              <div className="product-card col-lg-3 my-3">
                <div className="card-content rounded">
                  <div className="card-image">
                    <img onClick={() => {
                      if (this.state.openModal === "d-block") {
                        this.setState({ openModal: "" });
                      } else {
                        this.setState({ 
                          openModal: "d-block",
                          pdImg: product.img[0] });
                      }
                    }} src={product.img[0]} className="img-fluid text-center" alt="" />
                    <div className="card-bottom py-2 w-100 d-flex justify-content-around">
                      <button className="btn btn-lite text-danger">
                        <FaEye />
                      </button>
                      <button className="btn btn-lite text-danger">
                        <FaAlgolia />
                      </button>
                      <button className="btn btn-lite text-danger">
                        <FaAlgolia />
                      </button>
                    </div>
                  </div>
                  <div className="d-flex w-100 py-3 justify-content-between px-3">
                    <h5>Kolekcija: OPERA</h5>
                    <h5>Kod: OW1818</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>


        {
          this.state.openModal === 'd-block' && <ImageModal changeState={this.changeState} openModal={this.state.openModal} img={this.state.pdImg} />
        }

      </div>
    );
  }
}

export default NewProductSlider;
