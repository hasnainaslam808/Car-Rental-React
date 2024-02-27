import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { BackGround } from '../vehicle-listing2/Style'
import { Div } from './Style'
import CarCard from '../../components/carCards/CarCard'
import Footer from '../../components/footer/Footer'

const Favourites = () => {
    const item = [
        { carName: 'Swift', carType: 'Sport', gasoline: '90L', gearType: 'Manual', capacity: '4 Person', pkr: '4000/', carImg: 'images/car (2).png', like: 'images/Like.png' },
        { carName: 'Wagon-R', carType: 'Sport', gasoline: '80L', gearType: 'Manual', capacity: '4 Person', pkr: '3500/', carImg: 'images/wagon R.png', like: 'images/emptyLike.png' },
        { carName: 'Rolls-Royce', carType: 'Sedan', gasoline: '85L', gearType: 'Manual', capacity: '4 Person', pkr: '3000/', carImg: 'images/nisan.png', like: 'images/Like.png' },
    ]
    return (
        <>
            <Navbar />
            <BackGround className='pb-5'>
                <Div className='container-fluid pt-5'>
                    <div className='w-100 bg-white p-3 rounded-4 '>
                        <p className='fav'>Favourites</p>
                    </div>

                    <div className='container-fluid'>
                      
                            <div className="row mt-4">
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
                      
                    </div>
                </Div>
            </BackGround>
            <Footer/>
        </>
    )
}

export default Favourites
