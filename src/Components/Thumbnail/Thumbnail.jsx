import React from 'react'

export const Thumbnail = () => {
  return (
    <div className="header-bg mx-auto text-start">
        <div className="d-flex align-content-start flex-column justify-content-center h-100 pb-5 text-white ps-5">
            <h1 className="mb-2"> Choose The Best Carpet For You</h1>
            <div>
                <hr className="text-light w-25 mb-2" />
                <h2>Have you seen our latest carpets? <br /> Choose a carpet by your mood now!</h2>
            </div>
            <div className="my-4 me-4 d-grid gap-2 d-md-flex justify-content-md-start">
                <a href="/products" className="btn btn-light btn-lg">Products</a>
                <a href="/contact" className="btn btn-outline-light btn-lg">Contact Us</a>

            </div>
        </div>
    </div>
  )
}
