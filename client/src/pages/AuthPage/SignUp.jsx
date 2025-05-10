import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import DefultInput from '../../components/Forms/DefultInput';
import DefultButton from '../../components/Buttons/DefultButton';

const SignUp = () => {
    const [signupdata, setsignupdata] = useState({
        username: '',
        email: '',
        password: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setsignupdata((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const headleSignUp = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(import.meta.env.VITE_APP_API + '/auth/signUp', signupdata)
                .then(res => {
                    if (res.data.Status === "Success") {
                        alert(res.data.Message)
                    }
                    else {
                        alert(res.data.Error)
                    }
                })
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='bg-gray-200 min-h-screen flex items-center justify-center py-10 px-4'>
            <div className="max-w-2xl w-full bg-white p-10 rounded-2xl shadow-2xl border border-gray-300">
                <div className="text-center text-gray-500">
                    <h1 className="text-xl font-semibold uppercase">Registation</h1>
                    <p className="font-bold">Staff</p>
                </div>

                <div className="my-4">
                    <form onSubmit={headleSignUp} method="post">
                        <div className="">
                            <DefultInput
                                label={"Enter Username"}
                                type={'text'}
                                name={'username'}
                                value={signupdata.username}
                                required
                                placeholder={"Username"}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="">
                            <DefultInput
                                label={"Enter Email Address"}
                                type={'email'}
                                name={'email'}
                                value={signupdata.email}
                                required
                                placeholder={"Email Address"}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="">
                            <DefultInput
                                label={"Enter Password"}
                                type={'password'}
                                name={'password'}
                                value={signupdata.password}
                                required
                                placeholder={"Password"}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="">
                            <DefultButton 
                                btntype={'submit'}
                                text='Signup as Staff'
                            />
                        </div>
                    </form>

                    <div className="">
                        <p className="text-gray-500">Already have an Account ? <a href="" className='text-blue-500 duration-500 hover:underline font-semibold'>SignIn</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp