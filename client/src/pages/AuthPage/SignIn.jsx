import React from 'react'
import UopSci from '../../assets/UopSci.jpg';
import uoplogo from '../../assets/uoplogo.png';
import SignInForm from './SignInForm';

const SignIn = () => {
    return (
        <div className="xl:flex min-h-screen">

            {/* Image banner side */}
            <div className="hidden xl:flex md:w-full bg-black items-center justify-center h-screen border-r border-gray-300">
                <div className="relative w-full h-full">
                    <div
                        className="absolute inset-0 bg-center bg-cover opacity-25"
                        style={{ backgroundImage: `url(${UopSci})` }}
                    ></div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                        <h1 className="text-4xl font-semibold uppercase mb-8">Welcome Back to</h1>
                        <img src={uoplogo} alt="UOP Logo" className="h-20 w-auto mb-4" />
                        <h1 className="text-3xl font-semibold leading-snug">
                            Intern and Trainee Monitoring System
                        </h1>
                        <p className="mx-8 font-semibold mt-1">
                            The system simplifies the management of interns and trainees by tracking progress, assigning tasks, and ensuring smooth communication between students and faculty.
                        </p>
                        <p className="mt-4">
                            <a href="/SignUp" className="text-white py-2 px-4 border border-white rounded-full mt-4 duration-500 hover:bg-white hover:text-black">
                                New Member as Staff ? (Create New Account)
                            </a>
                            <p className='my-4'>or</p>
                            <a href="/InternRegistaer" className="text-white py-2 px-4 border border-white rounded-full mt-4 duration-500 hover:bg-white hover:text-black">
                                New Member as Intern/Trainee ? (Create New Account)
                            </a>
                        </p>
                        <p className="mt-8 text-xs">Currently - v1.0.0</p>
                    </div>
                </div>
            </div>

            {/* Form side */}
            <div className='bg-gray-200 min-h-screen w-full flex items-center justify-center py-10 px-4'>
                <div className="max-w-2xl w-full bg-white p-10 rounded-2xl shadow-2xl border border-gray-300">
                    <SignInForm />
                </div>
            </div>
        </div>

    )
}

export default SignIn