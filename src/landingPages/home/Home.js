import React from 'react'
import banner from '../../images/banner lambo 1.png'
import { H5, P, Button, Div, H2, P1, BgColor, ExperienceDiv, SubscriptionDiv, BannerDiv, } from './Style'
import car from '../../images/Group 24.png'
import folder from '../../images/folder.png'
import setting from '../../images/settings.png'
import person from '../../images/person.png'
import CarCard from '../../components/carCards/CarCard'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Swal from 'sweetalert2'
import './Home.css'


const Home = () => {

    const item = [
        { carName: 'Swift', carType: 'Sport', gasoline: '90L', gearType: 'Manual', capacity: '4 Person', pkr: '4000/', carImg: 'images/car (2).png', like: 'images/Like.png' },
        { carName: 'Wagon-R', carType: 'Sport', gasoline: '80L', gearType: 'Manual', capacity: '4 Person', pkr: '3500/', carImg: 'images/wagon R.png', like: 'images/emptyLike.png' },
        { carName: 'Rolls-Royce', carType: 'Sedan', gasoline: '85L', gearType: 'Manual', capacity: '4 Person', pkr: '3000/', carImg: 'images/nisan.png', like: 'images/Like.png' },
        { carName: 'Nissan GT-R', carType: 'Sport', gasoline: '90L', gearType: 'Manual', capacity: '4 Person', pkr: '5000/', carImg: 'images/roll.png', like: 'images/emptyLike.png' }
    ];

    const navigate = useNavigate()
    const rent = (state) => {
        navigate('/VehicleListing', { state })

    }

    const [email, setEmail] = useState('');
    const [showValidation, setShowValidation] = useState(false);


    const isValidEmail = (email) => {
        // Regular expression for a simple email pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
      };
   

      const handleNextButtonClick = () => {
        if (!isValidEmail(email)) {
          setShowValidation(true);
        } else {
          setShowValidation(false);
          Swal.fire({
            title: 'Successfull!',
            text: 'You have successfully subscribed',
            icon: 'success',
            confirmButtonText: 'Continue'
          });
        }
      };
    

   

   
    

    return (
        <>

            {/* ////  hero section ///////// */}
            <div className='container'>

                <BannerDiv className='position-relative'>
                    <img src={banner} className='banner-img' alt="" />

                    <Div>
                        <H5>safer ,faster and comfortable</H5>
                        <P className='mt-0'>Get in touch with our luxury cars</P>
                        <Button className='btn btn-primary' onClick={() => rent()}>Rent Now</Button>

                    </Div>
                </BannerDiv>
            </div>

            <BgColor className='pb-5'>
                {/* ///////// car rent section //////// */}
                <div className='container mt-lg-5 mt-0'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-12'>
                            <img src={car} className='w-100' alt="" />
                        </div>
                        <div className='col-lg-6 col-md-6 col-12'>
                            <div className='text-lg-start ms-lg-5'>
                                <H2 className='heading'>Rent a Car</H2>
                                <P1> We pride ourselves in always going the <br /> extra mile for our customers.</P1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* //////Recent cars    //////// */}
                <div className='container'>

                    <div>
                        <div className='d-flex justify-content-between'>
                            <p className='recent'>Recent Cars</p>
                            <p className='view' onClick={() => rent()}>View All</p>
                        </div>
                        
                    </div>
                    <div className='row'>
                        {item.map(({ carName, carType, gasoline, gearType, capacity, pkr, carImg }, index) => (
                            <CarCard
                                carName={carName}
                                carType={carType}
                                gasoline={gasoline}
                                gearType={gearType}
                                capacity={capacity}
                                price={pkr}
                                image={carImg}
                                key={index} />
                        ))}
                    </div>
                </div>
                {/* ////   experience div ////// */}
                <ExperienceDiv>
                    <div className="container bg-white mt-lg-5">
                        <div className='text-center pt-lg-5'>
                            <p className='experince-heading1'>Feel the best experience with our luxury car</p>
                        </div>
                        <div className='row'>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className='text-center mt-4'>
                                    <img src={folder} alt="" />
                                    <div>
                                        <p className='experience-heading'>Book with flexibility</p>
                                        <p className='experience-para'>Easily find car and book with no change fees.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className='text-center mt-4'>
                                    <img src={setting} alt="" />
                                    <div>
                                        <p className='experience-heading'>Trusted and free</p>
                                        <p className='experience-para'>We’re completely free to use – no hidden charges or fees..</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className='text-center mt-4'>
                                    <img src={person} alt="" />
                                    <div>
                                        <p className='experience-heading'>We know Travel</p>
                                        <p className='experience-para'>With 10 years of experience, we're ready to help find your perfect car</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ExperienceDiv>

                {/*////// Subscription div ////// */}

                <SubscriptionDiv>
                    <div className='container mt-5'>
                        <div className="bg-subscription" >
                            <div className='pt-5 ms-5'>
                                <p className='driver-heading'>Become a Driver</p><span className='driver-headings'>Your Time.Your Goals.You're The Boss</span>
                                <div className='mt-lg-5'>
                                    <form action="" className='position-relative'>
                                        <label htmlFor="Subscribe" className='subscribe'>Subscribe And Join Us</label> <br />
                                        <input type="text"
                                            placeholder="Email"
                                            className="subscribe-input"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} />

                                       



                                        {/* <!-- Button trigger modal --> */}
                                        <button type="button" onClick={handleNextButtonClick} className="btn btn-lg sub-button">
                                            Next
                                        </button>

                                     {/* Validation message */}
                                     {showValidation && <p style={{ color: 'red' }}>Invalid email format</p>}
                                      
                                    </form>
                      
                              
                                </div>
                            </div>

                        </div>

                    </div>
                </SubscriptionDiv>

            </BgColor>



        </>
    )
}

export default Home