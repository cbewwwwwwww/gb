import React from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';
import Logo from './img/logo.jpg'

export default function Footer() {
  return (

    <div class='contact-us'>
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      </section>

      <section className="">
        <div className="container text-center text-md-start ">
          <div className="row mt-3">
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <div className='logo' style={{}}>
                <img src={Logo} className='d-block w-100' alt='...' />
               </div>
               <div>
                <p></p>
               </div>
              <h6 className="text-uppercase text-center fw-bold mb-4">
                  Gogul Builders
              </h6>
              <div class="container p-4 pb-0">

  <section className="mb-6 ">
    
     
              <p><i className="fas fa-phone me-3"></i>  9842725230 / 9884920108</p>
     
    </section>
  </div>

             
            </div>
            

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Address:</h6>
              <p><MDBIcon fas icon="home" /> Pariyur Road, Gobichettipalayam</p>
          <p><i className="fas fa-location me-2"></i><a href='https://maps.app.goo.gl/6CnYt2BUr4TGquDc6'>Location</a></p>
              
            </div>
          </div>
        </div>
      </section>
      

      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright 
        <a className="text-reset fw-bold">  GOGUL Building Material Supplier</a>
      </div>
      
    </footer>
    
      </div>
  );
}
