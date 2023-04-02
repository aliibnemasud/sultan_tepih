import React, { useEffect } from "react";
import { filterContent } from "./Data";
import ProductPopup from "./ProductPopup";
import { FaTasks } from "react-icons/fa";
import "./ShopPage.css";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Form } from "react-bootstrap";

import NewProductCard from "./NewProductCard";
import { allFilterCollection, filterProductsByListOfCollection } from "../../Hook/filterProductFunction";

const NewProductPage = () => {
  const [toggleBar, setToggleBar] = useState("");

  // Filter By Checkbox
  const [collection, setCollection] = useState({
    collectionName: [],
    response: [],    
  });

  // Filter By Checkbox
  const [categoryFilter, setCategoryFilter] = useState({    
    category: [],
  });
  // Filter By Checkbox
  const [sizeF, setSizeF] = useState({    
    size:[]
  });

  // console.log(sizeF)

//  console.log(collection)
  
  const [filterProduct, setFilterProduct] = useState([])

  const { isLoading, error, data } = useQuery("productData", () => axios.get("/data/products.json"));
  const products = data?.data;
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(12);

  const [showImage, setShowImage] = useState(false);
  const [modalProductData, setModalProductData] = useState("");

  // Filtering....
  const [pricingValue, setPricingValue] = useState("");
  const [sortByPrice, setSortByPrice] = useState([]);
  const [dateValue, setDateValue] = useState("");
  const [sortByDate, setSortByDate] = useState([]);   

  // Filter products
  const filterProducts = () => {
    
    // Single product
    /* let filterProductsByCollection = filterProductsByListOfCollection(products, collection.collectionName) */

    if(categoryFilter?.category.length === 0 && collection?.collectionName.length === 0 && sizeF?.size.length === 0 ){
      alert('Please, Select at least one filter')
      return 
    }

    let filterProductsByCollection = allFilterCollection(products, categoryFilter?.category, collection?.collectionName, sizeF?.size)

    if(categoryFilter?.category.length > 0 || collection?.collectionName.length > 0 || sizeF?.size.length > 0){      
      setFilterProduct(filterProductsByCollection)
      setSideBar("0")
      
    }
    if(filterProductsByCollection.length === 0){
      alert('No Product found!')      
    }
       
  };

  console.log(filterProduct)

  let loadProducts;
  if(filterProduct.length > 0){
   loadProducts = filterProduct; 
  } else {
    loadProducts = products;
  }

  //  pagination
  const totalProducts = loadProducts?.length;
  const pageCount = Math.ceil(totalProducts / 10);
  const indexOfLastPost = page * size;
  const indexOfFirstPost = indexOfLastPost - size;
  const currentProducts = loadProducts?.slice(indexOfFirstPost, indexOfLastPost);

  // Making sidebar responsive
  const [md, setMd] = useState("d-md-none");
  const [dSm, setDSm] = useState("d-none");
  const [colMd, setCol] = useState("");
  const [smCol, setColSm] = useState("");
  const [sideBar, setSideBar] = useState("");

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
      setMd("d-md-block");
      setCol("col-md-10");

      // for small screen
      setDSm("d-block");
      setColSm("col-10");
    } else {
      // Display medium screen
      setMd("d-md-none");
      setCol("");

      // for small screen
      setDSm("d-none");
      setColSm("");

      setToggleBar("");
    }
  };

  if (sortByDate.length > 0) {
    loadProducts = sortByDate;
  } else if (sortByPrice.length > 0) {
    loadProducts = sortByPrice;
  } else {
    loadProducts = currentProducts;
  }

  const handleSideBar = () => {
    setSideBar("300px");

    if (sideBar === "300px") {
      setSideBar("0");
    }
  };

  const collectionsFilter = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCollection({
        collectionName: [...collection?.collectionName, value],
        response: [...collection?.response, value],
      });
    } else {
      setCollection({
        collectionName: collection?.collectionName.filter((e) => e !== value),
        response: collection?.response.filter((e) => e !== value),
      });
    }
  };

  const categoryFilterOnchange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCategoryFilter({
        category: [...categoryFilter?.category, value],       
      });
    } else {
      setCategoryFilter({
        category: categoryFilter?.category.filter((e) => e !== value),        
      });
    }
  };

  const sizeFilterOnchange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSizeF({
        size: [...sizeF?.size, value],       
      });
    } else {
      setSizeF({
        size: sizeF?.size.filter((e) => e !== value),        
      });
    }
  };

  return (
    <section className="container-fluid productPage">
      <div className="row">
        <div className="sidebar bg-white shadow" style={{ width: `${sideBar}` }}>
          <div onClick={handleSideBar} className="closebtn">
            &times;
          </div>

          <div className="sidebarContent m-3">
            {/* <!-- CATEGORY  --> */}
            <div>
              <h4 className="mb-2">Kategorije</h4>
              {filterContent?.category?.map((cat) => {
                return (
                  <div className="form-check">
                    <input className="form-check-input" onChange={categoryFilterOnchange} type="checkbox" value={cat} id={cat} />
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
                    <input className="form-check-input" onChange={collectionsFilter} type="checkbox" value={collection} id={collection} />

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
                    <li className="d-inline m-1">
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
                      <input className="form-check-input" onChange={sizeFilterOnchange} type="checkbox" value={size} id="flexCheckDefault17" />
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
          </div>
        </div>

        <section className={`productNew border col-lg-12`}>
          <ProductPopup show={showImage} modalProductData={modalProductData} onHide={() => setShowImage(false)} />

          <div className="d-flex justify-content-between align-items-center p-3 mt-5">
            <div className="d-flex align-items-center gap-3">
              <div>
                {/* <button onClick={sidebarCollapse} type="button" className="btn mb-3">
                  {toggleBar === "active" ? <FaArrowRight className="text-primary fw-bold" /> : <FaBars className="text-primary fw-bold" />}
                </button> */}

                <button type="button" onClick={handleSideBar} className="btn btn-lite btn-lg text-danger" id="sidebarButton">
                  <FaTasks />
                </button>
              </div>

              <div>
                <h2 className="mobileViewText mt-2">Svi Proizvodi</h2>

                {/* <p className="text-primary fw-bold">{currentProducts?.length} Proizvoda</p> */}
              </div>
            </div>

            <div className="d-flex gap-1 flex-wrap">
              <div className="d-flex gap-2">
                <Form.Select className="border-0 shadow-sm font-weight-normal" onChange={(e) => setDateValue(e.target.value)} aria-label="sorting by size">
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
                  return <NewProductCard product={product} key={product?.id} setModalProductData={setModalProductData} setShowImage={setShowImage} />;
                })
              : "Trenutno nemamo proizvode koje ste tražili"}
          </section>

          {/* pagination */}
          <nav aria-label="" className="mb-3">
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <button onClick={() => setPage(page - 1)} className="page-link" href="#" tabIndex="-1">
                  Previous
                </button>
              </li>

              {[...Array(pageCount).keys()].map((number) => {
                return (
                  <li className={`page-item ${page === number + 1 ? "active" : ""}`}>
                    <button onClick={() => setPage(number + 1)} className="page-link " href="#">
                      {number + 1}
                    </button>
                  </li>
                );
              })}
              <li className="page-item">
                <button onClick={() => setPage(page + 1)} className="page-link" href="#">
                  Next
                </button>
              </li>

              {/* products */}
              {/* <select onChange={(e) => setSize(e.target.value)} className="custom-select mx-2" id="inputGroupSelect01">
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
