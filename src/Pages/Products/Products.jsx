import React, { useCallback, useRef } from 'react'
import { useEffect, useState } from 'react' 
import { ProductCard } from '../../Components/ProductCard/ProductCard';
import MultiRangeSlider from '../../Components/MultiRangeSlider/MultiRangeSlider'
export const Products = ({category, collection}) => {
  const [products, setProducts] = useState(null);
  const [productCount, setProductCount] = useState(0);
  const [categoryCheck, setCategoryCheck] = useState([]);
  const [collectionCheck, setCollectionCheck] = useState([]);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);

  
    function parseDate(input) {
        var parts = input.match(/(\d+)/g);
        // note parts[1]-1
        return new Date(parts[2], parts[1]-1, parts[0]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const sortProducts = (productsData) => {

        if(productsData == null){
            if(products != null){
                productsData = [...products];
            }
        }
        // console.log('sort', productsData);
        let selected = document.querySelector('#sorting').value;
        // eslint-disable-next-line eqeqeq
        if(selected == 0) {
            productsData.sort((a,b) => {
                var c = parseDate(a.createdAt);
                var d = parseDate(b.createdAt);
                return d-c;
            });
        // eslint-disable-next-line eqeqeq
        }else if(selected == 1){
            productsData.sort((a,b) => {
                var c = parseDate(a.createdAt);
                var d = parseDate(b.createdAt);
                return c-d;
            });
            // eslint-disable-next-line eqeqeq
            }
        //     else if(selected == 2){
        //         productsData.sort((a,b) => {
        //             let c, d;
        //             // eslint-disable-next-line eqeqeq
        //             if(a.discount == 1){
        //                 c = a.discountPrice;
        //             }else {
        //                 c = a.price;
        //             }
        //             // eslint-disable-next-line eqeqeq
        //             if(b.discount == 1){
        //                 d = b.discountPrice;
        //             }else {
        //                 d = b.price;
        //             }
                    
        //             return c - d;
        //         });
        //     // eslint-disable-next-line eqeqeq
        //     }else if (selected == 3){
        //         productsData.sort((a,b) => {
        //             let c, d;
        //             // eslint-disable-next-line eqeqeq
        //             if(a.discount == 1){
        //                 c = a.discountPrice;
        //             }else {
        //                 c = a.price;
        //             }
        //             // eslint-disable-next-line eqeqeq
        //             if(b.discount == 1){
        //                 d = b.discountPrice;
        //             }else {
        //                 d = b.price;
        //             }
                    
        //             return d - c;
        //         });
        // }
        setProductsF(productsData);
    }

    useEffect(() => {
        // console.log('');
    }, [products, sortProducts])

    const setProductsF = async(prod) =>{
        await setProducts(prod);
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
            }).then(async (data) =>{
                // store Data in State Data Variable
                await setProductsF(data);
                let p;

                if(category !== ""){
                    p = data.filter(product  => product.category === category);
                } else if(collection !== ""){
                    p = data.filter(product  => product.collection === collection);
                }else {
                    p = data;
                }
                await setProductsF(p);
                setProductCount(p.length);
                // console.log('get', products);
            })
            .then(() => {
                // console.log('get sort', products);
                // setProductCount(products.length);
                sortProducts(products);
            })
            .catch(
            function(err){
                console.log(err, ' error')
            }
            );
    }, [category, collection, setProducts]);

  const filterProducts = () => {
    // Fetch Function   
    fetch('/data/products.json',{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        }).then(
        async res => {
            return res.json();
        }).then(async (data) =>{
            setProducts(data);
            let tempData = [...data];
            let tempProd = [];

            if(categoryCheck.length > 0){
                let temp = [];

                if(categoryCheck.length <= 1){
                    let p = tempData.filter(product  => product.category === categoryCheck[0]);
                    tempProd = [...tempProd, ...p];
                }else {
                    categoryCheck.forEach(categoryItem => {
                        tempData = [...data];
                        let p = tempData.filter(product  => product.category === categoryItem);
                        temp = [...temp, ...p];
                    });
                    tempProd = [...tempProd, ...temp];
                }
            }

            if(collectionCheck.length > 0){
                let temp = [];

                if(collectionCheck.length <= 1){
                    let p = tempData.filter(product  => product.collection === collectionCheck[0]);
                    tempProd = [...tempProd, ...p];
                }else {
                    collectionCheck.forEach(collectionItem => {
                        tempData = [...data];
                        let p = tempData.filter(product  => product.collection === collectionItem);
                        temp = [...temp, ...p];
                    });
                    tempProd = [...tempProd, ...temp];
                }
            }

            if(color.length > 0){
                // let temp = [];
                console.log(color.length);
                if(color.length <= 1){
                    let p = tempData.filter(product  => product.colors.includes(color[0]));
                    tempProd = [...tempProd, ...p];
                }else {
                    tempData = [...data];
                    color.forEach(colorItem => {
                        let p = tempData.filter(product  => product.colors.includes(colorItem));
                        console.log(tempProd);
                        // temp = [...temp, ...p];
                        tempProd = [...tempProd, ...p];
                    });
                }
            }

            if(size.length > 0){
                let temp = [];

                if(size.length <= 1){
                    let p = tempData.filter(product  => product.sizes.includes(size[0]));
                    tempProd = [...tempProd, ...p];
                }else {
                    size.forEach(sizeItem => {
                        tempData = [...data];
                        let p = tempData.filter(product  => product.sizes.includes(sizeItem));
                        temp = [...temp, ...p];
                    });
                    tempProd = [...tempProd, ...temp];
                }
            }

            if(tempProd.length <= 0 && size.length <= 0 && color.length <= 0 && collectionCheck.length <= 0 && categoryCheck.length <= 0) {
                tempProd = [...data];
            }

            // let minPrice = document.getElementById('minPrice').value;
            // let maxPrice = document.getElementById('maxPrice').value;
            // if(minPrice !== null && maxPrice !== null){
            //     tempProd = tempProd.filter(product => {
            //         if(product.discount == 1){
            //             return parseInt(product.discountPrice) >= minPrice;
            //         }else {
            //             return parseInt(product.price) >= minPrice;
            //         }
            //     });

            //     tempProd = tempProd.filter(product => {
            //         if(product.discount == 1){
            //             return parseInt(product.discountPrice) <= maxPrice;
            //         }else {
            //             return parseInt(product.price) <= maxPrice;
            //         }
            //     });
            // }

            // Remove duplicates
            let uniqueProd = [];
            tempProd.forEach((prod) => {
                if (!uniqueProd.includes(prod)) {
                    uniqueProd.push(prod);
                }
            });
            setProductCount(uniqueProd.length);
            setProducts(uniqueProd);
            sortProducts(uniqueProd);
        })
        .catch(
          function(err){
              console.log(err, ' error')
          }
        );
    };
  
  // eslint-disable-next-line no-extend-native
    Array.prototype.removeByValue = function (val) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] === val) {
            this.splice(i, 1);
            i--;
            }
        }
        return this;
    }

    const handleCategoryChange = (e) => {
        if(e.target.checked === true) {
            let temp = [ ...categoryCheck ];
            if(!temp.includes(e.target.value, 0)){
                temp.push(e.target.value);
                setCategoryCheck(temp);
            }else {
                return false;
            }
        }else {
            let temp = [ ...categoryCheck ];
            if(temp.includes(e.target.value, 0)){
                temp.removeByValue(e.target.value);
                setCategoryCheck(temp);
            }else {
                return false;
            }
        }
    }; 

    const handleCollectionChange = (e) => {
        if(e.target.checked === true) {
            let temp = [ ...collectionCheck ];
            if(!temp.includes(e.target.value, 0)){
                temp.push(e.target.value);
                setCollectionCheck(temp);
            }else {
                return false;
            }
        }else {
            let temp = [ ...collectionCheck ];
            if(temp.includes(e.target.value, 0)){
                temp.removeByValue(e.target.value);
                setCollectionCheck(temp);
            }else {
                return false;
            }
        }
    }; 

    const handleColorChange = (e) => {
        if(e.target.checked === true) {
            let temp = [ ...color ];
            if(!temp.includes(e.target.value, 0)){
                temp.push(e.target.value);
                setColor(temp);
            }else {
                return false;
            }
        }else {
            let temp = [ ...color ];
            if(temp.includes(e.target.value, 0)){
                temp.removeByValue(e.target.value);
                setColor(temp);
            }else {
                return false;
            }
        }
    }; 

    const handleSizeChange = (e) => {
        if(e.target.checked === true) {
            let temp = [ ...size ];
            if(!temp.includes(e.target.value, 0)){
                temp.push(e.target.value);
                setSize(temp);
            }else {
                return false;
            }
        }else {
            let temp = [ ...size ];
            if(temp.includes(e.target.value, 0)){
                temp.removeByValue(e.target.value);
                setSize(temp);
            }else {
                return false;
            }
        }
    }; 

    let min = 0;
    let max = 5000;
    const maxValRef = useRef(max);
    const range = useRef(null);

    // const handlePriceLowChange = (e) => {
    //     document.getElementById('priceLow').value = e.target.value;
    //     document.getElementById("minPrice").value = e.target.value;
    //     const value = Math.min(Number(e.target.value), e.target.value - 1);
    //     const minPercent = getPercent(e.target.value);
    //     const maxPercent = getPercent(e.target.value);

    //     if (range.current) {
    //         range.current.style.left = `${minPercent}%`;
    //         range.current.style.width = `${maxPercent - minPercent}%`;
    //     }
    //     document.querySelector('.slider__left-value').innerHTML = e.target.value;
    // }; 
    // const handlePriceHighChange = (e) => {
    //     document.getElementById('priceHigh').value = e.target.value;
    //     document.getElementById("maxPrice").value = e.target.value;

    //     const value = Math.min(Number(e.target.value), max - 1);
    //     const minPercent = getPercent(e.target.value);
    //     const maxPercent = getPercent(e.target.value);

    //     if (range.current) {
    //         range.current.style.left = `${minPercent}%`;
    //         range.current.style.width = `${maxPercent - minPercent}%`;
    //     }
        
    //     document.querySelector('.slider__right-value').innerHTML = e.target.value;
    // }; 

    // Convert to percentage
    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

  return (
    <>
        <div className="col-12 row mt-4 text-start ps-lg-2 ps-md-1 ps-0 me-0">
            <div className="col-12 col-md-2 border-end mt-5 ps-lg-4 ps-md-1 ps-sm-5 ps-4"> 
                {/* <!-- CATEGORY  --> */}
                <div>
                    <h4 className="mb-2 mt-4">Kategorije</h4>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="DNEVNI BORAVAK" onChange={e => handleCategoryChange(e)} id="flexCheckDefault1"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault1">
                            DNEVNI BORAVAK
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="KUHINJA" onChange={e => handleCategoryChange(e)} id="flexCheckChecked2" />
                        <label className="form-check-label" htmlFor="flexCheckChecked2">
                            KUHINJA
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="SPAVAĆA SOBA" onChange={e => handleCategoryChange(e)} id="flexCheckChecked3" />
                        <label className="form-check-label" htmlFor="flexCheckChecked3">
                            SPAVAĆA SOBA
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="KUPATILO" onChange={e => handleCategoryChange(e)} id="flexCheckChecked4" />
                        <label className="form-check-label" htmlFor="flexCheckChecked4">
                            KUPATILO
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="HODNIK" onChange={e => handleCategoryChange(e)} id="flexCheckChecked5" />
                        <label className="form-check-label" htmlFor="flexCheckChecked5">
                            HODNIK
                        </label>
                    </div>
                </div>
                {/* <!-- CATEGORY END --> */}
                {/* <!-- COLLECTION --> */}
                <div>
                    <h4 className="mt-4 mb-2">Kolekcije</h4>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="OPERA" onChange={e => handleCollectionChange(e)} id="flexCheckDefault6"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault6">
                            OPERA
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="MODERN COLLECTION" onChange={e => handleCollectionChange(e)} id="flexCheckChecked7" />
                        <label className="form-check-label" htmlFor="flexCheckChecked7">
                            MODERN COLLECTION
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="DIZAYN" onChange={e => handleCollectionChange(e)} id="flexCheckChecked8" />
                        <label className="form-check-label" htmlFor="flexCheckChecked8">
                            DIZAYN
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="PLAZA" onChange={e => handleCollectionChange(e)} id="flexCheckChecked9" />
                        <label className="form-check-label" htmlFor="flexCheckChecked9">
                            PLAZA
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="ŠPAGASTI" onChange={e => handleCollectionChange(e)} id="flexCheckChecked10" />
                        <label className="form-check-label" htmlFor="flexCheckChecked10">
                            ŠPAGASTI
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="BAMBOO" onChange={e => handleCollectionChange(e)} id="flexCheckChecked10" />
                        <label className="form-check-label" htmlFor="flexCheckChecked10">
                            BAMBOO
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="WENICE" onChange={e => handleCollectionChange(e)} id="flexCheckChecked10" />
                        <label className="form-check-label" htmlFor="flexCheckChecked10">
                            WENICE
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="FLORA" onChange={e => handleCollectionChange(e)} id="flexCheckChecked10" />
                        <label className="form-check-label" htmlFor="flexCheckChecked10">
                            FLORA
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="HEREKE" onChange={e => handleCollectionChange(e)} id="flexCheckChecked10" />
                        <label className="form-check-label" htmlFor="flexCheckChecked10">
                            HEREKE
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="LOTUS" onChange={e => handleCollectionChange(e)} id="flexCheckChecked10" />
                        <label className="form-check-label" htmlFor="flexCheckChecked10">
                            LOTUS
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="SOFT" onChange={e => handleCollectionChange(e)} id="flexCheckChecked10" />
                        <label className="form-check-label" htmlFor="flexCheckChecked10">
                            SOFT
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="IRAN COLLECTION" onChange={e => handleCollectionChange(e)} id="flexCheckChecked10" />
                        <label className="form-check-label" htmlFor="flexCheckChecked10">
                            IRAN COLLECTION
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="ZARA" onChange={e => handleCollectionChange(e)} id="flexCheckChecked10" />
                        <label className="form-check-label" htmlFor="flexCheckChecked10">
                            ZARA
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="SARAJ COLLECTION" onChange={e => handleCollectionChange(e)} id="flexCheckChecked10" />
                        <label className="form-check-label" htmlFor="flexCheckChecked10">
                            SARAJ COLLECTION
                        </label>
                    </div>
                </div>
                {/* <div>
                    <div className="d-flex flex-column justify-content-center align-items-center flex-lg-row mt-4">
                        <input className="form-control form-control d-inline" type="text" placeholder="KM" aria-label=".form-control example" onChange={ e => handlePriceLowChange(e) } id="minPrice" />
                        <span className='ps-2'>Do</span>
                        <input className="form-control form-control d-inline ms-2" type="text" placeholder="KM" aria-label=".form-control example" onChange={ e => handlePriceHighChange(e) } id="maxPrice" />

                    </div>

                    <MultiRangeSlider
                        min={0}
                        max={5000}
                    />
                </div> */}
                <div className="checkbox mt-5">
                    <h3 className=" " >Boja</h3>
                    <ul className="list-unstyled">
                        <li className="d-inline m-1 ">
                            <input className="form-check-input rounded-circle bg-dark p-3 " type="checkbox" value="black" onChange={e => handleColorChange(e)} id="flexCheckDefault11" />
                        </li>
                        <li className="d-inline m-1 ">
                            <input className="form-check-input rounded-circle bg-primary p-3 " type="checkbox" value="blue" onChange={e => handleColorChange(e)} id="flexCheckDefault12" />
                        </li>
                        <li className="d-inline m-1 ">
                            <input className="form-check-input rounded-circle bg-danger p-3 " type="checkbox" value="red" onChange={e => handleColorChange(e)} id="flexCheckDefault13" />
                        </li>
                        <li className="d-inline m-1 ">
                            <input className="form-check-input rounded-circle bg-warning p-3 " type="checkbox" value="yellow" onChange={e => handleColorChange(e)} id="flexCheckDefault14" />
                        </li>
                        <li className="d-inline m-1 ">
                            <input className="form-check-input rounded-circle bg-success p-3 " type="checkbox" value="green" onChange={e => handleColorChange(e)} id="flexCheckDefault15" />
                        </li>
                        <li className="d-inline m-1 ">
                            <input className="form-check-input rounded-circle bg-secondary p-3 " type="checkbox" value="grey" onChange={e => handleColorChange(e)} id="flexCheckDefault16" />
                        </li>
                    </ul>
                    
                </div>
                {/* <div className="sizes "> */}
                <div className='mb-5 mt-4'>
                    <h4 className="mb-2 mt-4">Veličina</h4>
                    <div className="col-12 ps-lg-2 ps-md-1 ps-1 d-flex flex-row flex-wrap"> 
                    {/* <!-- SIZES --> */}
                        <div className="form-check ms-3">
                            <input className="form-check-input" type="checkbox" value="115x110" onChange={e => handleSizeChange(e)} id="flexCheckDefault17"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault17">
                                115x110
                            </label>
                        </div>
                        <div className="form-check ms-3">
                            <input className="form-check-input" type="checkbox" value="115x75" onChange={e => handleSizeChange(e)} id="flexCheckDefault18"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault18">
                                115x75
                            </label>
                        </div>
                        <div className="form-check ms-3">
                            <input className="form-check-input" type="checkbox" value="110x110" onChange={e => handleSizeChange(e)} id="flexCheckDefault19"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault19">
                                110x110
                            </label>
                        </div>
                    </div>
                </div>
            
                    {/* <h3>Choose By Size</h3>
                    <div className="my-3">
                        <button type="button" className="btn btn-outline-secondary me-2">S</button>
                        <button type="button" className="btn btn-outline-secondary me-2">M</button>
                        <button type="button" className="btn btn-outline-secondary me-2">L</button>
                    </div> */}
                    {/* <div>
                        <label className="size-label"> 
                            <input type="checkbox" className="invisible-checkbox"> 
                            <span className="checkbox-border">S</span>
                        </label>
                    
                    </div> */}
                {/* </div> */}
                <button type="button" className="btn btn-danger" onClick={filterProducts}>Filtriraj</button>
            </div>
            <div className="col-md-10 pe-0">  
                <h3 className="text-start">Svi Proizvodi</h3>
                <div className="d-flex justify-content-between ps-3">
                    <span className="text-muted">{productCount} Proizvoda</span>
                    <select className="form-select w-25 me-4" aria-label="Default select example" id="sorting" onChange={() =>sortProducts()}>
                        <option defaultValue value="0" onClick={() =>sortProducts()}>Najnoviji Proizvodi</option>
                        <option value="1" onClick={() =>sortProducts()}>Najstariji Proizvodi</option>
                        {/* <option value="2" onClick={() =>sortProducts()}>Najniža Cijena</option>
                        <option value="3" onClick={() =>sortProducts()}>Najviša Cijena</option> */}
                        {/* <option value="3">Most Sellers</option>
                        <option value="4">Latest Products</option>
                        <option value="6">% Products</option> */}
                    </select>
                </div>
                <div className="col-12 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 p-4 mt-4">
                    {products ? products.map( product => {
                    return <ProductCard key={product.id} 
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
                        code={product.code}/> 
                    }) : "Trenutno nemamo proizvode koje ste tražili"}
                </div>
            </div>
        </div>
    </>
  )
}
