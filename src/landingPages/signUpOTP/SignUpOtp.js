import React from 'react'
import cover from '../../images/cover 2.png'
import logo from '../../images/logo.png'
import { SignIn2Div, Button, CoverImg2 } from './Style'
import { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpOtp = () => {

    const [isButtonDisabled, setButtonDisabled] = useState(true);
    const [remainingTime, setRemainingTime] = useState(1 * 60);
    const [otp, setOtp] = useState('');
    const [otpError, setOtpError] = useState('');

 


    useEffect(() => {
        const intervalId = setInterval(() => {
            setRemainingTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);
    useEffect(() => {
        setButtonDisabled(otp === '' || remainingTime === 0);
    }, [otp, remainingTime]);


    const fat = useNavigate();
    const set = (state) => {
        fat('/', { state });
    }
    const handleContinueClick = (data) => {
        // Perform your logic when the "Continue" button is clicked
       
            if (Object.keys(otpError).length === 0) {
                set();
            }
            console.log(data);
       
       
    };

    const handleResendClick = () => {
       
        setRemainingTime(1 * 60);
    };
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <CoverImg2 className="col-6 d-lg-block d-none p-0">
                        <div>
                            <img src={cover} alt="" className='w-100 cover' />
                        </div>
                    </CoverImg2>
                    <div className="col-lg-6 col-12 p-0">
                        <SignIn2Div>
                            <div className='text-center mt-5'>
                                <img src={logo} alt="" />
                                <div className="mt-5">
                                    <p className='heading'>OTP Verificaition</p>
                                    <p className='para'>Please enter the OTP code we have send to your <br /> Registered email</p>
                                </div>


                            </div>
                            <div className='mt-5'>
                                <form action="">

                                    <div className='d-flex justify-content-center mt-2'>
                                        <OtpInput
                                            value={otp}
                                            onChange={(otp) => {
                                                setOtp(otp);
                                                setOtpError('');
                                            }}
                                            numInputs={6}
                                            renderInput={(props, index) => <input {...props} key={index} />}
                                            className='otp'
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className='mt-5 text-center'>
                                <p className='time'>{Math.floor(remainingTime / 60)}:{remainingTime % 60}</p>
                                <Button onClick={handleContinueClick} disabled={isButtonDisabled}>
                                    Continue
                                </Button>
                            </div>
                            <div className='text-center mt-3'>
                                <button className='resendButton' onClick={handleResendClick} disabled={remainingTime > 0}>
                                    Resend
                                </button>
                            </div>
                        </SignIn2Div>

                    </div>
                </div>
            </div>



        </>
    )
}

export default SignUpOtp