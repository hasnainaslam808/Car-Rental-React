import React from 'react'
import cover from '../../images/cover 2.png'
import logo from '../../images/logo.png'
import { SignIn2Div, EmailInput, Button, CoverImg2 } from './Style'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';



const SignIn2 = () => {


    const fast = useNavigate();
    const bend = (state) => {
        fast('/SignInOTP', { state })
    }



    const { register, formState: { errors }, handleSubmit, } = useForm();

    const onSubmit = (data) => {
        if (Object.keys(errors).length === 0) {
            bend();
        }
        console.log(data);
    };
    return (
        <>
            <div className="main-layout">
                <div className="row">
                    <CoverImg2 className="col-6 d-lg-block d-none p-0">
                        <div>
                            <img src={cover} className='cover' alt=""  />
                        </div>
                    </CoverImg2>
                    <div className="col-lg-6 col-12 p-0">
                        <SignIn2Div>
                            <div className='text-center'>
                                <img src={logo} alt="" />
                                <div className='mt-5'>
                                    <p className='heading'>Forget your Account?</p>
                                    <p className='para'>Please enter your registered email</p>
                                </div>


                            </div>
                            <div className='mt-5'>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className='label'>
                                        <label htmlFor="" className='email-label'>Email</label>
                                    </div>
                                    <div className=' mt-2'>
                                        <div className=' mt-2'>
                                            <EmailInput placeholder='Enter Your email'{...register('email', { required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i })} />
                                        </div>

                                    </div>
                                    <p className='error-para mt-2 '>
                                        {errors.email?.type === "required" && "Email is required"}
                                        {errors.email?.type === "pattern" && "Entered Email is not valid"}
                                    </p>
                                    <div className='mt-4'>
                                        <Button type='submit' className=' mt-2'>Continue</Button>
                                    </div>
                                </form>
                            </div>

                        </SignIn2Div>

                    </div>
                </div>
            </div>



        </>
    )
}

export default SignIn2