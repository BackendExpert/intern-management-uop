import React from 'react'
import UopSci from '../../assets/UopSci.jpg';
import uoplogo from '../../assets/uoplogo.png';
import SignInForm from './SignInForm';

const SignIn = () => {
    return (
        <div className="xl:flex h-screen overflow-hidden -mb-8">

            {/* Image banner side */}
            <div className="hidden xl:flex w-1/2 bg-black items-center justify-center h-full border-r border-gray-300">
                <div className="relative w-full h-full">
                    <div
                        className="absolute inset-0 bg-center bg-cover opacity-25"
                        style={{ backgroundImage: `url(${UopSci})` }}
                    ></div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                        <h1 className="text-4xl font-semibold uppercase mb-6">Welcome Back to</h1>
                        <img src={uoplogo} alt="UOP Logo" className="h-20 w-auto mb-4" />
                        <h1 className="text-3xl font-semibold leading-snug mb-2">
                            Intern and Trainee Monitoring System
                        </h1>
                        <p className="mx-8 font-semibold">
                            The system simplifies the management of interns and trainees by tracking progress, assigning tasks, and ensuring smooth communication between students and faculty.
                        </p>

                        <div className="mt-6 flex flex-col items-center space-y-4">
                            <a href="/SignUp" className="text-white py-2 px-4 border border-white rounded-full duration-500 hover:bg-white hover:text-black">
                                New Member as Staff? (Create New Account)
                            </a>
                            <span>or</span>
                            <a href="/InternRegistaer" className="text-white py-2 px-4 border border-white rounded-full duration-500 hover:bg-white hover:text-black">
                                New Member as Intern/Trainee? (Create New Account)
                            </a>
                        </div>

                        <p className="mt-6 text-xs">Currently - v1.0.0</p>
                    </div>
                </div>
            </div>

            {/* Form side */}
            <div className="w-full xl:w-1/2 bg-gray-200 h-full flex items-center justify-center px-4">
                <div className="max-w-2xl w-full bg-white p-10 rounded-2xl shadow-2xl border border-gray-300">
                    <SignInForm />
                </div>
            </div>
        </div>
    )
}

export default SignIn;
