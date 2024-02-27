import React from 'react'
import cover from '../../images/Cover.png'
import { CoverImg, SigninDiv, EmailInput, PasswordInput, Button } from './Style'
import logo from '../../images/logo.png'
import google from '../../images/google-icon.png'
import facebook from '../../images/facebook.png'
import black from '../../images/Black.png'
import { useState } from 'react'
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import '../../App.css'


const SignIn1 = () => {

    const [showPassword, setShowPassword] = useState(false);

    const made = useNavigate();
    const syntax = (state) => {
        made('/SignIn2', { state })
    }

    const broke = useNavigate();
    const bread = (state) => {
        broke('/SignUp', { state })
    }
    const brand = useNavigate();
    const mist = (state) => {
        brand('/', { state })
    }


    const { register, formState: { errors }, handleSubmit, } = useForm();

    const onSubmit = (data) => {
        if (Object.keys(errors).length === 0) {
            mist();
        }
        console.log(data);
    };


    return (
        <>
            <div className='container-fluid'>
                <div className='row'>

                    <div className="col-6 d-lg-block d-none p-0">
                        <CoverImg >
                            <img src={cover} className='w-100' alt="" />
                        </CoverImg>
                    </div>
                    <div className="col-lg-6 col-12">
                        <SigninDiv>
                            <div className='text-center mt-5'>
                                <img src={logo} alt="" />
                                <div>
                                    <p className='mt-5 signIn-heading'>Sign in to your account</p>
                                    <p className='signIn-subheading'>Welcome back! please enter your detail</p>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='mt-5 '>
                                    <label htmlFor="" className='email-label' >Email</label>
                                </div>
                                <div className=' mt-2'>
                                    <EmailInput className='ps-2' placeholder='Enter Your email'{...register('email', { required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i })} />

                                    <p className='error-para mt-2'>
                                        {errors.email?.type === "required" && "Email is required"}
                                        {errors.email?.type === "pattern" && "Entered Email is not valid"}
                                    </p>
                                </div>


                                <div className='mt-4 '>
                                    <label htmlFor="" className='email-label'>Password</label>
                                </div>
                                <div className='mt-2 '>

                                    <div className=' password d-flex justify-content-between '>
                                        <PasswordInput placeholder='Enter Your Password'  {...register('password', { required: true, minLength: 5, maxLength: 20 })} type={showPassword ? "text" : "password"} id='password' />

                                        <span className='p-2' onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <GoEye id='eye' fontSize={20} /> : <GoEyeClosed id='eye' fontSize={20} />}
                                        </span>
                                    </div>

                                    <p className='error-para mt-2'>
                                        {errors.password?.type === "required" && "password is required"}
                                        {errors.password?.type === 'minLength' && "entered password is less then 5 characters"}
                                        {errors.password?.type === 'maxLength' && "entered password is more then 20 characters"}

                                    </p>

                                </div>

                                <div className='forgetDiv d-flex justify-content-between'>
                                    <div>
                                        <input className="form-check-input" type='checkbox' />
                                        <label className='ms-2 email-label'>Remember Me</label>
                                    </div>
                                    <div className=''>
                                        <p className='forgetPara' onClick={() => syntax()}>Forget Password ?</p>
                                    </div>
                                </div>

                                <div className='text-center'>
                                    <Button type="submit" className=' mt-2'>Sign In</Button>

                                </div>
                            </form>

                            <div className='text-center mt-2'>
                                <p className='signupPara'>Dont have an account? <span className='blue' onClick={() => bread()}>Sign Up</span></p>
                                <p className='or'>OR</p>
                            </div>

                            <div className='signIn text-center'>
                                <div className='d-flex justify-content-center'>
                                    <img src={google} className='h-100' alt="" />
                                    <p className='google ms-3'>Sign in with Google</p>
                                </div>
                            </div>

                            <div className='signIn mt-3 text-center'>
                                <div className='d-flex justify-content-center'>
                                    <img src={facebook} className='h-100 ms-2' alt="" />
                                    <p className='google ms-3'>Sign in with Facebook</p>
                                </div>
                            </div>

                            <div className='signIn mt-3 text-center'>
                                <div className='d-flex justify-content-center'>
                                    <img src={black} className='h-100 me-3' alt="" />
                                    <p className='google ms-2'>Sign in with Apple</p>
                                </div>
                            </div>
                        </SigninDiv>

                    </div>

                </div>
            </div>
        </>
    )
}

export default SignIn1