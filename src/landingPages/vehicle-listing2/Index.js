import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { BackGround } from './Style'
import { Div } from './Style'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { RecentDiv } from './Style'
import CarCard from '../../components/carCards/CarCard'
import { IoIosArrowDown } from "react-icons/io";
import Heart from 'react-animated-heart'
import { useState } from 'react'
import Footer from '../../components/footer/Footer'
import view from '../../images/View 2.png'
import view2 from '../../images/View 3.png'
import view3 from '../../images/View 4.png'
import tab1 from '../../images/tab1.png'
import tab2 from '../../images/tab2.png'
import tab3 from '../../images/tab3.png'
import { useLocation, useNavigate } from 'react-router-dom'
import '../../App.css'
import { LiaStarSolid } from "react-icons/lia";

const Index = () => {

    const [value, setValue] = React.useState(2);
    const [isClick, setClick] = useState(false);

    
    const location = useLocation();
    
    
    const data = [
        { reviewImg: '/images/Profill.png', reviewName: 'Alex Santon', reviewDesig: 'CEO at Bukalapak', reviewDate: '21 July 2022', review: 'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.' },
        { reviewImg: '/images/Profill2.png', reviewName: 'Skylar Dias', reviewDesig: 'CEO at Amazon', reviewDate: '20 July 2022', review: 'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.' }

    ];

    const item = [
        { carName: 'Swift', carType: 'Sport', gasoline: '90L', gearType: 'Manual', capacity: '4 Person', pkr: '4000/', carImg: 'images/car (2).png', like: 'images/Like.png' },
        { carName: 'Wagon-R', carType: 'Sport', gasoline: '80L', gearType: 'Manual', capacity: '4 Person', pkr: '3500/', carImg: 'images/wagon R.png', like: 'images/emptyLike.png' },
        { carName: 'Rolls-Royce', carType: 'Sedan', gasoline: '85L', gearType: 'Manual', capacity: '4 Person', pkr: '3000/', carImg: 'images/nisan.png', like: 'images/Like.png' },
        { carName: 'Nissan GT-R', carType: 'Sport', gasoline: '90L', gearType: 'Manual', capacity: '4 Person', pkr: '5000/', carImg: 'images/roll.png', like: 'images/emptyLike.png' },
     
    ]
    const datas = [
        { carName: 'Swift', carType: 'Sport', gasoline: '90L', gearType: 'Manual', capacity: '4 Person', pkr: '4000/', carImg: 'images/car (2).png', like: 'images/Like.png' },
        { carName: 'Wagon-R', carType: 'Sport', gasoline: '80L', gearType: 'Manual', capacity: '4 Person', pkr: '3500/', carImg: 'images/wagon R.png', like: 'images/emptyLike.png' },
        { carName: 'Rolls-Royce', carType: 'Sedan', gasoline: '85L', gearType: 'Manual', capacity: '4 Person', pkr: '3000/', carImg: 'images/nisan.png', like: 'images/Like.png' },
        { carName: 'Nissan GT-R', carType: 'Sport', gasoline: '90L', gearType: 'Manual', capacity: '4 Person', pkr: '5000/', carImg: 'images/roll.png', like: 'images/emptyLike.png' },
     
    ]



    const seletedCarDat=location.state;
    
    

    const luck = useNavigate();
    const suck = (state)=>{
        luck('/vehicle-listing3',{state})
    }
    return (
        <>
            <Navbar />
            <BackGround>
                <Div className='main-layout'>
                    <div className="row pt-5">
                        <div className="col-lg-8 col-12">
                        <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                
                                    <img src={seletedCarDat.carImg} className='cartab' alt="" />
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                                    <img src={tab1} className='tab' alt="" />
                                </div>
                                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                                    <img src={tab2} className='tab' alt="" />
                                </div>
                                <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabindex="0">
                                    <img src={tab3} className='tab' alt="" />
                                
                                </div>
                            </div>
                            {/* <div className='mt-4 text-center'>
                                {imgArray.map((imgArray) => (
                                    <img src={imgArray.carImage} className='mx-2 img-width' />
                                ))}
                            </div> */}


                            <ul className="nav nav-pills mb-3 mt-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                        <img src={view} alt="" />
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                                        <img src={view2} alt="" />
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                                        <img src={view3} alt="" />
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">
                                     <img src={view2} alt="" />
                                    </button>
                                </li>
                            </ul>
                            
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className='card'>
                                <div className='card-body'>
                                    <div className='d-flex justify-content-between'>
                                        <p className='carHeading'>Nissan Gt-R</p>
                                        <div className='heart'>
                                            <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                    <LiaStarSolid color='#FBAD39' fontSize={20} />
                                                <LiaStarSolid color='#FBAD39' fontSize={20} />
                                                <LiaStarSolid color='#FBAD39' fontSize={20}/>
                                                <LiaStarSolid color='#FBAD39' fontSize={20}/>
                                                <LiaStarSolid color='lightgray' fontSize={20}/>
                                        <p className='reviews'>440+ Reviews</p>
                                    </div>
                                    <div className=''>
                                        <p className='favPara'>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p className='typeCar'>Type Car</p>
                                        <p className='sport'>Sport</p>
                                        <p className='typeCar'>Capacity</p>
                                        <p className='sport'>2 Persons</p>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p className='typeCar'>Stearing</p>
                                        <p className='sport'>Manual</p>
                                        <p className='typeCar'>Gasoline</p>
                                        <p className='sport'>80L</p>
                                    </div>
                                    <div className='d-flex justify-content-between mt-4'>
                                        <p className='price'>$80.00/ <span className='day'>day</span> </p>
                                       <button type="submit" onClick={()=>suck()} class="button w-50 h-auto">Rent Now</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </Div>


                <Div>
                    <div className='main-layout'>

                        <div className='card mt-5'>

                            <div className='card-body'>

                                <div className='d-flex'>
                                    <p className='cardHeading'>Reviews</p>
                                    <button className='reviewButton'>13</button>
                                </div>
                                {data.map((review, index) => (
                                    <>
                                        <div key={index} className='d-flex justify-content-between flex-wrap mt-4'>
                                            <div className='d-flex'>

                                                <img src={review.reviewImg} alt="" className='img' />
                                                <div>
                                                    <p className='profileName ms-2'>{review.reviewName}</p>
                                                    <p className='profileDesig ms-2'>{review.reviewDesig}</p>
                                                </div>
                                            </div>
                                            <div className='mt-3'>  
                                                <p className='reviewDate text-lg-end text-md-end text-start'>{review.reviewDate}</p>
                                                <LiaStarSolid color='#FBAD39' fontSize={20} />
                                                <LiaStarSolid color='#FBAD39' fontSize={20} />
                                                <LiaStarSolid color='#FBAD39' fontSize={20}/>
                                                <LiaStarSolid color='#FBAD39' fontSize={20}/>
                                                <LiaStarSolid color='lightgray' fontSize={20}/>

                                            </div>
                                        </div>

                                        <div>
                                            <p className='review'>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
                                        </div>
                                    </>

                                ))}

                                <div className='text-center'>
                                    <button className='border-0 bg-white reviewsButton'>Show All <IoIosArrowDown /></button>
                                </div>
                            </div>

                        </div>
                    </div>
                </Div>

                <RecentDiv className="main-layout mt-5">
                    <div className='d-flex justify-content-between'>
                        <p>Recent Cars</p>
                        <p className='view'>View All</p>
                    </div>
                    <div className="row">
                        
                        {item.map(({ carName, gasoline, carType, carImg, pkr, capacity, gearType }, index) => (
                            <CarCard
                                carName={carName}
                                carType={carType}
                                gasoline={gasoline}
                                gearType={gearType}
                                capacity={capacity}
                                image={carImg}
                                price={pkr}
                                key={index}
                            />
                        ))};


                    </div>

                    <div className='d-flex justify-content-between'>
                        <p>Top Rated Cars</p>
                        <p className='view'>View All</p>
                    </div>
                    <div className="row">
                        
                        {datas.map(({ carName, gasoline, carType, carImg, pkr, capacity, gearType }, index) => (
                            <CarCard
                                carName={carName}
                                carType={carType}
                                gasoline={gasoline}
                                gearType={gearType}
                                capacity={capacity}
                                image={carImg}
                                price={pkr}
                                key={index}
                            />
                        ))};


                    </div>
                </RecentDiv>


            </BackGround>
            <Footer />
        </>
    )
}

export default Index
