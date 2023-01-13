import React from 'react'
import { useEffect, useState } from 'react' 
import { ProductCard } from '../../Components/ProductCard/ProductCard'


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export const ProductSlider = () => {
    // react Hook For State Handler
    const [products, setProducts] = useState(null);
    const [featured, setFeatured] = useState(null);
    const [discount, setDiscount] = useState(null);
    const [newProd, setNewProd] = useState(null);


    const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 990 },
    items: 4
  },
  smallDesktop: {
    breakpoint: { max: 990, min: 770 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 900, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

    function parseDate(input) {
        var parts = input.match(/(\d+)/g);
        // note parts[1]-1
        return new Date(parts[2], parts[1]-1, parts[0]);
    }

    useEffect(() => {
        // Fetch Function   
          fetch('/data/products.json',{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
            }).then(
            async res => {
                return res.json();
            }).then(function(data){
                setProducts(data);
                let tempData = [...data];
                
                // eslint-disable-next-line eqeqeq
                let disc = tempData.filter(product  => product.discount == 1);
                setDiscount(disc);

                // eslint-disable-next-line eqeqeq
                let feat = tempData.filter(product  => product.featured == 1);
                setFeatured(feat);

                let newProdTemp = tempData;
                newProdTemp.sort(function(a,b){
                    // Turn your strings into dates, and then subtract them
                    // to get a value that is either negative, positive, or zero.
                    var c = parseDate(a.createdAt);
                    var d = parseDate(b.createdAt);
                    return d-c;
                });
                newProdTemp.slice(0, 3)
                setNewProd(newProdTemp);
                loadNewSLider();
                loadFeatSLider();
            }).catch(
                function(err){
                    console.log(err, ' error')
                }
            )
    }, []);

    const loadFeatSLider = () => {
        setTimeout(async() => {
            await document.querySelector('#feat-nav-link').click();
        }, 3000);
    }
    const loadNewSLider = async () => {
        setTimeout(async() => {
            await document.querySelector('#new-nav-link').click();
        }, 1000);
    }

  return (
    <div className="container mb-5">
            <ul className="nav nav-pills justify-content-center mb-3">
                <li className="nav-item">
                    <a className="nav-link active" id="feat-nav-link" data-bs-toggle="pill" href="#featured" >Najtraženije</a>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="pill" href="#pro">Sniženo</a>
                </li> */}
                <li className="nav-item">
                    <a className="nav-link" id="new-nav-link" data-bs-toggle="pill" href="#new" >Novo</a>
                </li>
            </ul>
            <hr />
            <div className="tab-content">
                <div className="tab-pane container active" id="featured">
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        // removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass=""
                        itemAriaLabel="se"
                        className='col-12'
                        >
                        {featured ? featured.map( product => {
                            return (<ProductCard key={product.id} 
                            data-index={product.id}
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
                            discountPrice={product.discountPrice}/>)
                        }) : ""}
                    </Carousel>
                </div>
                {/* <div className="tab-pane container" id="pro">
                    <Carousel swipeable={true}
                        draggable={true}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        // removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass=""
                        itemAriaLabel="lg"
                        >
                        {discount ? discount.map( product => {
                            return (<ProductCard key={product.id} 
                            data-index={product.id}
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
                            discountPrice={product.discountPrice}/>)
                        }) : ""}
                    </Carousel>
                </div> */}
                <div className="tab-pane container active" id="new">
                    <Carousel swipeable={false}
                        draggable={true}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlaySpeed={1000}
                        keyBoardControl={false}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        // removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass=""
                        itemAriaLabel="as"
                        >
                        {newProd ? newProd.map( product => {
                            return (<ProductCard key={product.id} 
                            data-index={product.id}
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
                            discountPrice={product.discountPrice}/>)
                        }) : ""}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
