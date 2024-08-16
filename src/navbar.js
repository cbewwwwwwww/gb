import React, { useState } from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBCollapse } from 'mdb-react-ui-kit';
import Button from "react-bootstrap/Button";
// import { MDBIcon, MDBModal, MDBModalBody } from 'mdb-react-ui-kit';
import logoImage from './img/rseti.jpg';
// import { useNavigate } from 'react-router-dom';
import LoginPage from './login';


export default function Navbar() {
  
  const [openNav, setOpenNav] = useState(false);
  
  return (
    <div>
    <MDBNavbar expand='lg' light bgColor='light' style={{ padding: 5 }} className="fixed-top">
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>
          {/* <img src={logoImage} alt="Logo" style={{ maxHeight: '50px' }} />
           */}
           <span style={{ margin: '0 10px' }}> Gogul Builders</span>

        </MDBNavbarBrand>
        
      </MDBContainer>
    </MDBNavbar>

    </div>
  );
}
