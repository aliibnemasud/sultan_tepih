import React from 'react'

export const OldProductCard = ({id, price, title, desc, img, colors, category, featured, discount, discountPrice}) => {
  return (
    <div className="card mb-3 shadow">
        <img src={img[0]} className="card-img-top img-fluid" alt={title} />
        
        <div className="card-body">
            <h5 className="hard-title align-self-center">{title}</h5>
            {
                discount == "0" ? 
                <p className="card-text">{price[0]}KM</p> : 
                <>
                <p className="m-0 card-text red-text"><del>{Math.ceil(price[0] / (1 - 0.1))}KM</del></p>
                <p className="card-text">{price[0]}KM</p>
                </>
            }
            <a href={`/product-details/${id}`} className="btn btn-danger ">Detaljno</a>
        </div>
    </div> 
  )
}
