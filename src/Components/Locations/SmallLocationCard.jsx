/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

export const SmallLocationCard = ({title, address, phone, email}) => {
  return (
    <div className="m-2 p-2 col-11 col-md-6 col-lg-5 col-xl-5 d-flex flex-row justify-content-between border shadow" style={{"background": "white"}}>
                <div className="col-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2833.337247797861!2d18.489036015802853!3d44.75353638859992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475c1e7ab02d8629%3A0x81e8e7c573cb4ef7!2sSULTAN%20TEPIH!5e0!3m2!1sen!2sba!4v1665338189606!5m2!1sen!2sba" 
                        width="100%" 
                        height="329" 
                        style={{"border":"0px"}} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className="col-5 text-end ">
                    <h3 className="text-center">{title}</h3>
                    <i className="fa-solid fa-location-dot text-danger "></i>
                    <h5 className="">Adresa:</h5>
                    <p className="mt-2">{address}</p>
                    <i className="fa-solid fa-phone text-danger "></i>
                    <h5 className="">Telefon:</h5>
                    <p className="mt-2">{phone}</p>
                    <i className="fa-sharp fa-solid fa-envelope text-danger "></i>
                    <h5 className="">E-mail:</h5>
                    <p className="mt-2">{email}</p>
                </div>   
            </div>
  )
}
