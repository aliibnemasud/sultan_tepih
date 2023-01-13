import React from "react";
import { useQuery } from "react-query";

const Sidebar = () => {
  const { isLoading, error, data } = useQuery("productData", () =>
    fetch("/data/products.json").then((res) => res.json())
  );

  const filterContent = {
    category: [
      "DNEVNI BORAVAK",
      "KUHINJA",
      "SPAVAĆA SOBA",
      "KUPATILO",
      "HODNIK",
    ],
    collection: [
      "OPERA",
      "MODERN COLLECTION",
      "DIZAYN",
      "PLAZA",
      "ŠPAGASTI",
      "BAMBOO",
      "WENICE",
      "FLORA",
      "HEREKE",
      "LOTUS",
      "SOFT",
      "IRAN COLLECTION",
      "ZARA",
      "SARAJ",
      "SARAJ COLLECTION",
    ],
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

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <aside className="col-12 col-md-2 border-end mt-5 ps-lg-4 ps-md-1 ps-sm-5 ps-4 bg-primary sticky-top py-5">
      {/* <!-- CATEGORY  --> */}
      <div>
        <h4 className="mb-2 mt-4">
          Kategorije {filterContent?.category.length}
        </h4>
        {filterContent?.category?.map((cat) => {
          return (
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={cat}
                onChange={(e) => handleCategoryChange(e)}
                id={cat}
              />
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
              <input
                className="form-check-input"
                type="checkbox"
                value={collection}
                onChange={(e) => handleCategoryChange(e)}
                id={collection}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault1">
                {collection}
              </label>
            </div>
          );
        })}
        ;
      </div>

      <div className="checkbox mt-5">
        <h3 className=" ">Boja</h3>
        <ul className="list-unstyled">
          {filterContent.color.map((color) => {
            return (
              <li className="d-inline m-1 ">
                <input
                  className={`form-check-input rounded-circle ${color?.code} p-3`}
                  type="checkbox"
                  value={color?.name}
                  onChange={(e) => handleColorChange(e)}
                  id="flexCheckDefault11"
                />
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

          {
            filterContent.size.map(size => {
                return <div className="form-check ms-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={size}
                  onChange={(e) => handleSizeChange(e)}
                  id="flexCheckDefault17"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault17">
                 {size}
                </label>
              </div>
            })
        }

        </div>
      </div>

      
      <button type="button" className="btn btn-danger" onClick={filterProducts}>
        Filtriraj
      </button>

    </aside>
  );
};

export default Sidebar;
