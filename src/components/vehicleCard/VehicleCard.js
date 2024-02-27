import React from 'react'
import caricon from '../../images/Car.png'
import gas from '../../images/gas-station.png'
import people from '../../images/profile-2user.png'
import { RecentDiv } from './Style'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Like from '../like/Like'

const VehicleCard = () => {
    const data = [
        { id:1,carName: 'Swift', carType: 'Sport', gasoline: '90L', gearType: 'Manual', capacity: '4 Person', pkr: '4000/', carImg: 'images/car (2).png', },
        { id:2,carName: 'Wagon-R', carType: 'Sport', gasoline: '80L', gearType: 'Manual', capacity: '4 Person', pkr: '3500/', carImg: 'images/wagon R.png', },
        { id:3,carName: 'Rolls-Royce', carType: 'Sedan', gasoline: '85L', gearType: 'Manual', capacity: '4 Person', pkr: '3000/', carImg: 'images/nisan.png', },
        { id:4,carName: 'Nissan GT-R', carType: 'Sport', gasoline: '90L', gearType: 'Manual', capacity: '4 Person', pkr: '5000/', carImg: 'images/roll.png', },
        { id:5,carName: 'Swift', carType: 'Sport', gasoline: '90L', gearType: 'Manual', capacity: '4 Person', pkr: '4000/', carImg: 'images/car (2).png', },
        { id:6,carName: 'Wagon-R', carType: 'Sport', gasoline: '80L', gearType: 'Manual', capacity: '4 Person', pkr: '3500/', carImg: 'images/wagon R.png', },
        { id:7,carName: 'Rolls-Royce', carType: 'Sedan', gasoline: '85L', gearType: 'Manual', capacity: '4 Person', pkr: '3000/', carImg: 'images/nisan.png', },
        { id:8,carName: 'Nissan GT-R', carType: 'Sport', gasoline: '90L', gearType: 'Manual', capacity: '4 Person', pkr: '5000/', carImg: 'images/roll.png',},
        { id:9,carName: 'Nissan GT-R', carType: 'Sport', gasoline: '90L', gearType: 'Manual', capacity: '4 Person', pkr: '5000/', carImg: 'images/roll.png', }

    ]

const navigate = useNavigate();
const goToRentPage = (state) => {
    navigate('/vehicle-listing2', {state});
}
    return (
        <>
            <RecentDiv>
                <div className="row">
                    {data.map((data, index) => (
                        <div className="col-lg-4 col-12 my-2">
                            <div className="card border-0 shadow  mb-lg-0 mb-4">
                                <div className="card-body">
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <p className='car-name'>{data.carName} <br /><span className='car-type mt-0'>{data.carType}</span></p>
                                        </div>

                                        <div>
                                            <Like/>
                                        </div>
                                       
                                    </div>
                                    <div className='text-center car-pic'>
                                        <img src={data.carImg} className='img-fluid h-100' alt="" />
                                    </div>
                                    <div onClick={() => goToRentPage(data)} style={{cursor:'pointer'}}>
                                    <div className='d-flex justify-content-between mt-4'  >
                                        <div className='d-flex'>
                                            <img src={gas} className='h-50' alt="" />
                                            <p className='ms-1 car-feature-text'>{data.gasoline}</p>
                                        </div>
                                        <div className='d-flex'>
                                            <img src={caricon} className='h-50' alt="" />
                                            <p className='ms-1 car-feature-text'>{data.gearType}</p>
                                        </div>
                                        <div className='d-flex'>
                                            <img src={people} className='h-50' alt="" />
                                            <p className='ms-1 car-feature-text'>{data.capacity}</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between mt-3'>
                                        <div>
                                            <p className='pkr'>pkr.<span className='price'>{data.pkr}</span><span className='day'>day</span></p>
                                        </div>
                                        <div>
                                            <button className='btn btn-primary'>Rent Now</button>
                                        </div>

                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </RecentDiv>
           
        </>
    )
}

export default VehicleCard
