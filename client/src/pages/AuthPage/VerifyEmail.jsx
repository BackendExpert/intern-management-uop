import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DefultInput from '../../components/Forms/DefultInput';
import DefultButton from '../../components/Buttons/DefultButton';
import secureLocalStorage from 'react-secure-storage';

const VerifyEmail = () => {
    const navigate = useNavigate()

    const email = secureLocalStorage.getItem('VerifyEmail')

    const [otpdata, setotpdata] = useState({
        otp: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setotpdata((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const headleVerifyEmail = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(import.meta.env.VITE_APP_API + '/auth/verifyEmail/' + email, otpdata)
                .then(res => {
                    if (res.data.Status === "Success") {
                        alert(res.data.Message)
                        navigate('/', { replace: true })
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

    if (email) {
        return (
            <div className='bg-gray-200 min-h-screen flex items-center justify-center py-10 px-4'>
                <div className="max-w-2xl w-full bg-white p-10 rounded-2xl shadow-2xl border border-gray-300">
                    <div className="text-center text-gray-500 mb-4">
                        <h1 className="text-xl font-semibold uppercase">Verify Email Address</h1>
                        <h1 className="text-red-500 font-semibold">Please Verify Your Email Now and You cannot Verify Later</h1>
                    </div>

                    <form onSubmit={headleVerifyEmail} method="post" >
                        <DefultInput
                            label={"Enter OTP: (Check Email that you enter when Registation)"}
                            type={'text'}
                            name={'otp'}
                            value={otpdata.otp}
                            required
                            placeholder={"OTP (One Time Password)"}
                            onChange={handleInputChange}
                        />

                        <div className="">
                            <DefultButton
                                btntype={'submit'}
                                text='Verify OTP'
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    else {
        useEffect(() => {
            localStorage.clear()
            navigate('/', { replace: true })
        }, [])
    }
}

export default VerifyEmail