import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { BackGround } from '../vehicle-listing2/Style';
import { ContactDiv, FormDiv } from './Style'
import mobile from '../../images/Frame.png'
import frame from '../../images/Frame2.png'
import Pay from '../../images/Pay.png'
import locaition from '../../images/loc.png'
import Footer from '../../components/footer/Footer';
import { useForm } from 'react-hook-form'
import '../../App.css'

const Contact = () => {

  const { register, formState: { errors }, handleSubmit, } = useForm();

  const onSubmit = (data) => {
      if (Object.keys(errors).length === 0) {
        
      }
      console.log(data);
  };
  return (
    <>
      <Navbar />
      <BackGround>
        <div className='main-layout p-4'>
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <ContactDiv>
                    <div className='p-4'>
                      <p className='con-heading'>Contact Informaition</p>
                      <p className='con-para'> Fill up the form and our Team will get back to you within 24 hours.</p>
                    </div>
                    <div className='ms-3 d-flex'>
                      <div>
                        <img src={mobile} className='icon-back' alt="" />
                      </div>
                      <div className='mt-1 ms-2'>
                        <p className='text'>+91 98765 43210</p>
                      </div>
                    </div>

                    <div className='ms-3 d-flex mt-4'>
                      <div>
                        <img src={frame} className='icon-back' alt="" />
                      </div>
                      <div className='mt-1 ms-2'>
                        <p className='text'>domain@paypal.com</p>
                      </div>
                    </div>

                    <div className='ms-3 d-flex mt-4'>
                      <div>
                        <img src={Pay} className='icon-back' alt="" />
                      </div>
                      <div className='mt-1 ms-2'>
                        <p className='text'>https://paypal.com</p>
                      </div>
                    </div>

                    <div className='ms-3 d-flex mt-4'>
                      <div>
                        <img src={locaition} className='icon-back' alt="" />
                      </div>
                      <div className='mt-1 ms-2'>
                        <p className='text'>Locaition</p>
                      </div>
                    </div>
                  </ContactDiv>
                </div>
                <div className="col-lg-8 col-md-6 col-12">
                  <FormDiv>
                    <div className="card  border-0">
                      <div className="card-body">
                        <div className='d-flex justify-content-between'>
                          <div>

                          </div>
                          <div>

                          </div>
                        </div>
                        <form action="">
                          <div className="row mt-3">
                            <div className="col-lg-6 col-12">

                              <div>
                                <label htmlFor="" className='label'> First Name</label>
                                <div>
                                  <input className='input mt-3' {...register('firstName', { required: true, })} onBlur={handleSubmit(onSubmit)}  />
                                </div>
                                <p className='error-para mt-2 ms-lg-5 ms-md-5 ms-sm-2 ps-3'>
                                    {errors.firstName?.type === "required" && "First Name is required"}
                                    
                                </p>
                              </div>
                              <div className='mt-4'>
                                <label htmlFor="" className='label'>Email</label>
                                <div>
                                  <input {...register('email', { required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i })}  className='input mt-3'  onBlur={handleSubmit(onSubmit)} />
                                </div>
                                <p className='error-para mt-2 ms-lg-5 ms-md-5 ms-sm-2 ps-3'>
                                    {errors.email?.type === "required" && "Email is required"}
                                    
                                </p>
                              </div>


                            </div>
                            <div className="col-lg-6 col-12 mt-lg-0 mt-md-0 mt-4">
                              <label htmlFor="" className='label'>Last Name</label>
                              <div>
                                <input className='input mt-3' {...register('lastName', { required: true, })} onBlur={handleSubmit(onSubmit)}  />
                              </div>
                              <p className='error-para mt-2 ms-lg-5 ms-md-5 ms-sm-2 ps-3'>
                                    {errors.lastName?.type === "required" && "Last Name is required"}
                                    
                                </p>

                              <div className='mt-4'>
                                <label htmlFor="" className='label'>Phone</label>
                                <div>
                                  <input  className='input mt-3' {...register('number', { required: true, })}  onBlur={handleSubmit(onSubmit)} />
                                </div>
                                <p className='error-para mt-2 ms-lg-5 ms-md-5 ms-sm-2 ps-3'>
                                    {errors.number?.type === "required" && "Phone Number is required"}
                                    
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className='mt-4 form-group'>
                            <label htmlFor="" className='label'>Message</label>
                            <div>
                              <textarea rows='10' type='text' className='input mt-3' ></textarea>
                            </div>
                          </div>
                          <div className='mt-4 text-end '>
                            <button type='button' className='btn btn-primary px-4 fw-bold rounded-5'>Get a Qoute</button>
                          </div>


                        </form>
                      </div>
                    </div>
                  </FormDiv>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackGround>
      <Footer/>
    </>
  )
}

export default Contact
