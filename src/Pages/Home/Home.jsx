import React from 'react'
import { Thumbnail } from '../../Components/Thumbnail/Thumbnail';
// import { CategoryCard } from '../../Components/CategoryCard/CategoryCard';
import { Locations } from '../../Components/Locations/Locations';
import { Collections } from '../../Components/Collections/Collections';
import { Services } from '../../Components/Services/Services';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductSlider } from '../../Components/ProductSlider/ProductSlider';


export const Home = () => {
    
  return (
    <div>
        <Thumbnail />
        <section className="mb-2" id="main-beginning">
            <div className="col-12 row gx-0">
                <div className="col-6" id="main-beginning-left"></div>
                <div className="col-6" id="main-beginning-right"></div>
            </div> 
        </section>
        
        <ProductSlider />
        <Services />
        <Collections />
        <Locations />
    </div>
  );
}
