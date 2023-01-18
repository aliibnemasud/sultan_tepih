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
  const [size, setSize] = useState(5);

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
  const pageCount = Math.ceil(totalProducts / 5);
  const indexOfLastPost = page * size;
  const indexOfFirstPost = indexOfLastPost - size;
  const currentProducts = loadProducts?.slice(indexOfFirstPost, indexOfLastPost);
  

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
     
    if(pricingValue === 'lowToHigh'){
      let filterByPrice = products?.sort((a, b) => a.price[0] - b.price[0]);
      setSortByPrice(filterByPrice);
      setDateValue('')
    }
    if(pricingValue === 'highToLow'){
      let filterByPrice = products?.sort((a, b) => b.price[0] - a.price[0]);
      // Reverse
      // let reverseFilterByPrice = filterByPrice?.reverse();
      setSortByPrice(filterByPrice);
      setDateValue('')
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
    } else {
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
        <aside className="sideBarNew col-lg-2 d-none d-sm-none d-lg-block d-md-none border py-5 px-3">
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

        <section className="productNew border col-lg-10 p-5">
          <ProductPopup show={showImage} modalProductData={modalProductData} onHide={() => setShowImage(false)} />

          <div className="d-flex justify-content-between align-items-center p-3">
            <div className="d-flex gap-3">
              <div>
                <button onClick={sidebarCollapse} type="button" class="btn mb-3">
                  {toggleBar == "active" ? <FaArrowRight className="text-primary fw-bold" /> : <FaArrowLeft className="text-primary fw-bold" />}
                </button>
              </div>
              <div>
                <h2>Svi Proizvodi</h2>
                <p className="text-primary fw-bold">{currentProducts?.length} Proizvoda</p>
              </div>
            </div>

            <div className="d-flex gap-1 flex-wrap">
              <div className="d-flex gap-2">
                <Form.Select onChange={(e) => setPricingValue(e.target.value)} aria-label="sorting by size">
                  <option value="lowToHigh">Price (Low to High)</option>
                  <option value="highToLow">Price (High to Low)</option>
                </Form.Select>
              </div>

              <div className="d-flex gap-2">
                <Form.Select onChange={(e) => setDateValue(e.target.value)} aria-label="sorting by size">
                  <option value="latestProducts">Najnoviji Proizvodi</option>
                  <option value="oldestProducts">Najstariji Proizvodi</option>
                </Form.Select>
              </div>
            </div>
          </div>

          {/* products */}

          <section className="products row py-2">
            {loadProducts
              ? loadProducts?.map((product) => {
                  return <NewProductCard product={product} setModalProductData={setModalProductData} setShowImage={setShowImage} />;
                })
              : "Trenutno nemamo proizvode koje ste tražili"}
          </section>

          {/* pagination */}
          <nav aria-label="...">
            <ul class="pagination">
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

              <select onChange={(e) => setSize(e.target.value)} class="custom-select mx-2" id="inputGroupSelect01">
                <option selected>5</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
            </ul>
          </nav>
          {/* pagination */}
        </section>
      </div>
    </section>
  );
};

export default NewProductPage;
