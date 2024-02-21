import React from 'react'

const Location = () => {
    return (
        <div className='container mt-5' id='Location'>
            <div className='row'>
                <div className='col-md-7'>
                    <div className='row'>
                    <h2><span style={{width:"10%", borderBottom:"2px double #3a5c5c"}}>Location Advantages</span></h2>
                    </div>
                    <div className='row'>
                        <ul style={{padding:"20px"}}>
                            <li className='mt-1'>Proposed Existing Metro Station</li>
                            <li className='mt-1'>New 60/90 meter road connecting South Delhito Gurgaon Metro</li>
                            <li className='mt-1'>Adjacent to fully developed township</li>
                            <li className='mt-1'>15 min to IFFCO Chowk</li>
                            <li className='mt-1'>20 min from Delhi</li>
                            <li className='mt-1'>30 min away from Indra Gandhi International Airport</li>
                            <li className='mt-1'>Close approximately to Medicity, malls and schools</li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-5'>
                    <img src='./CBS Location.png' alt='CBS Loaction' style={{ width: "100%", borderRadius: "20px" }}></img>
                </div>
            </div>
        </div>
    )
}

export default Location
