import React from 'react'

const Floorplan = () => {
  return (
    <div className='container mt-5' id='Floorplan'>
      <div className='row mb-3'>
        <h2 className='text-center'><span style={{ width: "10%", borderBottom: "2px double #3a5c5c" }}>Floor Plans</span></h2>
      </div>
      <div className='row'>
        <div className='col-md-5 background1 mt-5' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className='row' style={{ zIndex: '1' }} >
            <h3 data-bs-toggle="modal" data-bs-target="#exampleModal">Click to view Master Plan</h3>
          </div>
        </div>
        <div className='col-md-2'></div>
        <div className='col-md-5 background2 mt-5' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className='row' style={{ zIndex: '1' }} >
            <h3 data-bs-toggle="modal" data-bs-target="#exampleModal">Click to view Floor Plan</h3>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Floorplan
