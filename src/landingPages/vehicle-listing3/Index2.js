import React from 'react'
import { BackGround } from '../vehicle-listing2/Style'
import { Div } from './Style'
import Navbar from '../../components/navbar/Navbar'
// import Visa from '../../images/Visa.png'
// import paypal from '../../images/PayPal.png'
// import bitcoin from '../../images/Bitcoin.png'
import shield from '../../images/Layer.png'
import Footer from '../../components/footer/Footer'
import view4 from '../../images/View 4.png'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useState } from 'react'
import Swal from 'sweetalert2'
import { Controller, useForm } from 'react-hook-form'
import '../../App.css'

const Index = () => {
  // const { control, handleSubmit, formState: { errors } } = useForm();
  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const [value, setValue] = React.useState(2);


  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [nameError, setNameError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [cityError, setCityError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        setNameError(value ? '' : 'Name is required');
        break;
      case 'address':
        setAddress(value);
        setAddressError(value ? '' : 'Address is required');
        break;
      case 'phoneNumber':
        setPhoneNumber(value);
        setPhoneNumberError(value ? '' : 'Phone Number is required');
        break;
      case 'city':
        setCity(value);
        setCityError(value ? '' : 'City is required');
        break;
      default:
        break;
    }
  };






  // const Billing = () => {
  //  


  // const check = () => {
  //   let noButtonClicked = false;


  //   Swal.fire({
  //     title: 'Confirmation',
  //     text: 'Are you sure you want to proceed?',
  //     icon: 'info',
  //     showCancelButton: true,
  //     confirmButtonText: 'Continue',

  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       // Check if both checkboxes are checked
  //       const checkbox1 = document.getElementById('checkbox1');
  //       const checkbox2 = document.getElementById('checkbox2');

  //       if (checkbox1.checked && checkbox2.checked && Index) {
  //         Swal.fire({
  //           title: 'Success!',
  //           text: 'You have successfully completed the process.',
  //           icon: 'success',
  //         });
  //       } else {
  //         Swal.fire({
  //           title: 'Failed!',
  //           text: 'Please agree to both terms to proceed.',
  //           icon: 'error',
  //         });
  //       }
  //     }
  //   });

  //   Swal.getCancelButton().addEventListener('click', () => {
  //     noButtonClicked = true;
  //   });
  // };

  const Waleed = () => {
    let noButtonClicked = false;
    const checkbox1 = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');
const name = document.getElementsByName('name');

 

if (checkbox1.checked && checkbox2.checked) {
  Swal.fire({
    title: 'Success!',
    text: 'You have successfully completed the process.',
    icon: 'success',
  });
} else {
  Swal.fire({
    title: 'Failed!',
    text: 'Please agree to both terms to proceed.',
    icon: 'error',
  });
}
};


  //   Swal.fire({
  //     title: 'Confirmation',
  //     text: 'Are you sure you want to proceed?',
  //     icon: 'info',
  //     showCancelButton: true,
  //     confirmButtonText: 'Continue',

  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       // Check if both checkboxes are checked
  //       const checkbox1 = document.getElementById('checkbox1');
  //       const checkbox2 = document.getElementById('checkbox2');

  //       if (checkbox1.checked && checkbox2.checked && Index) {
  //         Swal.fire({
  //           title: 'Success!',
  //           text: 'You have successfully completed the process.',
  //           icon: 'success',
  //         });
  //       } else {
  //         Swal.fire({
  //           title: 'Failed!',
  //           text: 'Please agree to both terms to proceed.',
  //           icon: 'error',
  //         });
  //       }
  //     }
  //   });
  //   Swal.getCancelButton().addEventListener('click', () => {
  //     noButtonClicked = true;
  //   });
  
  return (
    <div>
      <Navbar />
      <BackGround className='pb-3'>
        <Div>


          <div className='main-layout'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='row'>
                <div className="col-lg-8 col-12">

                  {/* //// billing informaition//////? */}
                  <div className="card mt-5">
                    <div className="card-body">
                      <div className='d-flex justify-content-between'>
                        <div>
                          <p className='billing'>Billing Info</p>
                          <p className='billing-para'>Please enter your billing info</p>
                        </div>
                        <div>
                          <p className='step'>step 1 of 4</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">

                          <div>
                          <label htmlFor="name" className='label'>Name</label>
                            <Controller name='name' id='name' control={control} rules={{ required: 'name is required' }} render={({ field }) => (
                              <>
                                <div>
                                  <input {...field} className='input' placeholder='Your Name' />
                                </div>
                                <p className='error-para'>{errors.name && errors.name.message}</p>
                              </>
                            )} />
                          </div>
                          <div className='mt-4'>
                            <label htmlFor="address" className='label'>Adress</label>
                            <Controller name='address' control={control} rules={{ required: 'Address is required' }} render={({ field }) => (
                              <>
                            <div>
                              <input type='text' value={address}  {...field} className='input' placeholder='Adress' />
                            </div>
                            <p className='error-para'>{errors.address && errors.address.message}</p>
                              </>
                            )} />
                          </div>


                        </div>
                        <div className="col-lg-6 col-md-6 col-12 mt-lg-0 mt-md-0 mt-4">
                          <label htmlFor="phoneNumber" className='label'>Phone Number</label>
                          <Controller name='phone' control={control} rules={{ required: 'Number is required' }} render={({ field }) => (
                              <>
                          <div>
                            <input type='tel' value={phoneNumber}{...field} className='input' placeholder='Your Phone Number' />
                          </div>
                          <p className='error-para'>{errors.phone && errors.phone.message}</p>
                              </>
                            )} />

                          <div className='mt-4'>
                            <label htmlFor="city" className='label'>Town City</label>
                            <Controller name='city' control={control} rules={{ required: 'City is required' }} render={({ field }) => (
                              <>
                            <div>
                              <input type='text' value={city}{...field} className='input' placeholder='City / Town' />
                             
                            </div>
                            <p className='error-para'>{errors.city && errors.city.message}</p>
                              </>
                            )} />
                          </div>
                        </div>
                      </div>



                    </div>
                  </div>

                  {/* ////Rental Info section//// */}
                  <div className="card mt-4">
                    <div className="card-body">
                      <div className='d-flex justify-content-between'>
                        <div>
                          <p className='billing'>Rental Info</p>
                          <p className='billing-para'>Enter your rental info</p>
                        </div>
                        <div>
                          <p className='step'> step 2 of 4</p>
                        </div>
                      </div>

                      <div>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" />
                          <label class="form-check-label" for="flexRadioDefault2">
                            Pick Up
                          </label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">


                          <div className='mt-3'>
                            <label htmlFor="" className='label'>Locaition</label>
                          </div>
                          <div>
                            <Controller name='locaition' control={control} rules={{ required: 'Locaition is required' }} render={({ field }) => (
                              <>
                                <select name="" id="locaition" className='input' {...field}>
                                  <option value="0">Select your city</option>
                                  <option value="1">Karachi</option>
                                  <option value="2">Lahore</option>
                                  <option value="3">Islamabad</option>
                                  <option value="4">Rahim Yar Khan</option>
                                </select>
                                <p className='error-para'>{errors.locaition && errors.locaition.message}</p>
                              </>
                            )}

                            />
                          </div>

                          <div className='mt-3'>
                            <label htmlFor="" className='label'>Time</label>
                          </div>
                          <div>
                            <Controller name='time' control={control} rules={{ required: 'Time is required' }} render={({ field }) => (
                              <>
                                <input id='time' type="time" {...field} className='input' placeholder='Select Your Time' />
                                <p className='error-para'>{errors.time && errors.time.message}</p>
                              </>
                            )} />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className='mt-3'>
                            <label htmlFor="" className='label'>Date</label>
                          </div>
                          <div>
                            <Controller name='date' control={control} rules={{ required: 'Date is required' }} render={({ field }) => (
                              <>
                                <input id='date' type="date" {...field} className='input' placeholder='Select Your Date' />
                                <p className='error-para'>{errors.date && errors.date.message}</p>
                              </>
                            )} />
                          </div>
                        </div>
                      </div>




                      <div className='mt-5'>
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="flexRadioDefault"  />
                          <label class="form-check-label" for="flexRadioDefault2">
                            Drop Off
                          </label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className='mt-3'>
                            <label htmlFor="" className='label'>Locaition</label>
                          </div>
                          <div>
                            <Controller name='city' control={control} rules={{ required: 'Locaition is required' }} render={({ field }) => (
                              <>
                                <select name="" id="city" className='input' {...field}>
                                  <option value="0">Select your city</option>
                                  <option value="1">Karachi</option>
                                  <option value="2">Lahore</option>
                                  <option value="3">Islamabad</option>
                                  <option value="4">Rahim Yar Khan</option>
                                </select>
                                <p className='error-para'>{errors.city && errors.city.message}</p>
                              </>
                            )} />
                          </div>

                          <div className='mt-3'>
                            <label htmlFor="" className='label'>Time</label>
                          </div>
                          <div>
                            <Controller name='time' control={control} rules={{ required: 'Time is required' }} render={({ field }) => (
                              <>
                                <input type="time" id='time' {...field} className='input' placeholder='Select Your Time' />
                                <p className='error-para'>{errors.time && errors.time.message}</p>
                              </>
                            )} />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className='mt-3'>
                            <label htmlFor="" className='label'>Date</label>
                          </div>
                          <div>
                            <Controller name='date' control={control} rules={{ required: 'Date is required' }} render={({ field }) => (
                              <>
                                <input type="date" {...field} className='input' placeholder='Select Your Date' />
                                <p className='error-para'>{errors.date && errors.date.message}</p>
                              </>
                            )} />
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>

                  {/* /////////payment info section///////// */}
                  {/* <div className="card mt-4">
                    <div className="card-body">
                      <div className='d-flex justify-content-between'>
                        <div>
                          <p className='billing'>Payment Method</p>
                          <p className='billing-para'>Enter your payment method</p>
                        </div>
                        <div>
                          <p className='step'> step 3 of 4</p>
                        </div>
                      </div>

                      <div className='payment-bg rounded-3 p-4'>
                        <div className='d-flex justify-content-between'>
                          <div class="form-check">

                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label class="form-check-label confirm-para" for="flexRadioDefault2">
                              Credit Card
                            </label>
                          </div>
                          <div>
                            <img src={Visa} alt="" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className='mt-3'>
                              <label htmlFor="" className='label'>Card Number</label>
                            </div>
                            <div>
                              <input type='number' id="" placeholder='Card Number' className='payment-input' />

                            </div>

                            <div className='mt-3'>
                              <label htmlFor="" className='label'>Card Holder</label>
                            </div>
                            <div>
                              <input type="text" className='payment-input' placeholder='Card Holder' />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className='mt-3'>
                              <label htmlFor="" className='label'> Expiraition Date</label>
                            </div>
                            <div>
                              <input type="date" className='payment-input' placeholder='DD/MM/YYYY' />
                            </div>
                            <div className='mt-3'>
                              <label htmlFor="" className='label'>CVC</label>
                            </div>
                            <div>
                              <input type="text" className='payment-input' placeholder='CVC' />
                            </div>
                          </div>

                        </div>
                      </div>

                      <div className='payment-bg mt-3 p-3 rounded-3'>
                        <div className='d-flex justify-content-between'>
                          <div class="form-check">

                            <input class="form-check-input" type="radio" name="flexRadioDefault1" id="checkbox1" />
                            <label class="form-check-label confirm-para" for="flexRadioDefault2">
                              Paypal
                            </label>
                          </div>
                          <div>
                            <img src={paypal} alt="" />
                          </div>
                        </div>
                      </div>


                      <div className='payment-bg mt-3 p-3 rounded-3'>
                        <div className='d-flex justify-content-between'>
                          <div class="form-check">

                            <input class="form-check-input" type="radio" name="flexRadioDefault2" id="checkbox2" />
                            <label class="form-check-label confirm-para" for="flexRadioDefault2">
                              Bitcoin
                            </label>
                          </div>
                          <div>
                            <img src={bitcoin} alt="" />
                          </div>
                        </div>
                      </div>



                    </div>
                  </div> */}

                  {/* ////////////// confirmaition info section/////////// */}

                  <div className="card mt-4 mb-3">
                    <div className="card-body">
                      <div className='d-flex justify-content-between'>
                        <div>
                          <p className='billing'>Confirmation</p>
                          <p className='billing-para'>We are getting to the end. Just few clicks and your rental is ready!</p>
                        </div>
                        <div>
                          <p className='step'> step 4 of 4</p>
                        </div>
                      </div>

                      <div className='payment-bg mt-3 p-3 rounded-3'>
                        <div className='d-flex justify-content-between'>
                          <div class="form-check">

                            <input class="form-check-input" type="checkbox" value="" id="checkbox1" name='flexCheckDefault1' />
                            <label class="form-check-label confirm-para" for="flexCheckDefault">
                              I agree with sending an Marketing and newsletter emails. No spam, promissed!
                            </label>
                          </div>

                        </div>
                      </div>


                      <div className='payment-bg mt-3 p-3 rounded-3'>
                        <div className='d-flex justify-content-between'>
                          <div class="form-check">

                            <input class="form-check-input" type="checkbox" value="" id="checkbox2" name='flexCheckDefault2' />
                            <label class="form-check-label confirm-para" for="flexCheckDefault">
                              I agree with our terms and conditions and privacy policy.

                            </label>
                          </div>

                        </div>
                      </div>

                      <div>
                        {/* <button
                          type='submit'
                          className='btn btn-primary input-text btn-lg text-white mt-4'
                          onClick={check}
                        >
                          Rent Now
                        </button> */}
                        <button
                          type='submit'
                          className='btn btn-primary input-text btn-lg text-white mt-4'
                          onClick={Waleed}
                        >
                          Rent Now
                        </button>
                      </div>

                      <div className='mt-3'>
                        <img src={shield} alt="" />
                        <p className='shield-heading'>All your data is safe</p>
                        <p className='shield-para'>We are using the most advanced security to provide you the best experience ever.</p>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12 mb-lg-0 mb-md-4 mb-sm-4">
                  <div className="card mt-5">
                    <div className="card-body">
                      <div>
                        <p className='summary-heading'>Rental Summary</p>
                        <p className='summary-para'>Prices may change depending on the length of the rental and the price of your rental car.</p>
                      </div>
                      <div className='d-flex'>
                        <div >
                          <img src={view4} alt="" />
                        </div>
                        <div className='ms-3'>
                          <p className='nissan'>Nissan GT-R</p>

                          <div className='d-flex flex-wrap'>
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
                            <p className='reviewer mt-1'>440+ reviewer</p>
                          </div>

                        </div>
                      </div>

                      <hr />
                      <div className='d-flex justify-content-between'>
                        <p className='price-heading'>SubTotal</p>
                        <p className='price'>$80.00</p>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <p className='price-heading'>Tax</p>
                        <p className='price'>$0</p>
                      </div>

                      <div className='d-flex justify-content-between'>
                        <div>
                          <p className='rental-price'>Total Rental Price</p>
                          <p className='overall'>Overall price and includes rental discount</p>
                        </div>
                        <p className='dollar'>$80.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Div>
      </BackGround>
      <Footer />
    </div>
  )
}

export default Index
