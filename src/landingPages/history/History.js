import React from 'react'
import { BackGround } from '../vehicle-listing2/Style'
import Navbar from '../../components/navbar/Navbar'
import { Div } from './Style'
import car from '../../images/historycar.png'
import gas from '../../images/gas-station.png'
import auto from '../../images/Car.png'
import capacity from '../../images/profile-2user.png'
import line from '../../images/Line.png'
import Footer from '../../components/footer/Footer'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import icon from '../../images/car-icon.png'
import { Ss } from 'react-flags-select'
import { useNavigate } from 'react-router-dom'

const History = () => {
    const [value, setValue] = React.useState(2);
    const navigate = useNavigate()
    const navigateVehicle = (state)=>{
      navigate ('/VehicleListing',{state})
    }
    return (
        <>
            <Navbar />
            <BackGround className='pb-5'>
                <Div className='container'>
                    <div className='text-center pt-4'>
                        <p className='history'>History</p>
                        <p className='history-para'>Here you can see the history of rent cars that you used</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className='d-flex'>
                                        <p className='nissan'>Nissan GT-R</p>
                                        <p className='sport ms-2'>Sport</p>
                                    </div>
                                    <div className='text-end'>



                                        {/* <!-- Button trigger modal 2 --> */}
                                        <button type="button" className="cancel" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                            Cancel
                                        </button>

                                        {/* <!-- Modal 2 --> */}
                                        <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog model ">
                                                <div className="modal-content">
                                                    <div className='text-center mt-5 p-3'>
                                                        <img src={icon} alt="" />
                                                        <p className='cancel-para mt-4'>Are you Sure you want to cancel this order. After Cancel this order you have 2 Warnings left after your account will Blocked</p>
                                                        <div className='mt-3'>
                                                            {/* Model button 3 */}
                                                            <button className='btn btn-primary px-5 rounded-5' data-bs-toggle="modal" data-bs-target="#exampleModal2">Yes</button>
                                                            <button className='btn btn-white text-primary px-5 rounded-5'>No</button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Modal 3 --> */}
                                        <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog model ">
                                                <div className="modal-content">
                                                    <div className='text-center mt-5 p-3'>
                                                        <img src={icon} alt="" />
                                                        <p className='cancel-para mt-4'>You can’t cancel Booking now. The time for cancel booking was 2hr before the car pick.</p>
                                                        <div className='mt-3'>
                                                            <button className='btn btn-primary px-5 rounded-5'>Yes</button>
                                                            <button className='btn btn-white text-primary px-5 rounded-5'>No</button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>





                                        {/* <!-- Button trigger modal 1 --> */}
                                        <button type="button" className="return" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Return
                                        </button>
                                        {/* <!-- Modal 1 --> */}
                                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className='text-center mt-5'>
                                                        <p className='thank'>Thank You ! </p>
                                                        <p className='rate'>Please rate your trip</p>

                                                        <Box
                                                            sx={{
                                                                '& > legend': { mt: 2 },
                                                            }}
                                                        />
                                                        <Rating
                                                            name="simple-controlled"
                                                            value={value}
                                                            onChange={(event, newValue) => {
                                                                setValue(newValue);
                                                            }}
                                                        />
                                                        <div >
                                                            <div class="form-group">

                                                                <textarea className="form-control joey" placeholder='' name="" id="" rows="5">Hey Joye! </textarea>
                                                            </div>
                                                            <div className='mb-3'>
                                                                <button className='modal-button1'>Send</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>




                                    </div>
                                    <div className="row">
                                        <div className="col-lg-5 col-md-6 col-12">
                                            <div>
                                                <img src={car} alt="" />
                                            </div>

                                            <div className='d-flex justify-content-between'>
                                                <div className='d-flex'>
                                                    <img src={gas} className='h-50' alt="" />
                                                    <p className='text'>80L</p>
                                                </div>
                                                <div className='d-flex ms-3'>
                                                    <img src={auto} className='h-50' alt="" />
                                                    <p className='text'>Manual</p>
                                                </div>
                                                <div className='d-flex ms-3'>
                                                    <img src={capacity} className='h-50' alt="" />
                                                    <p className='text'>4 Person</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-6 col-12">
                                            <div>
                                                <p className='history-heading'>London Bridge</p>
                                                <p className='point'>Pick Up Point</p>
                                            </div>
                                            <div className='d-flex'>

                                                <img src={line} className='line' alt="" />
                                                <h5 className='days'>14 Days</h5>
                                            </div>
                                            <div>
                                                <p className='history-heading'>King George</p>
                                                <p className='point'>Drop Off Point</p>
                                            </div>
                                            <div className='text-end'>
                                                <p className='price'>Price <span className='dollar'>$99.00</span><span className='price'> /day</span></p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="card mt-lg-0 mt-5">
                                <div className="card-body">
                                    <div className='d-flex'>
                                        <p className='nissan'>Nissan GT-R</p>
                                        <p className='sport ms-2'>Sport</p>
                                    </div>
                                    <div className='text-end'>
                                        {/* <!-- Button trigger modal 2 --> */}
                                        <button type="button" className="rent" onClick={()=>navigateVehicle()}>
                                            Re-Rent
                                        </button>






                                    </div>
                                    <div className="row">
                                        <div className="col-lg-5 col-md-6 col-12">
                                            <div>
                                                <img src={car} alt="" />
                                            </div>

                                            <div className='d-flex justify-content-between'>
                                                <div className='d-flex'>
                                                    <img src={gas} className='h-50' alt="" />
                                                    <p className='text'>80L</p>
                                                </div>
                                                <div className='d-flex ms-3'>
                                                    <img src={auto} className='h-50' alt="" />
                                                    <p className='text'>Manual</p>
                                                </div>
                                                <div className='d-flex ms-3'>
                                                    <img src={capacity} className='h-50' alt="" />
                                                    <p className='text'>4 Person</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-6 col-12">
                                            <div>
                                                <p className='history-heading'>London Bridge</p>
                                                <p className='point'>Pick Up Point</p>
                                            </div>
                                            <div className='d-flex'>

                                                <img src={line} alt="" className='line' />
                                                <h5 className='days'>14 Days</h5>
                                            </div>
                                            <div>
                                                <p className='history-heading'>King George</p>
                                                <p className='point'>Drop Off Point</p>
                                            </div>
                                            <div className='text-end'>
                                                <p className='price'>Price <span className='dollar'>$99.00</span><span className='price'> /day</span></p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </Div>
            </BackGround>
            <Footer />
        </>
    )
}

export default History
