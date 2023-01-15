import React from 'react'
import { SmallThumbnail } from '../../Components/SmallThumbnail/SmallThumbnail'
import { useForm, ValidationError } from '@formspree/react';
import { SmallLocationCard } from '../../Components/Locations/SmallLocationCard';
import "./Contact.css"

export const Contact = () => {
  const [state, handleSubmit] = useForm("myyldape");

  return (
    <div id="bodyBg">
      <SmallThumbnail img={"./img/landing-carpet.jpg"}/>

      <form className="container text-start rounded p-5 my-5 border rounded" onSubmit={handleSubmit} style={{"background": "white"}}>
        <div className="form-table mt-3">
          <div className="container">
              <div className="col-xs-12 pb-3">
                  <h3 className="text-center">Kontaktirajte nas</h3>
                  <div className="row">
                      <div className="col-xs-12 col-sm-6">
                          <div className=" form-floating text-muted">
                              <input className="form-control" name="name" type="text" id="fullName"  placeholder="Ime i Prezime" required/>
                              <label htmlFor="fullName">Ime i Prezime</label>
                          </div>
                          <div className=" form-floating text-muted">
                              <input className="form-control"name="phone" type="tel" id="phoneNumber"  placeholder="Broj Telefona" required/>
                              <label htmlFor="phoneNumber">Broj Telefona</label>
                          </div>
                          <div className="form-floating text-muted">
                              <input className="form-control" name="email" type="email" id="email" placeholder="E-mail" required/>
                              <label htmlFor="email">E-Mail</label>
                          </div>
                      </div>
                      
                      <div className="col-xs-12 col-sm-6">
                          <div className="form-floating text-muted">
                              <textarea className="form-control" name="message" id="message" placeholder="Message" style={{"minHeight": "117px"}} required></textarea>
                              <label htmlFor="message">Poruka</label>
                          </div>
                          
                          <button className="btn btn-danger justify-content-center float-end" type="button">Pošalji</button>
                      
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </form>

      {/* <div className="container mt-5 mb-5 d-flex flex-column justify-content-center align-items-center">
        <h1>Kontaktirajte nas</h1>
        <hr className="mb-5 w-100" />

        <form className="col-6 text-start shadow" id="contact-form" onSubmit={handleSubmit}>
          <img className="img-fluid" src="./img/lines.png" alt="lines-img" id="linesImgTop" />
          <label className="col-12 mt-2" htmlFor="email">Ime i prezime:</label>
          <input className="col-12 mt-2" id="name" type="text" name="text"/>
          <label className="col-12 mt-2" htmlFor="email">Telefon:</label>
          <input className="col-12 mt-2" id="phone" type="phone" name="phone"/>
          <label className="col-12 mt-2" htmlFor="email">E-mail:</label>
          <input className="col-12 mt-2" id="email" type="email" name="email"/>
          <ValidationError className="col-12 mt-2" prefix="Email" field="email" errors={state.errors}/>
          <label className="col-12 mt-2" htmlFor="message">Poruka:</label>
          <textarea className="col-12 mt-2" id="message" name="message" />
          <ValidationError className="col-12 mt-2" prefix="Message" field="message" errors={state.errors}/>
          <button className="col-12 mt-2 btn-lg btn-submit" type="submit" disabled={state.submitting}>Pošalji</button>
          <img className="img-fluid" src="./img/lines.png" alt="lines-img" id="linesImg" />
        </form>
      </div> */}

        <div className="col-12 d-flex flex-row flex-wrap justify-content-center">
          <SmallLocationCard title={"Špionica"} address={"Špionica Centar 75350"} phone={"+38761108602"} email={"info@sultantepih.com"}/>
          <SmallLocationCard title={"Špionica"} address={"Špionica Centar 75350"} phone={"+38761108602"} email={"info@sultantepih.com"}/>
          <SmallLocationCard title={"Špionica"} address={"Špionica Centar 75350"} phone={"+38761108602"} email={"info@sultantepih.com"}/>
          <SmallLocationCard title={"Špionica"} address={"Špionica Centar 75350"} phone={"+38761108602"} email={"info@sultantepih.com"}/>
          <SmallLocationCard title={"Špionica"} address={"Špionica Centar 75350"} phone={"+38761108602"} email={"info@sultantepih.com"}/>
          <SmallLocationCard title={"Špionica"} address={"Špionica Centar 75350"} phone={"+38761108602"} email={"info@sultantepih.com"}/>
          <SmallLocationCard title={"Špionica"} address={"Špionica Centar 75350"} phone={"+38761108602"} email={"info@sultantepih.com"}/>
          <SmallLocationCard title={"Špionica"} address={"Špionica Centar 75350"} phone={"+38761108602"} email={"info@sultantepih.com"}/>
          <SmallLocationCard title={"Špionica"} address={"Špionica Centar 75350"} phone={"+38761108602"} email={"info@sultantepih.com"}/>
          <SmallLocationCard title={"Špionica"} address={"Špionica Centar 75350"} phone={"+38761108602"} email={"info@sultantepih.com"}/>
        </div>
    </div>
  )
}
