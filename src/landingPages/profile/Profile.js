import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { BackGround } from '../vehicle-listing2/Style'
import driver from '../../images/Ellipse 82.png'
import { FormDiv } from './Style'
import ReactFlagsSelect from 'react-flags-select'
import { useState } from 'react'
import Footer from '../../components/footer/Footer'
import { useForm } from 'react-hook-form'





const Profile = () => {
    const [selected, setSelected] = useState("PK");

    const [img, setImg] = useState(null);
    const [fileName, setFileName] = useState('No selected file');

    const handleFileInputChange = (event) => {
        const files = event.target.files;

        if (files.length > 0) {
            setFileName(files[0].name);
            setImg(URL.createObjectURL(files[0]));
        }
    };

    const handleUploadButtonClick = () => {
        document.querySelector('.input-field').click();
    };





    const [drivingLicenseImg, setDrivingLicenseImg] = useState(null);
    const [drivingLicenseFileName, setDrivingLicenseFileName] = useState('No selected file');
    const [carLicenseBackImg, setCarLicenseBackImg] = useState(null);
    const [carLicenseBackFileName, setCarLicenseBackFileName] = useState('No selected file');
    const handleDrivingLicenseInputChange = (event) => {
        const files = event.target.files;

        if (files.length > 0) {
            setDrivingLicenseFileName(files[0].name);
            setDrivingLicenseImg(URL.createObjectURL(files[0]));
        }
    };

    const handleCarLicenseBackInputChange = (event) => {
        const files = event.target.files;

        if (files.length > 0) {
            setCarLicenseBackFileName(files[0].name);
            setCarLicenseBackImg(URL.createObjectURL(files[0]));
        }
    };

    const handleDrivingLicenseUploadButtonClick = () => {
        document.querySelector('.driving-license-input-field').click();
    };

    const handleCarLicenseBackUploadButtonClick = () => {
        document.querySelector('.car-license-back-input-field').click();
    };




    const { register, formState: { errors }, handleSubmit, } = useForm();

    const onSubmit = (data) => {
        if (Object.keys(errors).length === 0) {

        }
        console.log(data);
    };



    const [selectedImage, setSelectedImage] = useState(null);
    const [selectImage, setSelectImage] = useState(null);
    const handleImageChange = (event) => {
        // Assuming you have an input field of type "file" for image selection
        const file = event.target.files[0];

        if (file) {
            // Use FileReader to read the selected image
            const reader = new FileReader();

            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setSelectedImage(null);
        // Assuming you have a reference to the file input
        // Reset the file input to allow selecting the same file again
        document.getElementById('imageInput').value = '';
    };

    const handleImageChange2 = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setSelectImage(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };
  
    const handleRemoveImage2 = () => {
        setSelectImage(null);
    
        const inputElement = document.getElementById('imageInput');
        if (inputElement) {
            inputElement.value = '';
        }
    
        const inputElement2 = document.getElementById('imageInput2');
        if (inputElement2) {
            inputElement2.value = '';
        }
    };




    return (
        <>
            <Navbar />
            <BackGround className='p-lg-5 p-0'>
                <div className="container-fluid p-lg-3 p-0">
                    <div className="card border-0 rounded-5 p-lg-4 p-0">
                        <div className="card-body">
                            <div className='text-end mt-3 me-3'>
                                <button type='button' className='btn btn-success'>Save Profile</button>
                            </div>
                            <div className='d-flex'>
                                <img src={driver} alt="" />
                                <div className='mt-5 ms-4'>
                                    <button type='button' className='btn btn-primary'>Upload Profile</button>
                                </div>
                            </div>
                            <FormDiv>
                                <div className="row mt-4">
                                    <div className="col-lg-3 col-md-6 col-12">
                                        <div>

                                            <div>
                                                <label htmlFor="" className='label'> Full Name</label>
                                                <div>
                                                    <input type='text' className='input mt-3' {...register('fullName', { required: true, })} onBlur={handleSubmit(onSubmit)} />
                                                </div>
                                                <p className='error-para mt-2 ms-lg-5 ms-md-5 ms-sm-2 ps-3'>
                                                    {errors.fullName?.type === "required" && "Full Name is required"}

                                                </p>
                                            </div>
                                            <div className='mt-4'>
                                                <label htmlFor="" className='label'>Post Code</label>
                                                <div>
                                                    <input type='text' className='input mt-3'  {...register('postCode', { required: true, })} onBlur={handleSubmit(onSubmit)} />
                                                </div>
                                                <p className='error-para mt-2 ms-lg-5 ms-md-5 ms-sm-2 ps-3'>
                                                    {errors.postCode?.type === "required" && "Post Code is required"}

                                                </p>
                                            </div>


                                        </div>

                                    </div>
                                    <div className="col-lg-3 col-md-6 col-12">
                                        <div>
                                            <label htmlFor="" className='label'>Email</label>
                                            <div>
                                                <input type='email' className='input mt-3'  {...register('email', { required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i })} onBlur={handleSubmit(onSubmit)} />
                                            </div>
                                            <p className='error-para mt-2 ms-lg-5 ms-md-5 ms-sm-2 ps-3'>
                                                {errors.email?.type === "required" && "Email is required"}

                                            </p>

                                            <div className='mt-4'>
                                                <label htmlFor="" className='label'>Address</label>
                                                <div>
                                                    <input type='adress' className='input mt-3' {...register('address', { required: true, })} onBlur={handleSubmit(onSubmit)} />
                                                </div>
                                                <p className='error-para mt-2 ms-lg-5 ms-md-5 ms-sm-2 ps-3'>
                                                    {errors.address?.type === "required" && "Address is required"}

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 mt-lg-0 mt-4">
                                        <div>
                                            <label htmlFor="" className='label'>Phone</label>
                                            <div className='text-center mt-2 d-flex justify-content-start'>
                                                <span>
                                                    <ReactFlagsSelect
                                                        selected={selected}
                                                        onSelect={(code) => setSelected(code)}
                                                        showSelectedLabel={false}
                                                        showSearch={false}
                                                        className='flag'
                                                    />
                                                </span>
                                                <input className='phone-input' type="number" placeholder='Enter Your Number' {...register('phone', { required: true, })} onBlur={handleSubmit(onSubmit)} />
                                            </div>
                                            <p className='error-para mt-2 ms-lg-5 ms-md-5 ms-sm-2 ps-3'>
                                                {errors.phone?.type === "required" && "Phone Number is required"}

                                            </p>

                                            <div className='mt-4'>

                                                <label htmlFor="" className='label mt-1'>Gender</label>
                                                <div className="d-flex">
                                                    <div className="form-check check-input">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label className="form-check-label" for="flexRadioDefault1">
                                                            Male
                                                        </label>
                                                    </div>
                                                    <div className="form-check check-input">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label className="form-check-label" for="flexRadioDefault1">
                                                            Female
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FormDiv>
                        </div>
                    </div>

                    <FormDiv className='card rounded-5 border-0 mt-5 p-4'>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className='mt-3'>
                                        <p className='label'>Driving Licence</p>
                                    </div>
                                    <div>
                                        <input type="text" className='input'{...register('license', { required: true, })} onBlur={handleSubmit(onSubmit)} />
                                    </div>
                                    <p className='error-para mt-2 ms-lg-5 ms-md-5 ms-sm-2 ps-3'>
                                        {errors.license?.type === "required" && "Driving License is required"}

                                    </p>

                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className='card border-0'>
                                        <div className='card-body'>
                                            <h4 className='driving-lisence'>Car Licence Back Image  </h4>
                                            <p className='backColor2'>Upload your licence back image,<br />
                                                Supported Formats: JPG, PNG,;<br />
                                                Max File Size:5MB. </p>
                                            <div className="form-group text-end">
                                                <img src={selectImage} className="w-100 margin" />
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    className="input-field driving-license-input-field"
                                                    hidden
                                                    // onChange={handleDrivingLicenseInputChange}
                                                    id="imageInput"
                                                    onChange={handleImageChange2}
                                                />
                                                {selectImage && (
                                                    <div>
                                                        {/* Button to remove the selected image */}
                                                        <button onClick={handleRemoveImage2} className='btn-close cross'></button>
                                                    </div>
                                                )}
                                                <button
                                                    type="button"
                                                    className="btn btn-primary save-profile"
                                                    onClick={handleDrivingLicenseUploadButtonClick}
                                                >
                                                    Upload Picture
                                                </button>

                                            </div>
                                        </div>
                                    </div>




                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className='card border-0'>
                                        <div className='card-body'>
                                            <h4 className='driving-lisence'>Car Licence Back Image  </h4>
                                            <p className='backColor2'>Upload your licence back image,<br />
                                                Supported Formats: JPG, PNG,;<br />
                                                Max File Size:5MB. </p>

                                            <div className="form-group text-end">
                                                <img src={selectedImage} className="w-100 margin" />
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    className="input-field car-license-back-input-field input-relative"
                                                    hidden
                                                    //onChange={handleCarLicenseBackInputChange}
                                                    id="imageInput"
                                                    onChange={handleImageChange}
                                                />

                                                {selectedImage && (
                                                    <div>
                                                        {/* Button to remove the selected image */}
                                                        <button onClick={handleRemoveImage} className='btn-close cross'></button>
                                                    </div>
                                                )}

                                                <button
                                                    type="button"
                                                    className="btn btn-primary save-profile"
                                                    onClick={handleCarLicenseBackUploadButtonClick} >
                                                    Upload Picture
                                                </button>



                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </FormDiv>
                </div>
            </BackGround>
            <Footer />
        </>
    )
}

export default Profile
