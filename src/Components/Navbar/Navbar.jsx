import React from 'react'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark navbar-dark bg-dark shadow">
        <a href="/" className="navbar-brand fs-2"> SULTAN TEPIH</a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar_main">
            <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse" id="navbar_main">
            
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link">POCETNA</a>
                        </li>
                        <li className="nav-item">
                            <a href="/about" className="nav-link">O NAMA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/products">ARTIKLI</a>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/products" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                ARTIKLI
                              </a>
                            <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/products">Svi artikli</a></li>
                                <li><hr className="dropdown-divider"/></li>  
                                <li className='ps-2'><strong>Kategorije</strong></li>
                                <li><hr className="dropdown-divider"/></li>  
                                <li><a className="dropdown-item" href="/products/category/living-room">Dnevni boravak</a></li>
                                <li><a className="dropdown-item" href="/products/category/bedroom">Spavaća soba</a></li>
                                <li><a className="dropdown-item" href="/products/category/kitchen">Kuhinja</a></li>
                                <li><a className="dropdown-item" href="/products/category/bathroom">Kupatilo</a></li>
                                <li><a className="dropdown-item" href="/products/category/hall">Hodnik</a></li>
                            </ul>
                        </li> */}
                        <li className="nav-item">
                            <a href="/contact" className="nav-link">KONTAKT</a>
                        </li>
                    </ul>
               
            </div>
    </nav>
  )
}
