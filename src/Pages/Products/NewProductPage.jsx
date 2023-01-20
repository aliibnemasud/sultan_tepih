import React, { useEffect } from "react";
import { filterContent } from "./Data";
import ProductPopup from "./ProductPopup";
import { FaArrowLeft, FaArrowRight, FaList } from "react-icons/fa";
import "./ShopPage.css";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Form } from "react-bootstrap";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import NewProductCard from "./NewProductCard";

const NewProductPage = () => {
  const [toggleBar, setToggleBar] = useState("");
  const { isLoading, error, data } = useQuery("productData", () => axios.get("/data/products.json"));
  const products = data?.data;
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);

  const [showImage, setShowImage] = useState(false);
  const [modalProductData, setModalProductData] = useState("");

  // Filtering....
  const [pricingValue, setPricingValue] = useState("");
  const [sortByPrice, setSortByPrice] = useState([]);
  const [dateValue, setDateValue] = useState("");
  const [sortByDate, setSortByDate] = useState([]);

  // Load Products
  let loadProducts = products;

  //  pagination
  const totalProducts = loadProducts?.length;
  const pageCount = Math.ceil(totalProducts / 10);
  const indexOfLastPost = page * size;
  const indexOfFirstPost = indexOfLastPost - size;
  const currentProducts = loadProducts?.slice(indexOfFirstPost, indexOfLastPost);

  // Making sidebar responsive
  const [md, setMd] = useState('d-md-none');
  const [dSm, setDSm] = useState('d-none');
  const [colMd, setCol] = useState(''); 
  const [smCol, setColSm] = useState('');

  const handleCategoryChange = () => {};
  const handleSizeChange = () => {};
  const handleColorChange = () => {};
  const filterProducts = () => {};

  // Sort by price
  /* let filterByPrice = products?.sort((a, b) => a.price[0] - b.price[0]);
  if (pricingValue === "lowToHigh") {
    setSortByPrice(filterByPrice);
  }
  if (pricingValue === "highToLow") {
    // Reverse
    let reverseFilterByPrice = filterByPrice?.reverse();
    setSortByPrice(reverseFilterByPrice);
  } */

  //

  useEffect(() => {
    if (dateValue === "lowToHigh") {
      let filterByPrice = products?.sort((a, b) => a.price[0] - b.price[0]);
      setSortByPrice(filterByPrice);
      setDateValue("");
    }
    if (dateValue === "highToLow") {
      let filterByPrice = products?.sort((a, b) => b.price[0] - a.price[0]);
      // Reverse
      // let reverseFilterByPrice = filterByPrice?.reverse();
      setSortByPrice(filterByPrice);
      setDateValue("");
    }
  }, [products, loadProducts, pricingValue, dateValue]);

  // Sorting by date

  function parseDate(input) {
    var parts = input.match(/(\d+)/g); // note parts[1]-1
    return new Date(parts[2], parts[1] - 1, parts[0]);
  }

  if (dateValue === "oldestProducts") {
    let lPro = products?.sort((a, b) => {
      var c = parseDate(a.createdAt);
      var d = parseDate(b.createdAt);
      return d - c;
    });
    loadProducts = lPro;
  } else if (dateValue === "latestProducts") {
    let oPro = products?.sort((a, b) => {
      var c = parseDate(a.createdAt);
      var d = parseDate(b.createdAt);
      return c - d;
    });
    loadProducts = oPro;
  }

  if (isLoading) return <h1>Loading....</h1>;

  // Toggle bar
  const sidebarCollapse = () => {
    if (toggleBar === "") {
      setToggleBar("active");

      // Display medium screen
      setMd('d-md-block');
      setCol('col-md-10');

      // for small screen
      setDSm('d-block')
      setColSm('col-10');
      

    } else {
      // Display medium screen
      setMd('d-md-none')
      setCol('')

      // for small screen
      setDSm('d-none')
      setColSm('')


      setToggleBar("");
    }
  };

  // Sort Logic start from here here

  /* function parseDate(input) {
    var parts = input.match(/(\d+)/g); // note parts[1]-1
    return new Date(parts[2], parts[1] - 1, parts[0]);
  }
  const selectFilter = (e) => {
    let selected = e.target.value;
    if (products == null) {
      if (products != null) {
        products = [...products];
      }
    }
    // console.log('sort', productsData);

    // eslint-disable-next-line eqeqeq

    if (selected == "oldestProducts") {
      products.sort((a, b) => {
        var c = parseDate(a.createdAt);
        var d = parseDate(b.createdAt);
        return d - c;
      });
      // eslint-disable-next-line eqeqeq
    } else if (selected == "latestProducts") {
      products.sort((a, b) => {
        var c = parseDate(a.createdAt);
        var d = parseDate(b.createdAt);
        return c - d;
      });
    }
    setSortByDate(products);
  }; */

  if (sortByDate.length > 0) {
    loadProducts = sortByDate;
  } else if (sortByPrice.length > 0) {
    loadProducts = sortByPrice;
  } else {
    loadProducts = currentProducts;
  }

  return (
    <section className="container-fluid">
      <div className="row">
        <aside className={`sideBarNew col-lg-2 col-md-2 col-2 ${dSm} d-lg-block ${md} border py-5 px-3`}>
          {/* <!-- CATEGORY  --> */}
          <div>
            <h4 className="mb-2">Kategorije</h4>
            {filterContent?.category?.map((cat) => {
              return (
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value={cat} id={cat} />
                  <label className="form-check-label" htmlFor="flexCheckDefault1">
                    {cat}
                  </label>
                </div>
              );
            })}
          </div>
          {/* <!-- CATEGORY END --> */}

          {/* <!-- COLLECTION --> */}
          <div>
            <h4 className="mt-4 mb-2">Kolekcije</h4>
            {filterContent?.collection?.map((collection) => {
              return (
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value={collection} id={collection} />
                  <label className="form-check-label" htmlFor="flexCheckDefault1">
                    {collection}
                  </label>
                </div>
              );
            })}
          </div>

          <div className="checkbox">
            <h3 className=" ">Boja</h3>
            <ul className="list-unstyled">
              {filterContent?.color?.map((color) => {
                return (
                  <li className="d-inline m-1 ">
                    <input className={`form-check-input rounded-circle ${color?.code} p-3`} type="checkbox" value={color?.name} id="flexCheckDefault11" />
                  </li>
                );
              })}
            </ul>
          </div>

          {/* <div className="sizes "> */}

          <div className="mb-5 mt-4">
            <h4 className="mb-2 mt-4">Veličina</h4>
            <div className="col-12 ps-lg-2 ps-md-1 ps-1 d-flex flex-row flex-wrap">
              {/* <!-- SIZES --> */}

              {filterContent?.size?.map((size) => {
                return (
                  <div className="form-check ms-3">
                    <input className="form-check-input" type="checkbox" value={size} id="flexCheckDefault17" />
                    <label className="form-check-label" htmlFor="flexCheckDefault17">
                      {size}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          <button type="button" className="btn btn-danger" onClick={filterProducts}>
            Filtriraj
          </button>
        </aside>

        <section className={`productNew border col-lg-10 ${colMd} ${smCol} p-5`}>
          <ProductPopup show={showImage} modalProductData={modalProductData} onHide={() => setShowImage(false)} />

          <div className="d-flex justify-content-between align-items-center p-3">
            <div className="d-flex gap-3">
              <div>
                <button onClick={sidebarCollapse} type="button" class="btn mb-3">
                  {toggleBar === "active" ? <FaArrowRight className="text-primary fw-bold" /> : <FaArrowLeft className="text-primary fw-bold" />}
                </button>
              </div>
              <div>
                <h2>Svi Proizvodi</h2>
                <p className="text-primary fw-bold">{currentProducts?.length} Proizvoda</p>
              </div>
            </div>

            <div className="d-flex gap-1 flex-wrap">
              {/* <div className="d-flex gap-2">
                <Form.Select onChange={(e) => setPricingValue(e.target.value)} aria-label="sorting by size">
                  <option value="lowToHigh">Price (Low to High)</option>
                  <option value="highToLow">Price (High to Low)</option>
                </Form.Select>
              </div> */}

              <div className="d-flex gap-2">
                <Form.Select className="border-0 shadow-sm font-weight-normal" onChange={(e) => setDateValue(e.target.value)} aria-label="sorting by size">
                  <option defaultChecked >Featured</option>
                  <option value="latestProducts">Najnoviji Proizvodi</option>
                  <option value="oldestProducts">Najstariji Proizvodi</option>
                  <option value="lowToHigh">Price (Low to High)</option>
                  <option value="highToLow">Price (High to Low)</option>
                </Form.Select>
              </div>
            </div>
          </div>

          {/* products */}

          <section className="products row py-2">
            {currentProducts
              ? currentProducts?.map((product) => {
                  return <NewProductCard product={product} setModalProductData={setModalProductData} setShowImage={setShowImage} />;
                })
              : "Trenutno nemamo proizvode koje ste tražili"}
          </section>

          {/* pagination */}
          <nav aria-label="" className="">
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <button onClick={() => setPage(page - 1)} class="page-link" href="#" tabindex="-1">
                  Previous
                </button>
              </li>

              {[...Array(pageCount).keys()].map((number) => {
                return (
                  <li className={`page-item ${page === number + 1 ? "active" : ""}`}>
                    <button onClick={() => setPage(number + 1)} class="page-link " href="#">
                      {number + 1}
                    </button>
                  </li>
                );
              })}
              <li class="page-item">
                <button onClick={() => setPage(page + 1)} class="page-link" href="#">
                  Next
                </button>
              </li>

              {/* products */}
              {/* <select onChange={(e) => setSize(e.target.value)} class="custom-select mx-2" id="inputGroupSelect01">
                <option selected>5</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select> */}
            </ul>
          </nav>
          {/* pagination */}
        </section>
      </div>
    </section>
  );
};

export default NewProductPage;