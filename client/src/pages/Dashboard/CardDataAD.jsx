import React from 'react';
import { BsFileText, BsPersonLinesFill, BsPersonWorkspace } from 'react-icons/bs';
import { MdFolderSpecial } from "react-icons/md";

const CardDataAD = () => {
    const admindirdata = [
        {
            id: 1,
            name: 'Total Interns',
            value: "8/10",
            icon: BsPersonWorkspace,
            subtitle: 'Interns Enrolled',
            color: 'bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600',
        },

        {
            id: 2,
            name: 'Active Supervisors',
            value: 40,
            icon: BsPersonLinesFill,
            subtitle: 'Supervisors Active',
            color: 'bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600',
        },

        {
            id: 3,
            name: 'Pending Applications',
            value: 40,
            icon: BsFileText,
            subtitle: 'Apps Awaiting',
            color: 'bg-gradient-to-r from-pink-400 via-red-500 to-pink-600',
        },

        {
            id: 4,
            name: 'Projects',
            value: 40,
            icon: MdFolderSpecial,
            subtitle: 'Ongoing Projects',
            color: 'bg-gradient-to-r from-green-400 via-teal-500 to-green-600',
        },
    ];

    return (
        <div className="grid xl:grid-cols-4 md:grid-cols-3 gap-4">
            {admindirdata.map((data, index) => {
                return (
                    <div
                        className={`${data.color} py-8 px-6 rounded-xl shadow-lg text-white`}
                        key={index}
                    >
                        <div className="flex items-center space-x-4 mb-4">
                            <data.icon className="text-3xl" />
                            <h1 className="text-xl font-semibold">{data.name}</h1>
                        </div>
                        <h1 className="text-sm text-gray-200">{data.subtitle}</h1>
                        <h2 className="text-3xl font-bold mt-4">
                            {data.value}
                        </h2>
                    </div>
                );
            })}
        </div>
    );
};

export default CardDataAD;
