import React, { useEffect, useState } from 'react'
import DefultInput from '../../components/Forms/DefultInput'
import DefultButton from '../../components/Buttons/DefultButton'
import { useNavigate } from 'react-router-dom'


const UpdatePassword = () => {
    const navigate = useNavigate()
    const EmailVerify = localStorage.getItem('EmailToken')

    const [updatepass, setUpdatepass] = useState({
        email: '',
        newpass: '',
        confirmNewPass: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatepass((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const headleUpdatePass = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(import.meta.env.VITE_APP_API + '/auth/forgetpass', updatepass)
        }
        catch (err) {
            console.log(err)
        }
    }

    if (EmailVerify) {
        return (
            <div className='bg-gray-200 min-h-screen flex items-center justify-center py-10 px-4'>
                <div className="max-w-2xl w-full bg-white p-10 rounded-2xl shadow-2xl border border-gray-300">
                    <div className="text-center text-gray-500">
                        <h1 className="text-xl font-semibold uppercase">Update Password</h1>
                    </div>

                    <div className="my-4">
                        <form onSubmit={headleUpdatePass} method="post">
                            <div className="">
                                <DefultInput
                                    label={"Enter Username"}
                                    type={'text'}
                                    name={'username'}
                                    value={updatepass.email}
                                    required
                                    placeholder={"Username"}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="">
                                <DefultInput
                                    label={"Enter New Password"}
                                    type={'password'}
                                    name={'newpass'}
                                    value={updatepass.newpass}
                                    required
                                    placeholder={"New Password"}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="">
                                <DefultInput
                                    label={"Confirm New Password"}
                                    type={'password'}
                                    name={'confirmNewPass'}
                                    value={updatepass.confirmNewPass}
                                    required
                                    placeholder={"Confirm New Password"}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="">
                                <DefultButton
                                    btntype={'submit'}
                                    text='Update Password'
                                />
                            </div>
                        </form>

                    </div>
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

export default UpdatePassword