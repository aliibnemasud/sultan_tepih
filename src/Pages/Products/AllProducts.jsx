import axios from "axios";
import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import { ProductCard } from "../../Components/ProductCard/ProductCard";
import ProductPopup from "./ProductPopup";

const AllProducts = () => {
  const { isLoading, error, data: products } = useQuery("productData", () => axios.get("/data/products.json"));

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(5);

  const totalProducts = products?.length;

  // Pagination

  const pageCount = Math.ceil(totalProducts / 5);
  const indexOfLastPost = page * size;
  const indexOfFirstPost = indexOfLastPost - size;
  const currentProducts = products?.slice(indexOfFirstPost, indexOfLastPost);

  //

  




  if (isLoading) return <h1>Loading....</h1>;

  const sortProducts = () => {};

  return (
    <div className="p-5">
      <section className="productBar d-flex justify-content-between align-items-center bg-primary p-2">
        <div>
          <h1>Svi Proizvodi</h1>
          <p>{totalProducts} Proizvoda</p>
        </div>

        <select className="form-select w-25 me-4" aria-label="Default select example" id="sorting" onChange={() => sortProducts()}>
          <option defaultValue value="0" onClick={() => sortProducts()}>
            Najnoviji Proizvodi
          </option>
          <option value="1" onClick={() => sortProducts()}>
            Najstariji Proizvodi
          </option>
        </select>
      </section>

      <ProductPopup />

      <div className="col-12 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 p-4 mr-0 ">
        {currentProducts
          ? currentProducts.map((product) => {
              return (
                <ProductCard
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
      </div>

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
            <option selected>Size</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </ul>
      </nav>
    </div>
  );
};

export default AllProducts;
