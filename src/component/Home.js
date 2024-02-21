import React from 'react'

const Home = () => {
    return (
        <div className='container'>
            <div className='row' style={{ height: "90vh" }} >
                <div className='col-md-6 d-flex flex-column justify-content-center align-items-center '>
                    <h1 className='text-center mb-3' style={{borderBottom:"2px double #3a5c5c"}}>
                        Luxury Builder Floors
                    </h1>
                    <h5 className='text-center'>
                        Elevate Your Lifestyle Embrace Unmatched Luxury with CBS Floors
                    </h5>
                    <h1 className='text-center'>Best Builder Floors in Gurgaon</h1>
                    <div className='row mt-3'>
                        <div className='col-md-6 col-6'>
                            <button className='btn buttoncbs' style={{width:"170px"}} data-bs-toggle="modal" data-bs-target="#exampleModal">Request Call Back</button>
                        </div>
                        <div className='col-md-6 col-6'>
                            <button className='btn buttoncbs' style={{width:"172px"}} data-bs-toggle="modal" data-bs-target="#exampleModal">Download Brochure</button>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 d-flex flex-column justify-content-center align-items-center text-center'>
                    <img src='./heroimage.png' alt='cbsbuilding' style={{ width: "100%" }}></img>
                </div>
            </div>

        </div>
    )
}

export default Home
