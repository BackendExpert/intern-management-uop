import React from 'react'
import { useState } from 'react'
import DefultInput from '../../components/Forms/DefultInput'
import TextAreaInput from '../../components/Forms/TextAreaInput'
import DateInput from '../../components/Forms/DateInput'
import FileInput from '../../components/Forms/FileInput'
import DefultButton from '../../components/Buttons/DefultButton'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import secureLocalStorage from 'react-secure-storage'


const InternDataForm = () => {
    const navigate = useNavigate()    
    const [stddata, setstddata] = useState({
        email: '',
        username: '',
        password: '',
        mobile: '',
        address: '',
        nic: '',
        dob: '',
        github: '',
        linkedin: '',
        campus: '',
        course: '',
        nic_copy: null,
        cv: null
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setstddata((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        const file = files[0];
        setstddata((prevData) => ({
            ...prevData,
            [name]: file,
        }));
    };

    const headlecreateintern = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('username', stddata.username);
        formData.append('email', stddata.email);
        formData.append('password', stddata.password);
        formData.append('mobile', stddata.mobile);
        formData.append('address', stddata.address);
        formData.append('nic', stddata.nic);
        formData.append('dob', stddata.dob);
        formData.append('github', stddata.github);
        formData.append('linkedin', stddata.linkedin);
        formData.append('campus', stddata.campus);
        formData.append('course', stddata.course);
        formData.append('nic_copy', stddata.nic_copy);
        formData.append('cv', stddata.cv);

        try {
            const res = await axios.post(import.meta.env.VITE_APP_API + '/auth/createIntern', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
                .then(res => {
                    if (res.data.Status === 'Success') {
                        alert(res.data.Message)
                        secureLocalStorage.setItem("VerifyEmail", formData.email)
                        navigate('/VerifyEmail', {replace: true})
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
            <h1 className="text-xl font-semibold uppercase text-center text-gray-500 mb-8">Intern / Trainee Information</h1>

            <form onSubmit={headlecreateintern} method="post">
                <div className="md:flex">
                    <div className="w-full mr-2">
                        <DefultInput
                            label={"Enter Username"}
                            type={'text'}
                            name={'username'}
                            value={stddata.username}
                            required
                            placeholder={"Username"}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="w-full ml-2">
                        <DefultInput
                            label={"Enter Email Address"}
                            type={'email'}
                            name={'email'}
                            value={stddata.email}
                            required
                            placeholder={"Email Address"}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="md:flex">
                    <div className="w-full mr-2">
                        <DefultInput
                            label={"Enter Password"}
                            type={'password'}
                            name={'password'}
                            value={stddata.password}
                            required
                            placeholder={"Password"}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="w-full ml-2">
                        <DefultInput
                            label={"Enter Mobile Number"}
                            type={'text'}
                            name={'mobile'}
                            value={stddata.mobile}
                            required
                            placeholder={"Mobile Number"}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="">
                    <TextAreaInput
                        label={"Enter Address"}
                        name={'address'}
                        value={stddata.address}
                        required
                        placeholder='Address'
                        onChange={handleInputChange}
                    />
                </div>
                <div className="md:flex">
                    <div className="w-full mr-2">
                        <DefultInput
                            label={"Enter NIC"}
                            type={'text'}
                            name={'nic'}
                            value={stddata.nic}
                            required
                            placeholder={"NIC Number"}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="w-full ml-2">
                        <DateInput
                            label={"Enter Date of Birth"}
                            name={'dob'}
                            value={stddata.dob}
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="md:flex">
                    <div className="w-full mr-2">
                        <DefultInput
                            label={"Enter Github Profile Link"}
                            type={'url'}
                            name={'github'}
                            value={stddata.github}
                            required
                            placeholder={"Github Profile Link"}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="w-full ml-2">
                        <DefultInput
                            label={"Enter LinkedIn Profile Link"}
                            type={'url'}
                            name={'linkedin'}
                            value={stddata.linkedin}
                            required
                            placeholder={"LinkedIn Profile Link"}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="md:flex">
                    <div className="w-full mr-2">
                        <DefultInput
                            label={"Enter University / Tech"}
                            type={'text'}
                            name={'campus'}
                            value={stddata.campus}
                            required
                            placeholder={"University"}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="w-full ml-2">
                        <DefultInput
                            label={"Enter Course"}
                            type={'text'}
                            name={'course'}
                            value={stddata.course}
                            required
                            placeholder={"Course (BSc or HND etc)"}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="md:flex">
                    <div className="w-full mr-2">
                        <FileInput
                            label={"Enter both site of NIC"}
                            name={'nic_copy'}
                            required
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className="w-full ml-2">
                        <FileInput
                            label={"Enter CV"}
                            name={'cv'}
                            required
                            onChange={handleFileChange}
                        />
                    </div>
                </div>

                <div className="">
                    <DefultButton
                        btntype={'submit'}
                        text='Create Intern / Trainee'
                    />
                </div>
            </form>

            <a href="/" className='text-sm pt-4 xl:hidden block text-blue-500 font-semibold hover:underline'>To SignIn (Login)</a>
        </div>
    )
}

export default InternDataForm