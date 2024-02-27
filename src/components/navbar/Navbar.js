import React from 'react'
import logo from '../../images/logo.png'
import account from '../../images/account_circle.png'
import { ListItem, Nav } from './StyleNavbar'
import { Link, useLocation, useNavigate, } from 'react-router-dom'
import profile from '../../images/Profile.png'
import favour from '../../images/fav.png'
import exit from '../../images/Exit.png'
import histor from '../../images/history.png'
import dropimg from '../../images/dropimg.png'
import Swal from 'sweetalert2'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation();
  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/VehicleListing', name: 'Vehicle listing' },
    { path: '/contact-us', name: 'Contact Us' },
  ];

  const navigate = useNavigate()
  const data = (state) => {
    navigate('/profile', { state })
  };

  const favourite = useNavigate()
  const item = (state) => {
    favourite("/favourites", { state });
  }
  const history = useNavigate()
  const hist = (state) => {
    history("/history", { state })
  };
  const sign = useNavigate()
  const sain = (state) => {
    sign('/SignIn1', { state })
  }


  const shayan = () => {
    let noButtonClicked = false;

    Swal.fire({
      // icon: "question",
      title: "Logout",
      text: "Are you sure you want to logout?",
      showCancelButton: true,
      cancelButtonText: "No",
      confirmButtonText: "Yes",
      confirmButton: 'swal-button--confirm',
      cancelButton: 'swal-button--cancel',
      customClass: {
        confirmButton: 'swal-button--confirm',
        cancelButton: 'swal-button--cancel',
        modal: 'swal-modal',
        title: 'swal-title',
        text: 'swal-text',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/SignIn1";
      } else if (result.dismiss === Swal.DismissReason.cancel && !noButtonClicked) {
        window.location.href = "/Profile"
      }
    });
    Swal.getCancelButton().addEventListener('click', () => {
      noButtonClicked = true;
    });


  }

  return (
    <>
      <Nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand">
            <img src={logo} className='img-fluid me-5' alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navLinks.map((item, index) => {
                return <ListItem className='nav-item' active={item.path === location.pathname} key={index}>
                  <Link to={item.path} className='nav-link'>
                     <Nav className="nav-link active navBorder ms-lg-5 ms-0 mx-4 born" aria-current="page">{item.name}</Nav> 
                     </Link>
                </ListItem>
              })}
              
            </ul>
            <div className='d-flex'>

              <div className="dropdown ">
                <button className="drop dropdown-toggle" type="text" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={account} className='img-fluid h-100' alt="" />
                </button>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">


                  <div className='d-flex'>
                    <div className='ms-2'>
                      <img src={dropimg} alt="" />
                    </div>
                    <div className='ms-1'>
                      <p>Shayan</p>
                      <p className='dropSubPara'>Veiw and edit your profiles</p>
                    </div>
                  </div>

                  <li>
                    <div className='d-flex justify-content-start'>
                      <div className='ms-3'>
                        <img src={profile} className='dropImg' alt="" />
                      </div>
                      <div className=' ms-2 mt-1'>
                        <p className='dropPara nav-link' onClick={() => data()}>Profile</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='d-flex justify-content-start'>
                      <div className='ms-3'>
                        <img src={favour} className='dropImg' alt="" />
                      </div>
                      <div className=' ms-2 mt-1'>
                        <p className='dropPara nav-link' onClick={() => item()}>Favourite</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='d-flex justify-content-start'>
                      <div className='ms-3'>
                        <img src={histor} className='dropImg' alt="" />
                      </div>
                      <div className=' ms-2 mt-1 '>
                        <p className='dropPara nav-link' onClick={() => hist()}>History</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='d-flex justify-content-start'>
                      <div className='ms-3'>
                        <img src={exit} className='dropImg' alt="" />
                      </div>
                      <div className=' ms-2 mt-1'>
                        <p className='dropPara' onClick={() => shayan()}>LogOut</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <Nav className='mt-2 nav-link' onClick={() => sain()}>Sign In</Nav>
            </div>

          </div>
        </div>
      </Nav>

    </>
  )
}

export default Navbar