import React from 'react'

const AllApplications = () => {
    const applications = [
        {
            email: "jehan@123.com",
            username: "jehan",
            course: "BSc in IT",
            institute: "SIBA",
            status: "Accepted",
        },
        {
            email: "sara@456.com",
            username: "sara",
            course: "MSc in Data Science",
            institute: "UoP",
            status: "Pending",
        },
        {
            email: "alex@789.com",
            username: "alex",
            course: "BSc in CS",
            institute: "NSBM",
            status: "Rejected",
        },
    ];

    const getStatusStyle = (status) => {
        switch (status) {
            case "Accepted":
                return "text-green-600 bg-green-100";
            case "Rejected":
                return "text-red-600 bg-red-100";
            case "Pending":
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
                            <th className="py-3 px-4 font-semibold">👤 Username</th>
                            <th className="py-3 px-4 font-semibold">🎓 Course</th>
                            <th className="py-3 px-4 font-semibold">🏫 Institute</th>
                            <th className="py-3 px-4 font-semibold">📌 Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((app, index) => (
                            <tr
                                key={index}
                                className="border-b hover:bg-gray-50 transition duration-200"
                            >
                                <td className="py-3 px-4">{index + 1}</td>
                                <td className="py-3 px-4">{app.email}</td>
                                <td className="py-3 px-4 capitalize">{app.username}</td>
                                <td className="py-3 px-4">{app.course}</td>
                                <td className="py-3 px-4">{app.institute}</td>
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
