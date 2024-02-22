import React from 'react'

const Gallery = () => {
  return (
    <div className='container my-5' id='Gallery'>
      <div className='row mb-3'>
      <h2 className='text-center'><span style={{width:"10%", borderBottom:"2px double #3a5c5c"}}>Gallery</span></h2>
      </div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className='container'>
              <div className='row' style={{padding:"10px"}}>
                <div className='col-md-4 col-4'>
                  <img src='./sliding/Slide1.jpg' alt='img1' style={{ width: "100%", borderRadius: "20px", boxShadow:"2px 3px 3px 2px #a9a4a4" }}></img>
                </div>
                <div className='col-md-4 col-4'>
                  <img src='./sliding/Slide2.jpg' alt='img2' style={{ width: "100%", borderRadius: "20px", boxShadow:"2px 3px 3px 2px #a9a4a4" }}></img>
                </div>
                <div className='col-md-4 col-4'>
                  <img src='./sliding/Slide3.jpg' alt='img3' style={{ width: "100%", borderRadius: "20px", boxShadow:"2px 3px 3px 2px #a9a4a4" }}></img>
                </div>

              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className='container'>
              <div className='row' style={{padding:"10px"}}>
                <div className='col-md-4 col-4'>
                  <img src='./sliding/Slide4.jpg' alt='img1' style={{ width: "100%", borderRadius: "20px", boxShadow:"2px 3px 3px 2px #a9a4a4" }}></img>
                </div>
                <div className='col-md-4 col-4'>
                  <img src='./sliding/Slide5.jpg' alt='img2' style={{ width: "100%", borderRadius: "20px", boxShadow:"2px 3px 3px 2px #a9a4a4" }}></img>
                </div>
                <div className='col-md-4 col-4'>
                  <img src='./sliding/Slide6.jpg' alt='img3' style={{ width: "100%", borderRadius: "20px", boxShadow:"2px 3px 3px 2px #a9a4a4" }}></img>
                </div>

              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className='container'>
              <div className='row' style={{padding:"10px"}}>
                <div className='col-md-4 col-4'>
                  <img src='./sliding/Slide7.jpg' alt='img1' style={{ width: "100%", borderRadius: "20px", boxShadow:"2px 3px 3px 2px #a9a4a4" }}></img>
                </div>
                <div className='col-md-4 col-4'>
                  <img src='./sliding/Slide8.jpg' alt='img2' style={{ width: "100%", borderRadius: "20px", boxShadow:"2px 3px 3px 2px #a9a4a4" }}></img>
                </div>
                <div className='col-md-4 col-4'>
                  <img src='./sliding/Slide9.jpg' alt='img3' style={{ width: "100%", borderRadius: "20px", boxShadow:"2px 3px 3px 2px #a9a4a4" }}></img>
                </div>

              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Gallery
