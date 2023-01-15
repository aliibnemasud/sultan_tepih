import React from 'react'

export const Footer = () => {
  return (
    <footer style={{backgroundColor: 'red'}} >
      <div className="row gx-0 bg-dark pt-5 pb-5" id="footer">
        <div className="col-4 d-flex align-items-center justify-content-center text-center" id="logo">
          <h1>SULTAN TEPIH</h1>
        </div>
        <div className="col-4 d-flex flex-column align-items-center" id="menu">
          <div className="d-flex flex-column align-items-start">
          <h3>MENI</h3>
            <a href="/">Pocetna</a>
            <a href="/products">Artikli</a>
            <a href="/about">O nama</a>
            <a href="/contact">Kontaktirajte nas</a>
          </div>
        </div>
        <div className="col-4 d-flex flex-column align-items-center" id="contactInfo">
          <div className="d-flex flex-column align-items-start">
            <h3>KONTAKT</h3>
            <p>Adresa: Test test br.25 Spionica</p>
            <p>Tel: +38761123123</p>
            <p>Fax: +38761123123</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
