import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AllApplications = () => {
    const token = localStorage.getItem('login')
    const [applicationdata, setapplicationdata] = useState([])

    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_API + '/applications/allapplications', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(res => setapplicationdata(res.data.Result))
            .catch(err => console.log(err))
    }, [])

    const getStatusStyle = (status) => {
        switch (status) {
            case "Accepted":
                return "text-green-600 bg-green-100";
            case "Rejected":
                return "text-red-600 bg-red-100";
            case "pending":
                return "text-yellow-600 bg-yellow-100";
            default:
                return "";
        }
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg mt-4">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">📋 All Applications</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700 border-b">
                            <th className="py-3 px-4 font-semibold">#</th>
                            <th className="py-3 px-4 font-semibold">📧 Email</th>
                            <th className="py-3 px-4 font-semibold">👤 NIC</th>
                            <th className="py-3 px-4 font-semibold">🎓 Course</th>
                            <th className="py-3 px-4 font-semibold">🏫 Institute</th>
                            <th className="py-3 px-4 font-semibold">📌 Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applicationdata.map((app, index) => (
                            <tr
                                key={index}
                                className="border-b hover:bg-gray-50 transition duration-200"
                            >
                                <td className="py-3 px-4">{index + 1}</td>
                                <td className="py-3 px-4">{app.email}</td>
                                <td className="py-3 px-4 capitalize">{app.nic}</td>
                                <td className="py-3 px-4">{app.course}</td>
                                <td className="py-3 px-4">{app.camups}</td>
                                <td className="py-3 px-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(app.status)}`}
                                    >
                                        {app.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllApplications;
