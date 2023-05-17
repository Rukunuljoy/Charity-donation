import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";

const Registration = () => {

    const { register, formState: { errors } } = useForm();
    const [signUpError, setSignUpError] = useState('');




    return (
        <div className='flex h-screen mb-12 justify-center flex-col md:flex-row lg:flex-row items-center gap-12'>
            <div>
                <img className='h-[600px]' src="https://i.ibb.co/XxqDcj2/Mobile-login-pana.png" alt="" />
            </div>
            <div>
                <div className='flex justify-center items-center rounded-lg '>
                    <div className='w-96 p-7 my-5 shadow-2xl'>
                        <h1 className='text-2xl text-center font-bold'>Sign Up</h1>
                        <form>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Name</span></label>
                                <input {...register("name", {
                                    required: 'Name is required',
                                })} className="input input-bordered w-full max-w-xs" type="text" />
                                {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Email</span></label>
                                <input {...register("email", {
                                    required: 'Email is required'
                                })} className="input input-bordered w-full max-w-xs" type="email" />
                                {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Password</span></label>
                                <div className='position: relative'>
                                    <input {...register("password", {
                                        required: 'Password is required',
                                        minLength: { value: 6, message: 'Password must be 6 character long' },
                                        pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase special character and number' }
                                    })} className="input input-bordered w-full max-w-xs" />
                                    <span className='position: absolute right-3 top-2'></span>
                                    {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                                </div>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"> <span className="label-text">Confirm Password</span></label>
                                <input {...register("confirmPassword", {
                                    required: 'Password is required',
                                    minLength: { value: 6, message: 'Password must be 6 character long' },
                                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase special character and number' }
                                })} className="input input-bordered w-full max-w-xs" type="password" />
                                {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                            </div>
                            <input className='btn btn-info w-full mt-6 text-white' value="Sign Up" type="submit" />
                            {signUpError && <p className='text-red-600'> {signUpError}</p>}
                            {/* <button onClick={googleLoginUser} type="submit" className="btn w-full mt-2 border text-gray-800 bg-gray-50 border-sky-500 hover:bg-white">Sign In with <FcGoogle className="ml-4 text-2xl"></FcGoogle></button> */}
                        </form>
                        <h2 className='text-lg text-center mt-6'>--------Login with social account-------</h2>
                    <div className='flex text-center gap-8 justify-center p-8'>
                        <Link><FaGoogle size={40} className='hover:text-orange-600'/></Link>
                        <Link><FaGithub size={40} className='hover:text-orange-600'/></Link>
                        <Link><FaFacebook size={40} className='hover:text-orange-600'/></Link>
                    </div>
                        <div>
                            <p className="text-sm pt-4 capitalize text-center">Already have an account? <Link to='/login' className="text-[#0EA5E9] ">Login</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration ;