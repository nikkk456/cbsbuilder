import React from 'react'

const Footer = () => {
  return (
    <div className='container' style={{backgroundColor:"#3a5c5c", color:"white", maxWidth:"none", padding:"30px"}}>
      <div className='row'>
        <div className='col-md-6'>
          <div className='row'>
            <h3>Contact US</h3>
          </div>
          <div className='row'>
            <div className='col-md-8'><p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg> AnantRaj Estate, Sector-63A, Gurugram, Kadarpur, Haryana 122102</p></div>
          </div>
          <div className='row'>
            <div className='col-md-8'><p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
            </svg> +91 8168999354</p></div>
          </div>
          <div className='row'>
            <div className='col-md-8'><p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg> luxurycbs45@gmail.com</p></div>
          </div>
          <div className='row'>
            <h3>Find Us</h3>
          </div>
          <div className='row'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224633.65547854218!2d77.091676!3d28.392062!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d223bc0000001%3A0xf099c45e4463aa4c!2sAnant%20Raj%20Estate%20Plots!5e0!3m2!1sen!2sus!4v1708538970431!5m2!1sen!2sus" width="400" height="300" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className='col-md-1'></div>
        <div className='col-md-5'>
          <div className='row mt-3'>
            <form style={{  borderRadius: "10px", padding: "15px", boxShadow:"#c7c0c0 5px 3px 8px 2px", backgroundColor:"white", color:"black" }}>
              <div className='mb-3 text-center'>
                <h3>Send us a message</h3>
                <p>Ask your queries here!</p>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Your Full Name</label>
                <input type="text" className="form-control" id='name' />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label" >Your Phone Number</label>
                <input type="number" className="form-control" id="exampleInputPassword1" />
              </div>
              <div className='mb-3'>
                <label htmlFor="exampleInputPassword1" className="form-label">Enter Your Query</label>
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
              </div>
              <button type="submit" className="btn buttoncbs" style={{width:"100px"}}>Send Query</button>
              <button type="button" className="btn buttoncbs mx-2" style={{width:"150px"}}>Book Free Site Visit</button>
            </form>
          </div>
                  
        </div>
      </div>
    </div>
  )
}

export default Footer
