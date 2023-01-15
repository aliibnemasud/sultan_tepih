import axios from "axios";
import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useQuery } from "react-query";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import ProductPopup from "./ProductPopup";
import "./ShopPage.css";

const ProductPage = () => {
  const [toggleBar, setToggleBar] = useState("");
  const { isLoading, error, data } = useQuery("productData", () => axios.get("/data/products.json"));
  const products = data?.data;

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(5);
  const [showImage, setShowImage] = useState(false);
  const [modalProductData, setModalProductData] = useState('');

  const totalProducts = products?.length;
  const pageCount = Math.ceil(totalProducts / 5);

  //  pagination

  const indexOfLastPost = page * size;
  const indexOfFirstPost = indexOfLastPost - size;
  const currentProducts = products?.slice(indexOfFirstPost, indexOfLastPost);

  const filterContent = {
    category: ["DNEVNI BORAVAK", "KUHINJA", "SPAVAĆA SOBA", "KUPATILO", "HODNIK"],
    collection: ["OPERA", "MODERN COLLECTION", "DIZAYN", "PLAZA", "ŠPAGASTI", "BAMBOO", "WENICE", "FLORA", "HEREKE", "LOTUS", "SOFT", "IRAN COLLECTION", "ZARA", "SARAJ", "SARAJ COLLECTION"],
    color: [
      { name: "black", code: "bg-dark" },
      { name: "blue", code: "bg-primary" },
      { name: "red", code: "bg-danger" },
      { name: "yellow", code: "bg-warning" },
      { name: "green", code: "bg-success" },
      { name: "dark", code: "bg-gray" },
    ],
    size: ["115x110", "115x75", "110x110"],
  };

  const handleCategoryChange = () => {};
  const handleCollectionChange = () => {};
  const handleSizeChange = () => {};
  const handleColorChange = () => {};
  const filterProducts = () => {};

  if (isLoading) return <h1>Loading....</h1>;

  const sidebarCollapse = () => {
    if (toggleBar === "") {
      setToggleBar("active");
    } else {
      setToggleBar("");
    }
  };

  return (
    <div>
      <aside class={`vertical-nav ${toggleBar} px-3`} id="sidebar">
        {/* <!-- CATEGORY  --> */}
        <div>
          <h4 className="mb-2 mt-4">Kategorije {filterContent?.category.length}</h4>
          {filterContent?.category?.map((cat) => {
            return (
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value={cat} onChange={(e) => handleCategoryChange(e)} id={cat} />
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
                <input className="form-check-input" type="checkbox" value={collection} onChange={(e) => handleCategoryChange(e)} id={collection} />
                <label className="form-check-label" htmlFor="flexCheckDefault1">
                  {collection}
                </label>
              </div>
            );
          })}
          ;
        </div>

        <div className="checkbox">
          <h3 className=" ">Boja</h3>
          <ul className="list-unstyled">
            {filterContent.color.map((color) => {
              return (
                <li className="d-inline m-1 ">
                  <input className={`form-check-input rounded-circle ${color?.code} p-3`} type="checkbox" value={color?.name} onChange={(e) => handleColorChange(e)} id="flexCheckDefault11" />
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

            {filterContent.size.map((size) => {
              return (
                <div className="form-check ms-3">
                  <input className="form-check-input" type="checkbox" value={size} onChange={(e) => handleSizeChange(e)} id="flexCheckDefault17" />
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

      <section class={`page-content p-5 ${toggleBar}`} id="content">
        <button onClick={sidebarCollapse} type="button" class="btn btn-primary mb-3">
          Toggle Sidebar
        </button>

        <Button variant="primary" onClick={() => setShowImage(true)}>
          Launch vertically centered modal
        </Button>

        <ProductPopup show={showImage} modalProductData={modalProductData} onHide={() => setShowImage(false)} />

        <section className="bg-color d-flex justify-content-between px-3 py-3">
          <div>
            <h1>Svi Proizvodi</h1>
            <p>{currentProducts?.length} Proizvoda</p>
          </div>

          <select className="form-select w-25" aria-label="Default select example" id="sorting">
            <option defaultValue value="0">
              Najnoviji Proizvodi
            </option>
            <option value="1">Najstariji Proizvodi</option>
          </select>
        </section>

        {/* products */}

        <section className="products row py-5">
          {currentProducts
            ? currentProducts?.map((product) => {
                return (
                  <ProductCard
                    setShowImage={setShowImage}
                    setModalProductData={setModalProductData}

                    key={product.id}
                    id={product.id}
                    price={product.price}
                    title={product.title}
                    desc={product.desc}
                    img={product.img}
                    colors={product.colors}
                    category={product.category}
                    collection={product.collection}
                    featured={product.featured}
                    discount={product.discount}
                    discountPrice={product.discountPrice}
                    code={product.code}
                  />
                );
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
  );
};

export default ProductPage;
