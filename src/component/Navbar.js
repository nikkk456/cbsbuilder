import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/" style={{width:'10%'}}><img src='./logo.png' alt='logo' style={{width:'100%'}}/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#About">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#Gallery">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#Amenities">Amenities</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#Pricelist">Price</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#Floorplan">Floorplan</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#Location">Location Advantages</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
