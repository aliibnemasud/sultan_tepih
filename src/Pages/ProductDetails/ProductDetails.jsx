import "./ProductDetails.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Faq } from "../../Components/FAQ/Faq";
import { ProductSlider } from "../../Components/ProductSlider/ProductSlider";
import NewProductSliderProDetails from "../../Components/ProductSlider/NewProductSliderProDetails";

export const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [chosenSize, setChosenSize] = useState(0);
  const { id } = useParams();
  const [openModal, setOpenModal] = useState("");
  const [backgroundPos, setBackgroundPos] = useState(`0% 0%`);
  const [background, setBackground] = useState(1);

  useEffect(() => {
    // Fetch Function
    fetch("/data/products.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(async (res) => {
        return res.json();
      })
      .then(function (data) {
        setProduct(data);
        if (id !== null) {
          let p = data.filter((item) => item.id === id);
          setProduct(p[0]);
        }
      })
      .catch(function (err) {
        console.log(err, " error");
      });
  }, [id]);

  const handleOpenModal = () => {
    if (openModal === "d-block") {
      setOpenModal("");
    } else {
      setOpenModal("d-block");
    }
  };

  const handleMouseMove = (e) => {
    setBackground(0);
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setBackgroundPos(`${x}% ${y}%`);
  };

  return (
    <>
      <div className="container bg-light mt-5 text-start mb-4">
        {product ? (
          <div className="row">
            <div className="col-md-6">
              <div className="m-3">
                {/* <a href={`https://sultantepih.com/${product.img[0]}`} target="_blank"></a> */}
                <figure
                  onClick={handleOpenModal}
                  onMouseLeave={() => setBackground(1)}
                  onMouseMove={(e) => handleMouseMove(e)}
                  style={{ backgroundImage: "linear-gradient(rgba(248, 249,250, " + background + "), rgba(248, 249,250, " + background + ")), url(" + product.img[0] + ")", backgroundPosition: backgroundPos, backgroundRepeat: "no-repeat", justifyContent: "center", alignItems: "center" }}
                >
                  <img src={product.img[0]} className="img-fluid  justify-self-center align-self-center productImg" alt="" />
                </figure>
              </div>
              {/* <div className="">
                    <img src={product.img[1]} className="img-fluid col-md-3" alt=""/>
                    <img src={product.img[2]} className="img-fluid col-md-3" alt=""/>
                    <img src={product.img[3]} className="img-fluid col-md-3" alt=""/>
                </div> */}
            </div>
            <div className="col-md-6">
              <nav aria-label="breadcrumb ">
                <ol className="breadcrumb my-4">
                  <li className="breadcrumb-item">
                    <a href="/" className="text-decoration-none text-dark">
                      Početna{" "}
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/products" className="text-decoration-none text-dark">
                      Prodizvodi{" "}
                    </a>
                  </li>
                  <li className="breadcrumb-item active text-black" aria-current="page">
                    {product.collection} tepih
                  </li>
                </ol>
              </nav>
              {/* <h6 className="text-muted">{product.collection}</h6> */}
              <h4 className="">
                {product.collection} ({product.code})
              </h4>
              {/* {
                  // eslint-disable-next-line eqeqeq
                  product.discount == "1" ?
                  <>
                    <p className="m-0 text-end red-text"><del>{Math.ceil(product.price[chosenSize] / (1 - 0.1))}KM</del></p>
                    <p className="h3 text-end">{product.price[chosenSize]}KM</p>
                  </>
                  : 
                  <>
                    <p className="h3 text-end">{product.price[chosenSize]}KM</p>
                  </>
                } */}

              <hr />

              <div className="d-flex flex-row flex-wrap row">
                {/* <!-- DIMENSION ARRAY SHIT GOES HERE --> */}
                {product.sizes.map((size, index) => {
                  return (
                    <span className="border p-2 m-2 col-2" key={index} onClick={() => setChosenSize(index)}>
                      {size}
                    </span>
                  );
                })}
              </div>

              <hr />
              <div>
                <h3 className="">Boje</h3>
                {product.colors.map((color) => {
                  return <p key={color}>&ensp;- {color}</p>;
                })}
              </div>
              <div>
                <h3 className="">Sastav</h3>
                {/* <p>&ensp;{product.desc}</p> */}
                <ul>
                  {                    
                      product.desc.map(li => <li>{li}</li>)                    
                  }
                </ul>
              </div>
            </div>

            {/* light box modal start */}

            <div onClick={handleOpenModal} className={`my-modal ${openModal}`}>
              <span onClick={handleOpenModal} className="close-btn">
                &times;
              </span>
              <img width="20%" src={product?.img[0]} className="myModal-content" />
              <div id="caption"></div>
            </div>
            {/* light box modal start */}
          </div>
        ) : (
          <></>
        )}
      </div>

      <NewProductSliderProDetails />
      <Faq />
    </>
  );
};
