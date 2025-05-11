import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage';

const VerifyPassOtp = () => {
    const navigate = useNavigate()
    const [passotyverfiy, setpassotyverfiy] = useState({
        email: '',
        otp: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setpassotyverfiy((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const headleVerifyOTP = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(import.meta.env.VITE_APP_API + '/auth/forgetpass', passotyverfiy)
                .then(res => {
                    if (res.data.Status === "Success") {
                        alert(res.data.Message)
                        localStorage.setItem("EmailToken", res.data.token)
                        navigate('/UpdatePassword', { replace: true })
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
                    <h1 className="text-xl font-semibold uppercase">Verify OTP</h1>
                </div>

                <div className="my-4">
                    <form onSubmit={headleVerifyOTP} method="post">
                        <div className="">
                            <DefultInput
                                label={"Enter Email Address"}
                                type={'email'}
                                name={'email'}
                                value={passotyverfiy.email}
                                required
                                placeholder={"Email Address"}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="">
                            <DefultInput
                                label={"Enter OTP (One Time Password)"}
                                type={'text'}
                                name={'otp'}
                                value={passotyverfiy.otp}
                                required
                                placeholder={"OTP (One Time Password)"}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="">
                            <DefultButton
                                btntype={'submit'}
                                text='Verify OTP'
                            />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default VerifyPassOtp