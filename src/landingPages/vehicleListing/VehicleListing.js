import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { BgColor } from './Style'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import VehicleCard from '../../components/vehicleCard/VehicleCard';
import Footer from '../../components/footer/Footer'
import { useState } from 'react';
import '../../App.css'


function valuetext(value) {
    return `${value}°C`;
}

const VehicleListing = () => {
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [priceRange, setPriceRange] = useState([2500, 15000]);
    const [registration, setRegistration] = useState('');
    const [transmission, setTransmission] = useState('');
    const [condition, setCondition] = useState('NEW');
    const [fuel, setFuel] = useState('Petrol');



    // State for overall form validity
    const [isFormValid, setIsFormValid] = useState(false);

    // Function to handle form field changes
    const handleFieldChange = (makeValue, modelValue, registrationValue, transmissionValue) => {
        const isValid =
            makeValue !== '' &&
            modelValue !== '' &&
            registrationValue !== '' &&
            transmissionValue !== '';

        setIsFormValid(isValid);
    };

    

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();


        alert('Form submitted!');
    };

    return (
        <>
            <Navbar />



            <BgColor>
                <div className="main-layout pt-4">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label className='selectHeading'>Make</label>
                                </div>
                                <div>
                                    <select className="select" onChange={(e) => {
                                        setMake(e.target.value);
                                        handleFieldChange(e.target.value, model, registration, transmission); // Trigger form validation on select change
                                    }} aria-label="Default select example">
                                        <option selected className='selectPara'>Select Maker</option>
                                        <option value="1" className='selectPara'>Honda Civic</option>
                                        <option value="2" className='selectPara'>Fortuner</option>
                                        <option value="3" className='selectPara'>Suzuki</option>
                                        <option value="3" className='selectPara'>Honda City</option>
                                    </select>
                                </div>



                                <div className='mt-5'>
                                    <label className='selectHeading'>Model</label>
                                </div>

                                <div>
                                    <select className="select" onChange={(e) => {
                                        setModel(e.target.value);
                                        handleFieldChange(make, e.target.value, registration, transmission);
                                    }} aria-label="Default select example">
                                        <option selected className='selectPara'>Select Model</option>
                                        <option value="1" className='selectPara'>2010</option>
                                        <option value="2" className='selectPara'>2014</option>
                                        <option value="3" className='selectPara'>2015</option>
                                        <option value="4" className='selectPara'>2016</option>
                                        <option value="5" className='selectPara'>2017</option>
                                        <option value="6" className='selectPara'>2018</option>
                                        <option value="7" className='selectPara'>2019</option>
                                        <option value="8" className='selectPara'>2022</option>
                                        <option value="9" className='selectPara'>2023</option>
                                    </select>
                                </div>

                                <div className='mt-5'>
                                    <p className='rangePara'>Price Range per Day(pkr)</p>
                                    <div className='d-flex justify-content-between'>
                                        <p className='rangePara'>2500</p>
                                        <p className='rangePara'>15000</p>
                                    </div>
                                    <Box sx={{ width: 300 }}>
                                        <Slider
                                            getAriaLabel={() => 'Temperature range'}
                                            value={value}    
                                            onChange={handleChange}
                                            valueLabelDisplay="auto"
                                            getAriaValueText={valuetext}
                                            min={2500}
                                            max={15000}
                                        />
                                    </Box>

                                    {/* <Box sx={{ width: 300 }}>
                                        <Slider
                                            getAriaLabel={() => 'Temperature range'}
                                            // value={value}
                                            // onChange={handleSliderChange}
                                            valueLabelDisplay="auto"
                                            getAriaValueText={valuetext}
                                            min={2500}
                                            max={15000}
                                        />
                                    </Box> */}
                                </div>
                                <div>
                                    <p className='rangeSubPara'>Minimum range 50,000 Rs</p>
                                    <p className='rangeSubPara'>Maximium range 500M Rs</p>
                                </div>

                                <div>
                                    <label className='selectHeading'>Registraition</label>
                                </div>
                                <div>
                                    <select className="select" onChange={(e) => {
                                        setRegistration(e.target.value);
                                        handleFieldChange(make, model, e.target.value, transmission);
                                    }} aria-label="Default select example">
                                        <option selected className='selectPara'>All</option>
                                        <option value="1" className='selectPara'>Islamabad</option>
                                        <option value="2" className='selectPara'>Karachi</option>
                                        <option value="3" className='selectPara'>Lahore</option>
                                        <option value="3" className='selectPara'>Rawalpindi</option>
                                    </select>
                                </div>

                                <div className='mt-4'>
                                    <label className='selectHeading'>Transmission</label>
                                </div>
                                <div>
                                    <select className="select" onChange={(e) => {
                                        setTransmission(e.target.value);
                                        handleFieldChange(make, model, registration, e.target.value);
                                    }} aria-label="Default select example">
                                        <option selected className='selectPara'>All</option>
                                        <option value="1" className='selectPara'>Auto</option>
                                        <option value="2" className='selectPara'>Manual</option>

                                    </select>
                                </div>


                                <div className='mt-4'>
                                    <label className='selectHeading'>Condition</label>
                                </div>
                                <div className='mt-2'>
                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active tabs" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">NEW</button>
                                        </li>
                                        <li className="nav-item ms-3 " role="presentation">
                                            <button className="nav-link tabs " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">USED</button>
                                        </li>

                                    </ul>
                                </div>

                                <div className='mt-4'>
                                    <label className='selectHeading'>Fuel</label>
                                </div>
                                <div className='mt-2'>
                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active tabs" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Petrol</button>
                                        </li>
                                        <li className="nav-item ms-3 " role="presentation">
                                            <button className="nav-link tabs " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Diesel</button>
                                        </li>
                                        <li className="nav-item ms-3 " role="presentation">
                                            <button className="nav-link tabs " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">CNG</button>
                                        </li>
                                        <li className="nav-item ms-3  mt-2" role="presentation">
                                            <button className="nav-link tabs " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">LPG</button>
                                        </li>
                                        <li className="nav-item ms-3 mt-2 " role="presentation">
                                            <button className="nav-link tabs " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Hybrid</button>
                                        </li>
                                        <li className="nav-item ms-3 mt-2 " role="presentation">
                                            <button className="nav-link tabs " id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Electric</button>
                                        </li>

                                    </ul>
                                </div>
                                <div className='mt-5 text-center'>
                                    <button type="submit"
                                        className='btn btn-primary button btn-lg'
                                        disabled={!isFormValid}>Apply</button>
                                </div>
                            </form>


                        </div>
                        <div className="col-lg-9 col-md-6 col-12">
                            <VehicleCard />
                        </div>
                    </div>
                </div>
            </BgColor>
            <Footer />
        </>
    )
}

export default VehicleListing