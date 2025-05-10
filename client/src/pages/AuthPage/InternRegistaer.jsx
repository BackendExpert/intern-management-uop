import React from 'react';
import uopBridge from '../../assets/uopBridge.jpg';
import uoplogo from '../../assets/uoplogo.png';
import InternDataForm from './InternDataForm';

const InternRegister = () => {
    return (
        <div className="xl:flex min-h-screen">
            {/* Form side */}
            <div className="pt-20 xl:pt-24 pb-20 xl:pb-24 w-full md:w-full bg-gray-200 flex items-start justify-center px-4 overflow-y-auto max-h-screen">

                <div className="max-w-2xl w-full bg-white p-10 rounded-2xl shadow-2xl border border-gray-300">
                    <InternDataForm />
                </div>
            </div>

            {/* Image banner side */}
            <div className="hidden xl:flex md:w-full bg-black items-center justify-center h-screen border-l border-gray-300">
                <div className="relative w-full h-full">
                    <div
                        className="absolute inset-0 bg-center bg-cover opacity-40"
                        style={{ backgroundImage: `url(${uopBridge})` }}
                    ></div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                        <h1 className="text-4xl font-semibold uppercase mb-8">Welcome to</h1>
                        <img src={uoplogo} alt="UOP Logo" className="h-20 w-auto mb-4" />
                        <h1 className="text-3xl font-semibold leading-snug">
                            Intern and Trainee Monitoring System
                        </h1>
                        <p className="mx-8 font-semibold mt-1">
                            The system simplifies the management of interns and trainees by tracking progress, assigning tasks, and ensuring smooth communication between students and faculty.
                        </p>
                        <p className="mt-4">
                            <a href="/" className="text-white py-2 px-4 border border-white rounded-full mt-4 duration-500 hover:bg-white hover:text-black">
                                to SignIn (Login)
                            </a>
                        </p>
                        <p className="mt-8 text-xs">Currently - v1.0.0</p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default InternRegister;
