import React, { useState } from 'react'
import axios from 'axios';


const About = () => {
  const [loader, setLoader] = useState(false);
  const [input, setinput] = useState({});
  const formvalue = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  }

  const submitform = (event) => {
    event.preventDefault();
    const data_to = { name: input.name, email: input.email, phone: input.phone }
    console.log(data_to.name);
    if (input.name === undefined || input.phone === undefined || input.email === undefined) {
      alert("Kindly fill all the details");
    } else {
      setLoader(true);
      axios.post("http://localhost:0080/cbsbuilderapi/contact_popup.php", data_to).then((response) => {
        alert(response.data.result);
        setLoader(false);
        window.open('https://drive.google.com/file/d/1HJdtWyO19_2PeV17iMyWETKS3iYw_I8M/view?usp=drive_link', '_blank');
       
      });

    }
  }

  return (
    <div className='container' id="About">
      <div className='row'>
        <h2 className='text-center'><span style={{ width: "10%", borderBottom: "2px double #3a5c5c" }}>About Us</span></h2>
      </div>
      <div className='row'>
        <div className='col-md-5'><img src='./Aboutus.png' alt='cbs_building' style={{ width: "100%" }}></img></div>
        <div className='col-md-7 '>
          <div className='container'>
            <div className='row'><p>
              At CBS, a family-run business with over 50 years of real estate history, the new generation is at the helm, bringing fresh energy and ideas to luxury builder floors in Gurgaon. Our goal is simple: to redefine luxury living. With deep roots in the industry and guided by values like dedication, honesty, and simplicity, we're not just building homes; we're crafting lifestyles. Our approach is straightforward - we aim to deliver unparalleled luxury in every floor we construct, ensuring our customers receive not just a home, but a space that holds lasting value. CBS stands out by focusing on what matters most: creating luxury living spaces that you'll be proud to call home.
            </p>
            </div>
            <div className='row'>
              <div className='col-md-5 col-6'>
                <button className='btn buttoncbs' data-bs-toggle="modal" data-bs-target="#exampleModal">Download Brochure</button>
              </div>
              <div className='col-md-5 col-5'>
                <button className='btn buttoncbs' style={{ width: "100px" }} data-bs-toggle="modal" data-bs-target="#exampleModal">Call Now!</button>
              </div>
            </div>
          </div>
        </div>
      </div>










      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: "#3a5c5c", color: "white" }}>
              <h1 className="modal-title fs-5" id="exampleModalLabel">Get Best Offer</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {
                loader ? <div className='d-flex justify-content-center align-items-center'>
                  <div class="spinner-grow" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div> : <form >
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Your Full Name</label>
                    <input type="text" onChange={formvalue} className="form-control" id='name' name="name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" onChange={formvalue} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" >Your Phone Number</label>
                    <input type="number" onChange={formvalue} className="form-control" id="exampleInputPassword1" name="phone" />
                  </div>

                </form>
              }
            </div>
            <div className="modal-footer">
              <button type="button" className="btn buttoncbs" style={{ backgroundColor: "red", width: "70px" }} data-bs-dismiss="modal">Close</button>
              <button type="submit" className="btn buttoncbs" onClick={submitform} style={{ width: "200px" }}>Download Brochure</button>
            </div>
          </div>
        </div>
      </div>
    </div>





  )
}

export default About
