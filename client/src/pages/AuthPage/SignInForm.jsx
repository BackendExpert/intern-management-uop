import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import DefultInput from '../../components/Forms/DefultInput';
import DefultButton from '../../components/Buttons/DefultButton';
import secureLocalStorage from 'react-secure-storage';
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
    const navigate = useNavigate()
    const [signindata, setsignindata] = useState({
        email: '',
        password: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setsignindata((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const headleSignIn = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(import.meta.env.VITE_APP_API + '/auth/signin', signindata)
                .then(res => {
                    if (res.data.Status === "Success") {
                        alert(res.data.Message)
                        localStorage.setItem('login', res.data.Token)
                        navigate('/Dashboard/Home', { replace: true })
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
        <div>
            <div className="text-center text-gray-500">
                <h1 className="text-xl font-semibold uppercase">SignIn</h1>
            </div>

            <div className="my-4">
                <form onSubmit={headleSignIn} method="post">
                    <div className="">
                        <DefultInput
                            label={"Enter Email Address"}
                            type={'email'}
                            name={'email'}
                            value={signindata.email}
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
                            value={signindata.password}
                            required
                            placeholder={"Password"}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="">
                        <DefultButton
                            btntype={'submit'}
                            text='SignIn'
                        />
                    </div>
                </form>
                <div className="">
                    <p className="text-gray-500"><a href="/Forgetpass" className='text-blue-500 duration-500 hover:underline font-semibold'>Forget Password</a></p>
                </div>

            </div>
        </div>
    )
}

export default SignInForm