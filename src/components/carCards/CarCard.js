import { useState } from 'react'
import React from 'react'
import caricon from '../../images/Car.png'
import gas from '../../images/gas-station.png'
import people from '../../images/profile-2user.png'
import { RecentDiv } from './Style'
import Heart from "react-animated-heart";


const CarCard = ({ carName, image, carType, price, capacity, gasoline, gearType }) => {
    const [isClick, setClick] = useState(false);

    return (
        <>
           
                <div className="col-lg-3 col-md-6 col-12">
                <RecentDiv>
                    <div className="card  mb-lg-0 mb-4 mt-3">
                        <div className="card-body">
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <p className='car-name'>{carName} <br /><span className='car-type mt-0'>{carType}</span></p>
                                </div>
                                <div className='heart'>
                                <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
                                </div>
                            </div>
                            <div className='text-center car-pic'>
                                <img src={image} className='img-fluid h-100' alt="" />
                            </div>
                            <div className='d-flex justify-content-between mt-4'>
                                <div className='d-flex'>
                                    <img src={gas} className='h-50' alt="" />
                                    <p className='ms-1 car-feature-text'>{gasoline}</p>
                                </div>
                                <div className='d-flex'>
                                    <img src={caricon} className='h-50' alt="" />
                                    <p className='ms-1 car-feature-text'>{gearType}</p>
                                </div>
                                <div className='d-flex'>
                                    <img src={people} className='h-50' alt="" />
                                    <p className='ms-1 car-feature-text'>{capacity}</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between mt-3'>
                                <div>
                                    <p className='pkr'>pkr.<span className='price'>{price}</span><span className='day'>day</span></p>
                                </div>
                                <div>
                                    <button className='btn btn-primary'>Rent Now</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    </RecentDiv>
                </div>
           

        </>
    )
}

export default CarCard