import React from 'react'

const Price = () => {
    return (
        <div className='container mt-3' id="Pricelist">
            <div className='row text-center mb-3'>
                <h2 className='text-center'><span style={{ width: "10%", borderBottom: "2px double #3a5c5c" }}>Price List</span></h2>
            </div>
            <div className='row'>
                <div className='col-md-4 justify-content-center'>
                    <center><h3>Type</h3>
                        <p>3 BHK Ultra Luxury Builder Floors</p></center>
                </div>
                <div className='col-md-4'>
                    <center><h3>Size</h3>
                        <p>Build Up Area: 1329 SQ. FT.<br />
                            Super Area: 2296 SQ.FT.</p></center>
                </div>
                <div className='col-md-4'>
                    <center><h3>Amount</h3>
                        <p>&#8377; 2.10 CR* Onwards</p>
                        <button className='btn buttoncbs' data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Price Breakdown
                        </button></center>
                </div>
            </div>
        </div>
    )
}

export default Price
