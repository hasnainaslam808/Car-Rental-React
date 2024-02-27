import React from 'react'
import cover from '../../images/cover 2.png'
import { CoverImg, SigninDiv, PasswordInput, Button } from './Style'
import logo from '../../images/logo.png'
import { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'


const SignIn3 = () => {

    const [showpassword, setshowPassword] = useState(false);
    const [showpassword2, setshowPassword2] = useState(false);

    const navigate = useNavigate()
    const signInNavigate = (state)=>{
        navigate('/SignIn1',{state})
    }

    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
    } = useForm();
    const onSubmit = (data) => {
        const { password, confirmPassword } = data;
        if (password === confirmPassword) {
            signInNavigate();
        }
    };

    const watchPassword = watch('password', '');


    return (
        <>
            <div className='main-layout'>
                <div className='row'>
                    <div className="col-6 d-lg-block d-none p-0">
                        <CoverImg >
                            <img src={cover} className='w-100 cover' alt="" />
                        </CoverImg>
                    </div>
                    <div className="col-lg-6 col-12">
                        <SigninDiv>
                            <div className='text-center mt-5'>
                                <img src={logo} alt="" />
                                <div>
                                    <p className='mt-5 signIn-heading'>Create New Password</p>
                                    <p className='signIn-subheading'>Please Enter Your Password and Confirm Password</p>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>


                                <div className='mt-4'>
                                    <label htmlFor="" className='email-label'>Password</label>
                                </div>
                                <div className='mt-2'>
                                    <div className=' password d-flex justify-content-between '>
                                        <PasswordInput placeholder='Enter Your Password'   {...register('password', { required: true, minLength: 5, maxLength: 20 })} type={showpassword ? 'text' : 'password'} id='password' />

                                        <span onClick={() => setshowPassword(!showpassword)} className='mt-2 me-2'>
                                            {showpassword ? <FaRegEye fontSize={'20px'} /> : <FaRegEyeSlash fontSize={'20px'} />}
                                        </span>
                                    </div>
                                    <p className='error-para mt-2'>
                                        {errors.password?.type === 'required' && 'password is required'}
                                        {errors.password?.type === 'minLength' && 'entered password is less than 5 characters'}
                                        {errors.password?.type === 'maxLength' && 'entered password is more than 20 characters'}
                                    </p>


                                </div>



                                <div className='mt-4'>
                                    <label htmlFor="" className='email-label'> Confirm Password</label>
                                </div>
                                <div className='mt-2'>
                                    <div className='password d-flex justify-content-between '>
                                        <PasswordInput placeholder='Enter Your Password' id='confirmPassword' {...register('confirmPassword', { validate: (value) => value === watchPassword || 'Passwords do not match', })} type={showpassword2 ? 'text' : 'password'} />

                                        <span onClick={() => setshowPassword2(!showpassword2)} className='mt-2 me-2'>
                                            {showpassword2 ? <FaRegEye fontSize={'20px'} /> : <FaRegEyeSlash fontSize={'20px'} />}
                                        </span>

                                    </div>
                                    <p className='error-para mt-2'>{errors.confirmPassword?.message}</p>
                                </div>
                                <div className='mt-5'>
                                    <Button>Continue</Button>
                                </div>

                            </form>
                        </SigninDiv>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn3