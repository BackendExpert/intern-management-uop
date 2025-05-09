import axios from 'axios';
import React from 'react'
import { useState } from 'react'

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
        try{
            const res = await axios.post(import.meta.env.VITE_APP_API + '/auth/signUp', signupdata)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert(res.data.Message)
                }
                else{
                    alert(res.data.Error)
                }
            })
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div>SignUp</div>
    )
}

export default SignUp