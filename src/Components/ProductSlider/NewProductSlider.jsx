import axios from "axios";
import React, { Component } from "react";
import { FaEye, FaInfoCircle } from "react-icons/fa";
import Slider from "react-slick";
import ImageModal from "./ImageModal";
import "./Slider.css";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={`${className} d-none d-lg-block bg-danger p-0`} style={{ ...style, display: "block", color: "red" }} onClick={onClick}></div>;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={`${className} d-none d-lg-block sideArrow bg-danger`} style={{ ...style, display: "block", color: "green" }} onClick={onClick}></div>;
}

class NewProductSlider extends Component {

  state = { products: [], newProducts: [], openModal: "", pdImg: "", active: "featured", discountPd: [], featuredPd: []};

  navigate = (prop) => {
    window.location.href = `/product-details/${prop}`;
  };

  async componentDidMount() {
    await axios.get("/data/products.json")
    .then((res) => {
      this.setState({ products: res.data })      
    });

    function parseDate(input) {
      var parts = input.match(/(\d+)/g); 
      return new Date(parts[2], parts[1] - 1, parts[0]);
    }

    let newestProduct = this.state.products?.sort((a, b) => {
      var c = parseDate(a.createdAt);
      var d = parseDate(b.createdAt);
      return c - d;
    });

    this.setState({
      newProducts: newestProduct,
      featuredPd: this.featuredProduct(this.state.products),
      discountPd: this.discountProduct(this.state.products),
    })
 
  }

  // discount product
  discountProduct = (products) => {
   let discountProduct =  products.filter(product  => product.discount == 0)
    this.setState({
      discountPd: discountProduct 
    })    
  };
  // setDiscount(disc)

  featuredProduct = (products) => {
    let feat = products.filter(product  => product.featured == 1)
    this.setState({
      featuredPd: feat
    }) 
  }

  changeState = (props) => {
    this.setState({ openModal: props });
  };

  onDiscount = (e) => {
    this.setState({
      active: e.target.id,
    });
  };

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
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
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
            dots: false,
          },
        },
      ],
    }; 

    // console.log(this.state.products)    

    return (
      <div className="text-center container mt-5">
        <div>
          <button id="on-discount" onClick={this.onDiscount} className={`btn ${this.state.active === "on-discount" ? "btn-danger" : ""} px-3 py-2 mx-2 rounded`}>
            On discount
          </button>
          <button id="featured" onClick={this.onDiscount} className={`btn ${this.state.active == "featured" ? "btn-danger" : ""} px-3 py-2 mx-2 rounded`}>
            Featured
          </button>
          <button id="newest-products" onClick={this.onDiscount} className={`btn ${this.state.active === "newest-products" ? "btn-danger" : ""} px-3 py-2 mx-2 rounded`}>
            Newest products
          </button>
        </div>
        <Slider {...settings} className="row">
          {this.state.products.map((product) => {
            return (
              <div key={product?.id} className="product-card col-lg-3 my-3">
                <div className="card-content rounded">
                  <div className="card-image">
                    {/* <GlassMagnifier                                   
                      imageSrc={product.img[0]}
                      allowOverflow={true}
                      imageAlt="Example"
                      magnifierSize="70%"
                      largeImageSrc={product.img[0]} // Optional
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
                    /> */}
                    {/* normal image */}
                    <img src={product.img[0]} alt="" height="400px" style={{objectFit: 'cover'}} className="w-100" />

                   {/*  <ReactImageMagnify
                      {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: product?.img[0]
                        },
                        largeImage: {
                            src: product?.img[0],
                            width: 1200,
                            height: 1800
                        }
                    }}
                    /> */}

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
                  <div onClick={() => this.navigate(`${product?.id}`)} className="py-3" >
                    <h6>
                      <span className="fw-bold text-danger">Collections:</span>                     
                    </h6>
                    <div className="my-2">
                      {
                        product?.category?.map(cat => {
                          return <span className="badge text-bg-info mx-1">{cat}</span> 
                        })
                      }                                       
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

export default NewProductSlider;
