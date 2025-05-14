import React from 'react';
import { BsFileText, BsPersonLinesFill, BsPersonWorkspace } from 'react-icons/bs';
import { MdFolderSpecial } from "react-icons/md";

const ApplicationData = ({ btnclickvalue }) => {
    const dataapplication = [
        {
            id: 1,
            name: 'Total Application',
            value: 40,
            icon: BsPersonWorkspace,
            clickvalue: 'totalapplication',
            color: 'bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600',
        },


    ];

    const headleClick = (value) => {
        btnclickvalue(value)
    }

    return (
        <div className="grid xl:grid-cols-3 md:grid-cols-3 gap-4">
            {dataapplication.map((data, index) => {
                return (
                    <div
                        className={`${data.color} py-8 px-6 rounded-xl shadow-lg text-white`}
                        key={index}
                        onClick={() => headleClick(data.clickvalue)}
                    >
                        <div className="flex items-center space-x-4 mb-4">
                            <data.icon className="text-3xl" />
                            <h1 className="text-xl font-semibold">{data.name}</h1>
                        </div>
                        <h2 className="text-3xl font-bold mt-4">
                            {data.value}
                        </h2>
                    </div>
                );
            })}
        </div>
    );
};

export default ApplicationData;
