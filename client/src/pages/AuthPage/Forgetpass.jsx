import React, { useState } from 'react'
import DefultInput from '../../components/Forms/DefultInput'
import DefultButton from '../../components/Buttons/DefultButton'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Forgetpass = () => {
    const navigate = useNavigate()
    const [forgetpass, setforgetpass] = useState({
        email: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setforgetpass((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const headleForgetpass = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(import.meta.env.VITE_APP_API + '/auth/forgetpass', forgetpass)
            .then(res => {
                if(res.data.Status === 'Success'){
                    alert(res.data.Message)
                    navigate('/', { replace: true })
                }
                else{
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
                    <h1 className="text-xl font-semibold uppercase">Forget Password</h1>
                    <p className="font-bold">Enter the Email you using to Register to get OTP</p>
                </div>

                <div className="my-4">
                    <form onSubmit={headleForgetpass} method="post">
                        <div className="">
                            <DefultInput
                                label={"Enter Email Address"}
                                type={'email'}
                                name={'email'}
                                value={forgetpass.email}
                                required
                                placeholder={"Email Address"}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="">
                            <DefultButton
                                btntype={'submit'}
                                text='Request OTP'
                            />
                        </div>
                    </form>

                    <div className="">
                        <p className="text-gray-500"><a href="/" className='text-blue-500 duration-500 hover:underline font-semibold'>Back</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forgetpass