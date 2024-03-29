import React from "react";
import { Thumbnail } from "../../Components/Thumbnail/Thumbnail";
import { Locations } from "../../Components/Locations/Locations";
import { Collections } from "../../Components/Collections/Collections";
import { Services } from "../../Components/Services/Services";
import "react-multi-carousel/lib/styles.css";
import NewProductSlider from "../../Components/ProductSlider/NewProductSlider";
import { Navbar } from "../../Components/Navbar/Navbar";


const image = require('../../Images/product.jpg');

export const Home = () => {
  return (
    <div className="bg-image">
      <Navbar/>
      <Thumbnail />      
      {/* <Slider />       */}
      <section className="" id="main-beginning">
        <div className="col-12 row gx-0">
          <div className="col-6 bg-image" id="main-beginning-left"></div>
          <div className="col-6 bg-image" id="main-beginning-right"></div>
        </div>
      </section>      

      {/* <ProductSlider /> */}

      <NewProductSlider/>     

      <Services />
      <Collections />
      <Locations />     
    </div>
  );
};
