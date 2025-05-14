import React, { useState } from 'react'
import ApplicationData from './ApplicationData'
import AllApplications from './AllApplications'


const ManageApplication = () => {
    const [valueclick, setvalueclick] = useState('totalapplication')

    const headleClick = (value) => {
        setvalueclick(value)
    }
    return (
        <div>
            <h1 className="text-2xl font-semibold pb-4">📂 Applocation</h1>
            <ApplicationData btnclickvalue={headleClick}/>

            {
                (() => {
                    if(valueclick === "totalapplication"){
                        return (
                            <AllApplications />
                        )
                    }
                })()
            }
        </div>
    )
}

export default ManageApplication