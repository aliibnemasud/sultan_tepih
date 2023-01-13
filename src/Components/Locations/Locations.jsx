import React from 'react'
import { LocationCard } from './LocationCard'

export const Locations = () => {
  return (
    <div className="container mt-5 text-center">
          <div className="row " id="location-set">
              <div className="col-lg-6">
                  <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1xTQm3nX2VkM0RP9C6BwchII1leflieQ&ehbc=2E312F" width="100%" height="580px" ></iframe>
              </div>
              <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column "> 
                  <div className="col-2 w-100">
                      <img src="../img/lines.png" className="img-fluid"  id="lines" alt="" />
                  </div>
                  <div className="col-8 my-4 text-center">
                      <h3 className="mb-4">Visit Us on Our Locations</h3>
                      <p> Best way to buy a carpet is obviously to see the carpet in person and feel the texture of it <br /> Come to our shop to feel the real experience with our professional workers</p>
                  </div>
                  <div className="col-2 w-100 " >
                        <img src="../img/linesrev.png" className="img-fluid" id="linesrev" alt="" />
                  </div>
                  
              
              </div>
          </div>
    </div>
  )
}
