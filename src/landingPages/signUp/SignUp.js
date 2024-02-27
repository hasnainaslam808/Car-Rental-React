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
import { Link, useNavigate } from 'react-router-dom'
import ReactFlagsSelect from 'react-flags-select'
import { useForm } from 'react-hook-form';
import '../../App.css'







const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [selected, setSelected] = useState("PK");
    const fart = useNavigate();
    const man = (state) => {
        fart('/SignUpOtp', { state })
    }

    const { register, formState: { errors }, handleSubmit, } = useForm();

    const onSubmit = (data) => {
        if (Object.keys(errors).length === 0) {
            man();
        }
        console.log(data);
    };
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
                                    <p className='mt-5 signIn-heading'>Sign Up to your account</p>
                                    <p className='signIn-subheading'>Welcome back! please enter your detail</p>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='mt-5'>
                                    <label for="validationCustom01" class="email-label">First name</label>

                                </div>
                                <div className=' mt-2'>
                                    <EmailInput placeholder='Enter Your Name'{...register('name', { required: true, })} />

                                </div>
                                <p className='error-para mt-2'>
                                    {errors.name?.type === "required" && "Name is required"}
                                    
                                </p>


                                <div className='mt-4'>
                                    <label for="validationCustom02" className='email-label'>Phone</label>
                                </div>
                                <div className=' mt-2  d-flex phone'>
                                    <span>
                                        <ReactFlagsSelect
                                            selected={selected}
                                            onSelect={(code) => setSelected(code)}
                                            showSelectedLabel={false}
                                            showSearch={false}
                                            className='flag'
                                        />
                                    </span>
                                    <input type="tel" className='number-input'{...register('number', { required: true, })}placeholder='Enter Your Number' />
                                </div>
                                <p className='error-para'>
                                    {errors.number?.type === "required" && "Number is required"}
                                    
                                </p>






                                <div className='mt-4 '>
                                    <label htmlFor="" className='email-label'>Email</label>
                                </div>
                                <div className=' mt-2'>
                                    <EmailInput {...register('email', { required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i })} placeholder='Enter Your email' />
                                </div>
                                <p className='error-para mt-2 '>
                                    {errors.email?.type === "required" && "Email is required"}
                                    {errors.email?.type === "pattern" && "Entered Email is not valid"}
                                </p>


                                <div className='mt-4 '>
                                    <label htmlFor="" className='email-label'>Password</label>
                                </div>
                                <div className='mt-2'>
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


                                <div className=' mt-5'>
                                    <Button type="submit" className=' mt-2'>Sign Up</Button>
                                </div>


                            </form>


                            <div className='text-center mt-2'>
                                <p className='signupPara'>Already have an account? <Link to='/SignIn1'><span className='blue'>Sign In</span></Link></p>
                                <p className='or'>OR</p>
                            </div>

                            <div className='signIn  signButton'>
                                <div className='d-flex justify-content-center'>
                                    <img src={google} className='h-100' alt="" />
                                    <p className='google ms-2'>Sign in with Google</p>
                                </div>
                            </div>

                            <div className='signIn mt-3  signButton'>
                                <div className='d-flex justify-content-center'>
                                    <img src={facebook} className='h-100' alt="" />
                                    <p className='google ms-2'>Sign in with Facebook</p>
                                </div>
                            </div>

                            <div className='signIn mt-3 signButton '>
                                <div className='d-flex justify-content-center'>
                                    <img src={black} className='h-100' alt="" />
                                    <p className='google ms-2'>Sign in with Apple</p>
                                </div>
                            </div>
                        </SigninDiv>

                        {/* <form class="row g-3 needs-validation" novalidate>
                            <div class="col-12">

                            </div>
                            <div class="col-12">
                                <label  class="form-label">Last name</label>
                                <input type="text" class="form-control"  value="Otto" required />
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="validationCustomUsername" class="form-label">Username</label>
                                <div class="input-group has-validation">
                                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                                    <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                                    <div class="invalid-feedback">
                                        Please choose a username.
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="validationCustom03" class="form-label">City</label>
                                <input type="text" class="form-control" id="validationCustom03" required />
                                <div class="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="validationCustom04" class="form-label">State</label>
                                <select class="form-select" id="validationCustom04" required>
                                    <option selected disabled value="">Choose...</option>
                                    <option>...</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please select a valid state.
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="validationCustom05" class="form-label">Zip</label>
                                <input type="text" class="form-control" id="validationCustom05" required />
                                <div class="invalid-feedback">
                                    Please provide a valid zip.
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                    <label class="form-check-label" for="invalidCheck">
                                        Agree to terms and conditions
                                    </label>
                                    <div class="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">Submit form</button>
                            </div>
                        </form> */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignUp